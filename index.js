const express = require("express");
const app = express();
const PORT = 3000;
const routes = require('./routes/index.js')

app.set ('view engine', 'ejs');
app.use(express.urlencoded({extended:true}))

app.use('/', routes)

app.listen(PORT, () => {
    console.log("Foxar Cafe Server Running On " + PORT);
})