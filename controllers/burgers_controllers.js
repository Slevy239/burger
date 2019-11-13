var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");


router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    // console.log(hbsObject)
    res.render("index", hbsObject)
  });
});



// });

router.post("/burgers/create", function (req, res) {
  burger.create(req.body.burger_name, function (result) {
    // console.log(result)
    // res.redirect("/");
    res.redirect("/")
  });
});

router.put("/burgers/:id", function(req, res) {
  burger.update(req.params.id, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    // Send back response and let page reload from .then in Ajax
    res.sendStatus(200);
  });
});




// Export routes for server.js to use.
module.exports = router;
