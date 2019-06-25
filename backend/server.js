var utility = require('./utility/utility');

var express = require('express');
var app = express();
app.use(express.json());

const homedir = require('os').homedir();

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
});

app.get('/open', (req, res) => {
    let { isDirectory, path } = req.query;
    isDirectory = JSON.parse(isDirectory);
    if (isDirectory) {
        console.log('opendirectory');
        utility.openDirectory(path, res);
    } else {
        console.log('openfile');
        utility.openFile(path, res);
    }
});

app.get('/', (req, res) => {
    utility.openDirectory(homedir, res);
});

app.post('/save/:filename', (req, res) => {
    console.log('body: ', req.body);
    const path = `${homedir}/document/eddie/${req.params.filename}`
    utility.writeFile(req.params.filename, req.body.content, res);
})

var server = app.listen(3000, function () {
    console.log('Server running at http://localhost:' + server.address().port);
})