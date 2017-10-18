import { Meteor } from 'meteor/meteor';
import './header.html';

Template.header.helpers({

});

var IS_MOBILE = navigator.userAgent.match(/android/i) != null || navigator.userAgent.match(/iPhone/i) != null;

Template.header.onCreated( function headerOnCreated(){
});

Template.header.onRendered(function () {
    if (IS_MOBILE) {
        $('#menu-icon').css('display','block');
        $('#menu-icon').css('position','fixed');
        $('#cbp-hrmenu').hide();
        $('#cbp-hrmenu').css('position','static');
        $('#cbp-hrmenu').css('margin-left','2em');
    }
    console.log(IS_MOBILE);
});

function changeLayout () {
    console.log($(window).width());
    if (parseInt($(window).width()) <= 800) {
        $('#menu-icon').css('display','block');
        $('#menu-icon').css('position','fixed');
        $('#cbp-hrmenu').hide();
        // $('#cbp-hrmenu').css('position','static');
        $('#cbp-hrmenu').css('margin-left','4em');
    } else {
        $('#menu-icon').hide();
        $('#menu-icon').css('display','none');
        $('#cbp-hrmenu').show();
        $('#menu-icon').removeClass("on");
        // $('#cbp-hrmenu').css('position','fixed');
        $('#cbp-hrmenu').css('margin-left','auto');
    }
}

$(function () {
    $( window ).resize(function() {
            changeLayout();
    });
});

Template.header.events({
    // menu-icon
    'click #menu-icon'(event, instance) {
        if ($( "#menu-icon" ).hasClass( "on" )) {
          $('#cbp-hrmenu').hide();
          $('#menu-icon').removeClass("on");
        } else {
          $('#cbp-hrmenu').show();
          $('#menu-icon').addClass("on");
        }
    },
    'mouseenter #products'(event, instance) {
        $('#products_label').css('color', 'white');
        $('#products_label').css('background-color', '#6b082d');
        $('.products').slideDown(300);
    },
    'mouseenter #downloads'(event, instance) {
    	$('#downloads_label').css('color', 'white');
    	$('#downloads_label').css('background-color', '#6b082d');
        $('.downloads').slideDown(300);
    },
    'mouseenter #applications'(event, instance) {
    	$('#applications_label').css('color', 'white');
    	$('#applications_label').css('background-color', '#6b082d');
        $('.project').slideDown(300);
    },
    'mouseenter #project'(event, instance) {
    	$('#project_label').css('color', 'white');
    	$('#project_label').css('background-color', '#6b082d');
        $('.project').slideDown(300);
    },
    'mouseenter #freeware'(event, instance) {
    	$('#freeware_label').css('color', 'white');
    	$('#freeware_label').css('background-color', '#6b082d');
        $('.freeware').slideDown(300);
    },

    //leave mouse
    'mouseleave #products'(event, instance) {
    	$('#products_label').removeAttr("style");
        $('.cbp-hrsub').hide();
    },
    'mouseleave #downloads'(event, instance) {
    	$('#downloads_label').removeAttr("style");
        $('.cbp-hrsub').hide();
    },
    'mouseleave #project'(event, instance) {
    	$('#project_label').removeAttr("style");
        $('.cbp-hrsub').hide();
    },
    'mouseleave #applications'(event, instance) {
    	$('#applications_label').removeAttr("style");
        $('.cbp-hrsub').hide();
    },
    'mouseleave #freeware'(event, instance) {
    	$('#freeware_label').removeAttr("style");
        $('.cbp-hrsub').hide();
    }

});
