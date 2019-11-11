var orm = require('../config/orm');

var burgers = {
    all: function(cb) {
        orm.all("burger", function(res) {
            cb(res);
        });
    },
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    })
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    })
  }
};
    
    // Export the database functions for the controller (burgers_Controller.js).
    module.exports = burgers;
    