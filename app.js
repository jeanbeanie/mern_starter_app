//app.js
const express = require('express');
const app = express();

//Serve static files from directory public
app.use(express.static('public'));
const rootFilePath = __dirname + '/public/index.html';

//Public Routes
app.get ('/', (req, res) => res.send(rootFilePath));

//Start Node server
app.listen(3000, () => console.log('> App listening on port 3000!'));
