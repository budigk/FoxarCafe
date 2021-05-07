const express = require("express");
const app = express();
const PORT = 3000;
const routes = require('./routes/index.js')
const formatNumber = require('./helpers/formatNumber.js')
const getNoTrans = require('./helpers/getNoTrans.js')
const session = require('express-session');

app.set ('view engine', 'ejs');
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname + '/public'));
app.use(express.static('public'))
app.locals.formatNumber = formatNumber;
app.locals.getNoTrans = getNoTrans;

app.use(session({
    secret: 'budigk',
    resave: true,
    saveUninitialized: true,
    cookie: {secure:false, maxAge: 600000}
}))
app.use('/', routes)

app.listen(PORT, () => {
    console.log("Foxar Cafe Server Running On " + PORT);
})