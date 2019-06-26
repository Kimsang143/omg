const express = require('express');
const path = require('path');
const app = express();

//app.use(express.static(path.join(__dirname, 'build')));

//app.get('/*', function(req, res) {
///  res.sendFile(path.join(__dirname, 'build', 'index.html'));
//});
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000);
