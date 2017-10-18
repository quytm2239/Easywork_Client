import { Meteor } from 'meteor/meteor';
import './hello.html';

Template.hello.onCreated(function helloOnCreated() {
    // counter starts at 0
    this.counter = new ReactiveVar(0);
    let params = this.data.params();
    console.log(params);

});

Template.hello.helpers({
    counter() {
        return Template.instance().counter.get();
    },
});

Template.hello.events({
    'click #getAll'(event, instance) {
        // increment the counter when button is clicked
        instance.counter.set(instance.counter.get() + 1);
        // ----------------- RUN OK --------------
        Meteor.call('company.get.all', (error,results) => {
            if (error) {
                console.log(error.error);
            } else {
                // results is array
                console.log(results);
            }
        });
    },
    'click #demoAdd'(event, instance) {
        // increment the counter when button is clicked
        instance.counter.set(instance.counter.get() + 1);
        // 'company.agent.add',subdomain, name, address, phone, fax, scale, about_url,
        //                         agent_name, agent_email, agent_phone, agent_title)
        Meteor.call('company.agent.add','thiendia', 'cty TNHH thiendia', 'một nơi rất vl', '0999-999-999', '0999-999-999', 100000, null,
                    'Tran Van Cuc Ky Dep trai','deptrai@deptrai.com','0969-69-69-69', 'Trưởng phòng Đẹp trai', (error,results) => {
            if (error) {
                console.log(error.error);
            } else {
                console.log(results);
            }
        });
    },
});
