var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js")

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var object = {
        burgers: data
      };
      res.render("index", object);
    });
  });

router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger_name"], [req.body.burger, req.body.devoured], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    burger.updateOne(
      {
        devoured: req.body.devoured
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {

          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );
  });

  
  module.exports = router;