import './footer.html';
import { Meteor } from 'meteor/meteor';

Template.footer.onCreated(function () {
    // counter starts at 0
    this.counter = new ReactiveVar(0);
    // let params = this.data.params();
    // console.log(params);
});

Template.footer.helpers({
    counter() {
        return Template.instance().counter.get();
    },
});
