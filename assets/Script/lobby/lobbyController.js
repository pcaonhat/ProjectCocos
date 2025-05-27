const Emitter = require("mEmitter");
cc.Class({
    extends: cc.Component,

    properties: {
        popupController: require("popupController"),
    },

    showSettingPopup(){
        Emitter.emit("showSetting");
    },

    hideSettingPopup(){
        Emitter.emit("hideSetting");
    },

    showRankPopup(){
        Emitter.emit("showRank");
    },

    hideRankPopup(){
        Emitter.emit("hideRank");
    }
});
