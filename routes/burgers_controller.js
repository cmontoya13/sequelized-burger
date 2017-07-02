// var express = require("express");

// var burger = express.Router();

// Import the model (burger.js) to use its database functions.
// var router = require("../models");
// var db = require("../models");
module.exports = function(app) {
// Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {
//   burger.all(function(data) {
//     var hbsObject = {
//       burgers: data
//     };
//     res.render("index", hbsObject);
//   });
// });

// GET route for getting all of the burgers
app.get("/api/burgers", function(req, res) {
  db.burgers.findAll({}).then(function(data) {
    // res.json(data);
      var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

// router.post("/", function(req, res) {
//   burger.create([
//     "burger_name"
//   ], [
//     req.body.burger_name
//   ], function() {
//     res.redirect("/");
//   });
// });

// POST route for saving a new burger. Create a burger using the data on req.body
app.post("/api/burgers", function(req, res) {
  db.burger.create({
    burger_name: req.body.burger_name
  }).then(function(data) {
    res.json(data);
  });
});

// router.put("/:id", function(req, res) {
//   var condition = "id = " + req.params.id;
//   burger.update({
//     devoured: req.body.devoured
//   }, condition, function() {
//     res.redirect("/");
//   });
// });

// PUT route for updating burgers. Access the updated burger in req.body
  app.put("/api/burgers", function(req, res) {
    db.burger.update({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(data){
      res.json(data);
    });
  });

// Export routes (server.js)
// module.exports = router;
// module.exports = db;
};
