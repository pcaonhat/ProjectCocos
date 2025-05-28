const Emitter = require('emitter');
const EventKeys = require("eventKeys");
cc.Class({
    extends: require("popupItem"),

    properties: {
    },

    onMusicToggleChange(toggle){
        if(toggle.isChecked){
            Emitter.emit(EventKeys.PLAY_MUSIC);
        } else {
            Emitter.emit(EventKeys.STOP_MUSIC);
        }
    },

    onSoundToggleChange(toggle){
        if(toggle.isChecked){
            Emitter.emit(EventKeys.ENABLE_SOUND, true);
        } else {
            Emitter.emit(EventKeys.ENABLE_SOUND, false);
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
