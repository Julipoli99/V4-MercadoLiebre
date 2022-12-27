const express = require("express");
const app = express();
const mainRouter = require("./route")
const path = require("path");

app.listen(3000, () => {
    console.log("App running on port: 3000")
})

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, "/public")))


app.use("/", mainRouter);



