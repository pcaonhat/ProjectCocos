const Emitter = require('mEmitter');

cc.Class({
    extends: cc.Component,

    playOnclickSoundEvent() {
        Emitter.emit("playOnclickSound");
    }
});
