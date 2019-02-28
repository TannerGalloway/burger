const connection = require("./connection.js");

// creates an obejct with database query functions.

// first constructs a query then sends the query to the database once returned send the data to the function that called the database call. 
var orm = { 
    selectAll: function(table, cb)
    {   var querystring = "SELECT * FROM " + table + ";"; 
        connection.query(querystring, function(err, data)
        {
            if(err) 
            {
                throw err;
            }
        
            cb(data);
        });
    },
    
    insertOne: function(table,  col, value, cb)
    {
        var querystring = "INSERT INTO " + table + "(" + col + ") VALUES(" + value + ");";
        connection.query(querystring, function(err, data)
        {
            if(err)
            {
                throw err;
            }

            cb(data);
        });
    },

    updateOne: function(table, col, value, condition, conditionValue, cb)
    {
        var querystring = "UPDATE " + table + " SET " + col + " = " + value + " WHERE " + condition + "=" + conditionValue + ";";
        connection.query(querystring, function(err, data)
        {
            if(err)
            {
                throw err;
            }
            cb(data)
        });
    }
}

module.exports = orm;