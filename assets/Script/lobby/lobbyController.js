

cc.Class({
    extends: cc.Component,

    properties: {
        popupController: require("popupController"),
    },

    showSettingPopup(){
        this.popupController.showSetting();
    },

    hideSettingPopup(){
        this.popupController.hideSetting();
    },

    showRankPopup(){
        this.popupController.showRank();
    },

    hideRankPopup(){
        this.popupController.hideRank();
    }
});
