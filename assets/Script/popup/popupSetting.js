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
    },

    onMusicSliderChange(slider){
        const volume = slider.progress;
        Emitter.emit("setMusicVolume", volume);
    },

    onSoundSliderChange(slider){
        const volume = slider.progress;
        Emitter.emit("setSoundVolume", volume);
    },
});
