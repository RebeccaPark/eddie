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

const pathName = '/Users/rebeccapark/Documents';

app.get('/', (req, res) => { 
    fs.readdir(pathName, (err, files) => {
        res.json({
            files: files,
        })
    })
  }
);

app.get('/:fileName', (req, res) => {
    const fileName = req.params.fileName;
    console.log('dirname: ', __dirname);

    const filePath = path.join('/Users/rebeccapark/Documents', fileName);
    fs.readFile(filePath, {encoding: 'utf-8'}, (err, data) => {
        res.json({
            content: data,
        })
    })
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
})