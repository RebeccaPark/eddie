//const path = require('path');
const fs = require('fs');

const pathName = '../frontend/';

fs.readdir(pathName, (err, files) => {
    files.forEach(file => {
        console.log(file);
    })
})