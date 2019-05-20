var express = require('express');
var app = express();

const fs = require('fs');

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

app.get('/', (req, res) => res.json({msg: 'CORs-enabled.'}));
// fs.readdir(pathName, (err, files) => {
//     files.forEach(file => {
//       console.log(file);
//     })
// })

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
})