module.exports = function(sequelize, DataTypes) {
var burgers = sequelize.define("burgers", {
  burger_name: {
    type: DataTypes.STRING,
    len: [1, 140],
    notNull: false
  },
  devoured: {
    type: DataTypes.BOOLEAN
  }
});
return burgers;
};

// var burger = {
//   all: function(cb) {
//     orm.all("burgers", function(res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   create: function(cols, vals, cb) {
//     orm.create("burgers", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   update: function(objColVals, condition, cb) {
//     orm.update("burgers", objColVals, condition, function(res) {
//       cb(res);
//     });
//   }
// };

// // Export the database functions for the controller (burgersController.js)
// module.exports = burger;