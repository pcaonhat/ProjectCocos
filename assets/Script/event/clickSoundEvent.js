const Emitter = require('emitter');
const EventKeys = require("eventKeys")
cc.Class({
    extends: cc.Component,

    playOnclickSoundEvent() {
        Emitter.emit(EventKeys.PLAY_ON_CLICK_SOUND);
    }
});
