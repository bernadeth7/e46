const express = require('express');
const app = express();

app.get('/',function(req,res){
    res.send('Hello Kode-Brewers in Express!');
});

app.listen(3000);
console.log('Server listening at 127.0.0.1:3000');