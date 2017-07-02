var express = require("express");
// var methodOverride = require("method-override");
var bodyParser = require("body-parser");
// var path = require("path");
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// app.use(methodOverride("_method"));
app.use(express.static("./public"));
//Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Import routes and give the server access to them.
// var routes = require("./routes/burgers_controller.js");
// require("./routes/html-routes.js")(app);
require("./routes/burgers_controller.js")(app);

// app.use("/", routes);

// app.listen(port);
// Starting our express app
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    });
});