const Emitter = require("emitter");
const EventKeys = require("eventKeys");
cc.Class({
    extends: cc.Component,

    properties: {
    },

    showSettingPopup(){
        Emitter.emit(EventKeys.SHOW_SETTING);
    },

    hideSettingPopup(){
        Emitter.emit(EventKeys.HIDE_SETTING);
    },

    showRankPopup(){
        Emitter.emit(EventKeys.SHOW_RANK);
    },

    hideRankPopup(){
        Emitter.emit(EventKeys.HIDE_RANK);
    }
});
