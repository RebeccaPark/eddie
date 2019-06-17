var express = require('express');
var app = express();

const fs = require('fs');
const path = require('path');
const homedir = require('os').homedir();

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());


app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
});

const pathName = '/Users/rebecca/Projects/eddie/README.md';

app.get('/:fileName', (req, res) => {
    console.log('here2');
    const fileName = req.params.fileName;
    console.log('fileName: ', fileName);
    console.log('dirname: ', __dirname);
    //console.log('req: ', req);

    const filePath = path.join('/Users/rebecca/projects', fileName);
    fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
        res.json({
            content: 'hi',
        })
    })
});

app.get('/', (req, res) => {
    const promise1 = () => new Promise((resolve, reject) => {
        return fs.readdir(homedir, (err, files) => {
            if (err) {
                reject(err);
            }
            //excluding hidden files
            resolve(files.filter(file => !(/(^|\/)\.[^\/\.]/g).test(file)));
        });
    });

    promise1().then((files) => {
        const promises = files.map((file) => {
            return new Promise((resolve, reject) => {
                fs.lstat(`${homedir}/${file}`, (err, res) => {
                    resolve({name: file, isDirecotry: res.isDirectory()});
                });
            })
        })

        return Promise.all(promises);
    }).then((result) => {
        console.log(result);
        res.json({ files: result });
    })

    // res.json({

    // })

    // files1.forEach(file => {
    //     fs.lstat(`${homedir}/${file}`, (err, res) => {
    //         filesInfo.push({
    //             name: file,
    //             isDirecotry: res.isDirectory(),
    //         });
    //     })
    // });

    // promise1.then((info) => res.json({
    //     files: info,
    // }));
});

var server = app.listen(3000, function () {
    console.log('Server running at http://localhost:' + server.address().port);
})