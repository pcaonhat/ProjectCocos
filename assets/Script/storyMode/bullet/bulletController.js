const Emitter = require('emitter');
const EventKeys = require("eventKeys");

cc.Class({
    extends: cc.Component,

    properties: {
        bullet: cc.Prefab,
        bulletLayer: cc.Node,
    },


    onLoad () {
        this.initEventMap();
        Emitter.registerEventMap(this.eventMap);
    },

    onDestroy(){
        Emitter.unregisterEventMap(this.eventMap);
        this.eventMap = null;
    },

    initEventMap(){
        this.eventMap = {
            [EventKeys.SHOOT_BULLET]: this.spawnBullet.bind(this),
        }
    },

    spawnBullet(position){
        const localPosition = this.bulletLayer.convertToNodeSpaceAR(position);
        const bullet = cc.instantiate(this.bullet);
        bullet.parent = this.bulletLayer;
        bullet.setPosition(localPosition);
    }
});
