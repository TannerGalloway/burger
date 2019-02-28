const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controller.js");
// create server 
var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));
// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// middleware router
app.use(routes);

app.listen(PORT, function() 
{
    console.log("Server listening on: http://localhost:" + PORT);
});