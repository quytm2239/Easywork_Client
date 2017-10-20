import './sidebar.html';

Template.sidebar.onCreated(function () {
    this.isFullProjectContent = true;
    this.isFullSizeBar = true;
});

const MIN_PROJECT_INFO_HEIGHT = 24;
const MAX_PROJECT_INFO_HEIGHT = 250;

Template.sidebar.onRendered(function () {
    // counter starts at 0
});

Template.sidebar.events({

    'click #iconCollapseProjectInfo'(event, instance) {
        if (instance.isFullProjectContent == false
             && instance.isFullSizeBar == false) {
            return;
        }
        instance.isFullProjectContent = !instance.isFullProjectContent;
        clickProjectInfoIcon(instance.isFullProjectContent);
    },
    'click #buttonCollapseSideBar'(event, instance) {
        if (instance.isFullSizeBar) {
            instance.isFullSizeBar = false;
            instance.isFullProjectContent = false;
            clickProjectInfoIcon(instance.isFullProjectContent);
        } else {
            instance.isFullSizeBar = true;
        }
    }
});

function clickProjectInfoIcon(isFullProjectContent) {
    var projectInfoHeight = isFullProjectContent ? MAX_PROJECT_INFO_HEIGHT : MIN_PROJECT_INFO_HEIGHT;
    $('.side-bar-project-info').height(projectInfoHeight);
    $('.side-bar-project-info-content').css('display',isFullProjectContent ? 'block' : 'none');
    $('#iconCollapseProjectInfo').text(isFullProjectContent ? 'keyboard_arrow_up' : 'keyboard_arrow_down');
}
