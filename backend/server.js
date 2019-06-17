var express = require('express');
var app = express();

const fs = require('fs');
const path = require('path');

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
    fs.readFile(filePath, {encoding: 'utf-8'}, (err, data) => {
        res.json({
            content: 'hi',
        })
    })
});

app.get('/', (req, res) => { 
    console.log('here');
    // fs.readdir(pathName, (err, files) => {
    //     res.json({
    //         files: files,
    //     })
    // })

    res.json({
        success: 'true',
    });
  }
);

var server = app.listen(3000, function() {
   console.log('Server running at http://localhost:' + server.address().port);
})