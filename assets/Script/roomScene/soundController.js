
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
    },


    onLoad () {
        this.playBGM();
    },

    
    playBGM(){
        console.log("Playe BGM");
        cc.audioEngine.play(this.audioBGM, false, 1);
    },

    playOnclickSound(){
        console.log("Play Onclick");
        cc.audioEngine.play(this.audioClick, false, 1);
    },
});
