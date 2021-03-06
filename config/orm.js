var connection = require("./connection.js");

var orm = {
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
        if (err) {
            throw err;
        }
        cb(result);
        });
    },
    insertOne: function(burger, devoured, cb) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, 0)";
        connection.query(queryString, [burger, devoured], function(err, result) {
        if (err) {
            throw err;
        }
        cb(result);
        });
    },
    updateOne: function(id, cb) {
        var queryString = "UPDATE burgers SET devoured = 1 WHERE id=?";
        connection.query(queryString, [id], function(err, result) {
        if (err) {
            throw err;
        }
        cb(result);
        });
    }
};


module.exports = orm;