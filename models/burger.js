var orm = require('../config/orm');

var burgers = {
    all: function(cb) {
        orm.all("burger", function(res) {
            cb(res);
        });
    },
    
    insertOne: function(cols,vals,cb){
      orm.insertOne("burger", cols, vals, function(res){
        cb(res);
      });
    },
  
    updateOne: function(objColVals, condition, cb){
      orm.updateOne("burger", objColVals, condition, function(res){
        cb(res);
      });
    },
  };
    
    // Export the database functions for the controller (catsController.js).
    module.exports = burgers;
    