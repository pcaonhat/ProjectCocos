
cc.Class({
    extends: cc.Component,

    properties: {

        audioBGM: {
            type: cc.AudioClip,
            default: null
        },

        audioClick: {
            type: cc.AudioClip,
            default: null
        },

        isPlayingSound: {
            default: true,
        },
    },

    onLoad () {
        this.playMusic();
    },
    
    playMusic(){
        console.log("Playe BGM");
        cc.audioEngine.playMusic(this.audioBGM, true);
    },

    stopMusic(){
        cc.audioEngine.stopMusic();
    },

    playOnclickSound(){
        if(!this.isPlayingSound){
            return;
        }
        cc.audioEngine.playEffect(this.audioClick, false, 1);
    },

    setIsPlayingSound(isPlaying) {
        this.isPlayingSound = isPlaying;
    }
});
