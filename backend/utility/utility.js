const fs = require('fs');

function openFile (path, res) {
  fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      console.log('data: ', data);
      res.json({
          fileContent: data
      });
  });
}

function openDirectory (path, res) {
  let toReturn;
  const promise1 = () => new Promise((resolve, reject) => {
      return fs.readdir(path, (err, files) => {
          if (err) {
              reject(err);
          }
          resolve(files.filter(file => !(/(^|\/)\.[^\/\.]/g).test(file)));
      });
  });

  return promise1().then((files) => {
      const promises = files.map((file) => {
          return new Promise((resolve, reject) => {
              fs.lstat(`${path}/${file}`, (err, res) => {
                  resolve({name: file, isDirectory: res.isDirectory(), path: `${path}/${file}`});
              });
          })
      })

      return Promise.all(promises);
  }).then((result) => {
      if(res) {
        res.json({ files: result });
      }
      
      if(!res) {
        return result;
      }
  })
}

function writeFile(fileName, content, res) {
    fs.writeFile(fileName, content, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
        res.json({save: 'success'});
    });
}

module.exports.openDirectory = openDirectory;
module.exports.openFile = openFile;
module.exports.writeFile = writeFile;