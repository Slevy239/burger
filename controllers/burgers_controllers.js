var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

//display index.handlebars and the data from mySQL
router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject)
    res.render("index", hbsObject)
  });
});

//post route. 
//Posts Burger_name to database
router.post("/api/burgers", function (req, res) {
  burger.create([
    "burger_name", "devoured"
  ],
    [
      req.body.name, req.body.devoured
    ], function (result) {
      console.log(result);
      //redirects to root
      res.json(({ id: result.insertId }))
    })
})

//PUT route
//updates the in database
router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;


  burger.update(condition, function (result) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    } else {
      console.log(result);
      res.sendStatus(200);
    }
  });
});




// Export routes for server.js to use.
module.exports = router;
