import { Meteor } from 'meteor/meteor';
const mysql = require('mysql');

var MysqlPool = mysql.createPool({
    connectionLimit : 100,
    host            : 'localhost',
    user            : 'easywork',
    password        : 'easywork1234',
    database        : 'easywork'
});

export { MysqlPool };
