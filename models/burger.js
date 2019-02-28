const orm = require("../config/orm.js");

// create an object that has access to the orm functions. The returned data from the orm is passesed throgh the modal and back to the function that called the query.
var burger = {
    all: function(cb)
    {
        orm.selectAll("burgers", function(res)
        {
            cb(res)
        });
    },

    create: function(col, values, cb)
    {
        orm.insertOne("burgers", col, values, function(res)
        {
            cb(res)
        });
    },

    update: function(col, value, condition, conditionValue, cb)
    {
        orm.updateOne("burgers", col, value, condition, conditionValue, function(res)
        {
            cb(res)
        });
    }
}

module.exports = burger;