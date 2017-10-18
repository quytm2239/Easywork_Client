import { Meteor } from 'meteor/meteor';
import './dao.js';

Meteor.methods({
    'agent.get.all'() {
        return Meteor.call('dao.agent.get.all');
    },
});
