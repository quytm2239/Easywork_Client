import { Meteor } from 'meteor/meteor';
import './dao.js';

Meteor.methods({
    'company.agent.add'(subdomain, name, address, phone, fax, scale, about_url,
                            agent_name, agent_email, agent_phone, agent_title) {
        return Meteor.call('dao.company.agent.add',subdomain, name, address, phone, fax, scale, about_url,
                                agent_name, agent_email, agent_phone, agent_title);
    },
    'company.get.all'() {
        return Meteor.call('dao.company.get.all');
    },
});
