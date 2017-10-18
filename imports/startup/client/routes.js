import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/registration/register.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';

BlazeLayout.setRoot('body');

// Set up all routes in the app
FlowRouter.route('/', {
    name: 'App.home',
    action() {
        BlazeLayout.render('App_body', {
            main: 'App_home' ,
            params: ['fullscreen', 'route']
        });
    },
});

FlowRouter.route('/sign-up', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_register', params: ['fullscreen', 'route'] });
    
  },
});

FlowRouter.notFound = {
    action() {
        BlazeLayout.render('App_body', { main: 'App_notFound' ,
        params: ['fullscreen', 'route']});
    },
};
