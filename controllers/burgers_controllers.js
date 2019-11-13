var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {

  burger.all(function (data) {
    console.log(data);
    let burgerObj = {
      burgers: data
    }
    res.render("index", burgerObj)
  })
})



router.post("/api/burgers", function (req, res) {

  burger.create([
    "name", "eaten"
  ], [
    req.body.name, req.body.eaten
  ], function (result) {
    console.log("hello")

    // console.log(result)

    res.json({ id: result.insertId });
  });
});


router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update(
    {
      eaten: req.body.eaten
    },
    condition,
    function (result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});


// Export routes for server.js to use.
module.exports = router;
