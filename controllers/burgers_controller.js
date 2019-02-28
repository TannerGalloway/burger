const express = require("express");
const burger = require("../models/burger.js");
// adds routes for the webpage to take onto the router object + calculation
var router = express.Router();

router.get("/", function (req, res) {
    burger.all(function (data) {
        var notDevoured = [];
        var devoured = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].devoured === 1) {
                var devouredBurgers =
                {
                    id: data[i].id,
                    name: data[i].burger_name
                }
                devoured.push(devouredBurgers);
            }
            else {
                var notDevouredBurgers =
                {
                    id: data[i].id,
                    name: data[i].burger_name
                }
                notDevoured.push(notDevouredBurgers);
            }
        }
        var burgers =
        {
            notDevoured: notDevoured,
            devoured: devoured
        };

        res.render("index", burgers);
    });
});

router.post("/api/burgers", function (req, res) {
    var name = "'" + req.body.name + "'";
    burger.create("burger_name, devoured", [name, req.body.eaten], function (data) {
        var burgerObj =
        {
            burgers: data
        };
        res.json(burgerObj);
    })
});

router.put("/api/burgers:id", function (req, res) {
    var id = req.params.id;
    burger.update(req.body.col, req.body.value, req.body.id, id, function (data) {
        var burgerObj =
        {
            burgers: data
        };
        res.json(burgerObj);
    })
})

module.exports = router;
