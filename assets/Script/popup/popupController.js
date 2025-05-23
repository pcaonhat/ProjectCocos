
cc.Class({
    extends: cc.Component,

    properties: {
        popupSetting: require("popupItem"),
        //popupRank: require("popupItem")
    },

    showSetting(){
        this.popupSetting.show();
    },

    hideSetting(){
        this.popupSetting.hide();
    }
});
