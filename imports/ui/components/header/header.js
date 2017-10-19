import { Meteor } from 'meteor/meteor';
import './header.html';

Template.header.events({
    'click #search'(event, instance) {
        $('#search').stop().animate({width:200},500);
    }, 
    'focusout #search'(event, instance) {
        $('#search').stop().animate({width:100},500);
    }, 
});