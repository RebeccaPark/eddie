var express = require('express');
var app = express();

const fs = require('fs');

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());


app.all('*', function (req, res, next) {
  console.log('incoming!!!!!!!!!!!');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  next();
});

const pathName = '/Users';

app.get('/', (req, res) => { 
    fs.readdir(pathName, (err, files) => {
        res.json({
            files: files,
        })
    })

    // console.log('afterwards!!!!!!!'); res.json({msg: 'CORs-enabled.'});
  }
);


app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
})