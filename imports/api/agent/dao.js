import { Meteor } from 'meteor/meteor';
import { MysqlPool } from "./../../config/mysql";
import { check } from 'meteor/check';

Meteor.methods({
    'dao.agent.get.all'() {
        var getAllAgentSync = Meteor.wrapAsync(function(callback) {
            MysqlPool.getConnection(function(err, connection) {
                if (err) {
                    return callback(err,results);
                }
                connection.query('SELECT * FROM agent', function (error_query, results, fields) {
                    connection.release();
                    callback(error_query,results);
                });
            });
        });
        return getAllAgentSync();
    },
});
