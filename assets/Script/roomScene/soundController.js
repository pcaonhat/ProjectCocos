const Emitter = require('mEmitter');

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
        this.initEventHandlers();
        this.registerEvent();
    },

    initEventHandlers() {
        this.eventMap = {
            "playOnclickSound": this.playOnclickSound.bind(this),
            "turnOnSound": this.setIsPlayingSound.bind(this, true),
            "turnOffSound": this.setIsPlayingSound.bind(this, false),
            "setSoundVolume": this.setSoundVolume.bind(this),
            "playMusic": this.playMusic.bind(this),
            "setMusicVolume": this.setMusicVolume.bind(this),
            "stopMusic": this.stopMusic.bind(this),
        };
    },
    
    playMusic(){
        console.log("Play Music");
        cc.audioEngine.playMusic(this.audioBGM, true);
    },

    setMusicVolume(volume) {
        cc.audioEngine.setMusicVolume(volume);
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

    setSoundVolume(volume) {
        cc.audioEngine.setEffectsVolume(volume);
    },

    setIsPlayingSound(isPlaying) {
        this.isPlayingSound = isPlaying;
    },

    getIsPlayingSound() {
        return this.isPlayingSound;
    },

    registerEvent() {
        for (let eventName in this.eventMap) {
            Emitter.registerEvent(eventName, this.eventMap[eventName]);
        }
    },

    unregisterEvent() {
        for (let eventName in this.eventMap) {
            Emitter.removeEvent(eventName, this.eventMap[eventName]);
        }
    },

    onDestroy() {
        this.unregisterEvent();
        this.eventMap = null;
    }

});
