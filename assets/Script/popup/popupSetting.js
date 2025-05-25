
cc.Class({
    extends: require("popupItem"),

    properties: {
        soundController: require("soundController"),
    },

    onMusicToggleChange(toggle){
        if(toggle.isChecked){
            this.soundController.playBGM();
        } else {
            this.soundController.stopBMG();
        }
    },

    onSoundToggleChange(toggle){
        if(toggle.isChecked){
            this.soundController.setIsPlayingSound(true);
        } else {
            this.soundController.setIsPlayingSound(false);
        }
    }
});
