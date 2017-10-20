import './sidebar.html';

Template.sidebar.onCreated(function () {
    this.isFullProjectContent = true;
    this.isFullSizeBar = true;
});

const MIN_PROJECT_INFO_HEIGHT = 24;
const MAX_PROJECT_INFO_HEIGHT = 250;

Template.sidebar.onRendered(function () {
    // counter starts at 0
    console.log(this);
});

Template.sidebar.events({

    'click #iconCollapseProjectInfo'(event, instance) {
        if (instance.isFullProjectContent == false) {
            if (instance.isFullSizeBar == false) {
                return;
            }
            instance.isFullProjectContent = true;
            clickProjectInfoIcon(instance.isFullProjectContent);
        } else {
            instance.isFullProjectContent = false;
            clickProjectInfoIcon(instance.isFullProjectContent);
        }
    },
    'click #iconCollapseSideBar'(event, instance) {
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
    $('.side-bar-project-info-content').css('hidden',isFullProjectContent ? 'true' : 'false');
    $('#iconCollapseProjectInfo').text(isFullProjectContent ? 'keyboard_arrow_up' : 'keyboard_arrow_down');
}
