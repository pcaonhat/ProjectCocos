const Emitter = require('emitter');
const EventKeys = require("eventKeys");
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
        this.initEventMap();
        Emitter.registerEventMap(this.eventMap);
    },

    initEventMap() {
        this.eventMap = {
            [EventKeys.PLAY_ON_CLICK_SOUND]: this.playOnclickSound.bind(this),
            [EventKeys.ENABLE_SOUND]: this.setIsPlayingSound.bind(this),
            [EventKeys.PLAY_MUSIC]: this.playMusic.bind(this),
            [EventKeys.STOP_MUSIC]: this.stopMusic.bind(this),
        };
    },
    
    playMusic(){
        console.log("Play Music");
        cc.audioEngine.playMusic(this.audioBGM, true);
    },

    stopMusic(){
        cc.audioEngine.stopMusic();
    },

    playOnclickSound(){
        if(!this.getIsPlayingSound()){
            return;
        }
        cc.audioEngine.playEffect(this.audioClick, false, 1);
    },

    setIsPlayingSound(isPlaying) {
        this.isPlayingSound = isPlaying;
    },

    getIsPlayingSound() {
        return this.isPlayingSound;
    },

    onDestroy() {
        Emitter.unregisterEventMap(this.eventMap);
        this.eventMap = null;
    }

});
