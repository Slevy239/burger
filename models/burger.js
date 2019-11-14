var orm = require("../config/orm.js");


//burger Model
var burger = {
  //display all
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  //create data 
  create: function(name, cb) {
    orm.create("burgers", [
      "burger_name", "devoured"
    ], [
      name, false
    ], cb);
  },
  //update ID to true
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("burgers", {
      devoured: true
    }, condition, cb);
  }
};

module.exports = burger;
