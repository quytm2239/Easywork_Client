import { Meteor } from 'meteor/meteor';
import { MysqlPool } from "./../../config/mysql";
import { check } from 'meteor/check';

Meteor.methods({
    'dao.company.agent.add'(subdomain, name, address, phone, fax, scale, about_url,
                            agent_name, agent_email, agent_phone, agent_title) {
        check(subdomain, String);
        check(name, String);
        check(address, String);
        check(phone, String);
        check(fax, String);
        check(scale, Number);
        if (about_url != null) {
            check(scale, String);
        }
        check(agent_name, String);
        check(agent_email, String);
        check(agent_phone, String);
        check(agent_title, String);

        var addCompanyAgentSync = Meteor.wrapAsync(function(callback) {
            MysqlPool.getConnection(function(err, connection) {
                console.log('Transaction Start!');
                connection.beginTransaction(function(err) {
                    if (err) {
                        return callback(err,results);
                    }
                    connection.query({
                        sql: 'INSERT INTO `easywork`.`company`' +
                            '(`subdomain`,`name`,`address`,`phone`,`fax`,`scale`,`about_url`)' +
                            'VALUES' +
                            '(?,?,?,?,?,?,?)',
                        timeout: 1000, // 1s
                        values: [subdomain,name,address,phone,fax,scale,about_url]
                    }, function(company_error_query, company_results, fields) {

                        if (company_error_query) {
                            return callback(company_error_query,null);
                        }

                        var company_id = company_results.insertId;
                        connection.query({
                            sql: 'INSERT INTO `easywork`.`agent`' +
                                '(`company_id`,`name`,`email`,`phone`,`title`)' +
                                'VALUES' +
                                '(?,?,?,?,?)',
                            timeout: 1000, // 1s
                            values: [company_id,agent_name,agent_email,agent_phone,agent_title]
                        }, function(agent_error_query, agent_results, fields) {

                            if (agent_error_query) {
                                return callback(agent_error_query,null);
                            }
                            // If ok, do commit
                            connection.commit(function(err) {
                                if (err)
                                {
                                    console.log('Transaction Failed.');
                                    connection.rollback(function() {
                                        console.log(err);
                                    });
                                    callback(err,agent_results);
                                    connection.release();
                                }
                                else
                                {
                                    console.log('Transaction Successfully!');
                                    connection.release();
                                    callback(null,agent_results);
                                }
                            });
                        });
                    });
                });
            });
        });
        return addCompanyAgentSync();
    },
    'dao.company.get.all'() {
        var getAllCompanySync = Meteor.wrapAsync(function(callback) {
            MysqlPool.getConnection(function(err, connection) {
                if (err) {
                    return callback(err,results);
                }
                connection.query('SELECT * FROM company', function (error_query, results, fields) {
                    connection.release();
                    callback(error_query,results);
                });
            });
        });
        return getAllCompanySync();
    },
});
