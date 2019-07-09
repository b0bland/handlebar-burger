var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.all(function(res) {
            cb(res);
        });
    },
    insertOne: function(burger, devour, cb) {
        orm.create(burger, devour, function(res) {
            cb(res);
        });
    },
    updateOne: function(id, cb) {
        orm.updateOne(id, function(res) {
            cb(res);
        })
    }
}

module.exports = burger;