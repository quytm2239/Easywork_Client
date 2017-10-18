import './body-sidebar.html';
import '../../components/header/header.js';
// import '../../components/footer/footer.js';
import '../../components/sidebar/sidebar.js';

Template.App_body.onCreated(function () {
    // counter starts at 0
    this.preScrollPosition = 0;
    this.isScrollDown = false;
    this.isBigFooter = false;
});

const deltaHeight = 90;

Template.App_body.onRendered(function () {
    // counter starts at 0
});

$(function () {
    $( window ).resize(function() {
        changeLayout();
    });
});

function changeLayout () {
}

Template.App_body.events({
    // 'scroll .layout-container'(event, instance){
    //     var currentPosition = event.target.scrollTop;
    //     if (currentPosition > instance.preScrollPosition) {
    //         // ScrollDown
    //         if (instance.isScrollDown != true) {
    //             updateFooterAndLayoutContainer(true);
    //             instance.isScrollDown = true;
    //             instance.isBigFooter = false;
    //         }
    //     } else {
    //         if (instance.isScrollDown != false) {
    //             updateFooterAndLayoutContainer(false);
    //             instance.isScrollDown = false;
    //             instance.isBigFooter = true;
    //         }
    //     }
    //     instance.preScrollPosition = currentPosition;
    // },

    'click footer'(event, instance) {
        if (instance.isBigFooter == false) {
            instance.isBigFooter = true;
            clickFooter(instance.isBigFooter,instance.originalBottom,instance.originalHeight);
        } else {
            instance.isBigFooter = false;
            clickFooter(instance.isBigFooter,instance.originalBottom,instance.originalHeight);
        }
    }
});
