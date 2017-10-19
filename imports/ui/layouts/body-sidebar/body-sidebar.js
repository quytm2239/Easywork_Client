import './body-sidebar.html';
import '../../components/header/header.js';
// import '../../components/footer/footer.js';
import '../../components/sidebar/sidebar.js';

Template.App_body_sidebar.onCreated(function () {
    // counter starts at 0
    this.preScrollPosition = 0;
    this.isScrollDown = false;
    this.isFullSizeBar = true;
});

const MIN_SIDEBAR_WIDTH = 49;
const MAX_SIDEBAR_WIDTH = 299;

Template.App_body_sidebar.onRendered(function () {
    // counter starts at 0

});

$(function () {
    $( window ).resize(function() {
        changeLayout();
    });
});

function changeLayout () {
}

function clickSizeBarFooter(isFullSizeBar) {
    var sizebarWidth = isFullSizeBar ? MAX_SIDEBAR_WIDTH : MIN_SIDEBAR_WIDTH;
    var containerSideBarLeftMargin = isFullSizeBar ? '300px' : '50px';
    // $('.side-bar-containe').width()
    $('.side-bar-container').width(sizebarWidth);
    $('.side-bar-footer').width(sizebarWidth);
    $('.layout-container-side-bar').css('margin-left',containerSideBarLeftMargin);

    if (isFullSizeBar) {
        $('.side-bar-header').css('padding','12px 12px 12px 12px');
        $('.side-bar-header-img').height(54);
        $('.side-bar-header-img').width(54);
        $('#iconCollapseSideBar').text('keyboard_arrow_left');
        $('.side-bar-item').show();
    } else {
        $('.side-bar-header').css('padding','12px 6.5px 12px 6.5px');
        $('.side-bar-header-img').height(36);
        $('.side-bar-header-img').width(36);
        $('#iconCollapseSideBar').text('keyboard_arrow_right');
        $('.side-bar-item').hide();
    }
}

Template.App_body_sidebar.events({

    'click #buttonCollapseSideBar'(event, instance) {
        if (instance.isFullSizeBar == false) {
            instance.isFullSizeBar = true;
            clickSizeBarFooter(instance.isFullSizeBar);
        } else {
            instance.isFullSizeBar = false;
            clickSizeBarFooter(instance.isFullSizeBar);
        }
    }
});
