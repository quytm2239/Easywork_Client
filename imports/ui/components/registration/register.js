import { Meteor } from 'meteor/meteor';
import './register.html';

Template.regist.helpers({
    
});

Template.regist.events({
    'submit #regist'(event, instance) {
        var subdomain = event.target.subdomain.value;
        var name = event.target.name.value;
        var address = event.target.address.value;
        var phone = event.target.phone.value;
        var fax = event.target.fax.value;
        var about_url =event.target.about_url.value == ""? null: event.target.about_url.value;
        var scale = parseInt(event.target.scale.value);
        var agent_name = event.target.agent_name.value;
        var agent_email = event.target.agent_email.value;
        var agent_phone = event.target.agent_phone.value;
        var agent_title = event.target.agent_title.value;
        console.log(subdomain);

        Meteor.call('company.agent.add',subdomain, name, address, phone, fax, scale, about_url,
                    agent_name, agent_email, agent_phone, agent_title, (error,results) => {
            if (error) {
                console.log(error.error);
            } else {
                console.log(results);
            }
        });
    }
});