import './body.html';
import '../../components/header/header.js';
import '../../components/footer/footer.js';

Template.App_body.onCreated(function () {
    // counter starts at 0
    this.preScrollPosition = 0;
    this.isScrollDown = false;
    this.isBigFooter = false;
});

const deltaHeight = 90;

Template.App_body.onRendered(function () {
    // counter starts at 0
    this.originalBottom = parseInt(($('.button-expand-container').css('bottom')).replace('px',''));
    this.originalHeight = parseInt($('footer').height());
});

function clickFooter(isExpand,originalBottom,originalHeight) {
    var height = isExpand ? (originalHeight + deltaHeight) : originalHeight;
    var bottom = originalBottom + (isExpand ? deltaHeight : 0);
    var iconExpand = isExpand ? 'expand_more' : 'expand_less';
    var marginTopExpand = isExpand ? '-1px' : '-3px';
    var visibility = isExpand ? 'visible' : 'hidden';

    $('.location').css('visibility',visibility);
    $('.contact').css('visibility',visibility);
    $('.phone').css('visibility',visibility);
    $('footer').height(height);
    // $('footer .footer-container').css('padding-top',10);
    // $('footer .footer-container').css('padding-bottom',10);
    $('#buttonExpand').text(iconExpand);
    $('#buttonExpand').css('margin-top',marginTopExpand);
    $('.button-expand-container').css('bottom', bottom + 'px');
    // Update Main layout container
    $('.layout-container').css('height','-moz-calc(100% - (' + height + 'px + 60px))');
    $('.layout-container').css('height','-o-calc(100% - (' + height + 'px + 60px))');
    $('.layout-container').css('height','-webkit-calc(100% - (' + height + 'px + 60px))');
    $('.layout-container').css('height','calc(100% - (' + height + 'px + 60pxx))');
}

$(function () {
    $( window ).resize(function() {
        changeLayout();
    });
});

function changeLayout () {
    if (parseInt($(window).width()) <= 500) {
        var fontSize = '13px';
        $('.copy-right').css('font-size',fontSize);
        $('.location').css('font-size',fontSize);
        $('.contact').css('font-size',fontSize);
        $('.phone').css('font-size',fontSize);
        $('.footer-i').css('font-size','20px');
    } else if (parseInt($(window).width()) <= 800) {
        var fontSize = '15px';
        $('.copy-right').css('font-size',fontSize);
        $('.location').css('font-size',fontSize);
        $('.contact').css('font-size',fontSize);
        $('.phone').css('font-size',fontSize);
        $('.footer-i').css('font-size','25px');
    } else {
        var fontSize = '18px';
        $('.copy-right').css('font-size',fontSize);
        $('.location').css('font-size',fontSize);
        $('.contact').css('font-size',fontSize);
        $('.phone').css('font-size',fontSize);
        $('.footer-i').css('font-size','30px');
    }
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
