// All links-related publications

import { Meteor } from 'meteor/meteor';

Meteor.publish('company.all', function () {
  return Links.find();
});
