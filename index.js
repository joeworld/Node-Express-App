const express = require('express');
const app = express();
require('dotenv').config(); //Our environment file
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000; //Serve our app on port 5000

require('./config/db'); //Database Connection

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/static', express.static('public'));
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.get('*', (req, res) => {
    res.send('404! This is an invalid URL.');
});

app.listen(port, () => console.log(`My express app is listening on port ${port}`));