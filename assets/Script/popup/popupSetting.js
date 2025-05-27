const Emitter = require('mEmitter');

cc.Class({
    extends: require("popupItem"),

    properties: {
    },

    onMusicToggleChange(toggle){
        if(toggle.isChecked){
            Emitter.emit("playMusic");
        } else {
            Emitter.emit("stopMusic");
        }
    },

    onSoundToggleChange(toggle){
        if(toggle.isChecked){
            Emitter.emit("turnOnSound");
        } else {
            Emitter.emit("turnOffSound");
        }
    }
});
