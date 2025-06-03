const Emitter = require('emitter');
const EventKeys = require("eventKeys");
cc.Class({
    extends: cc.Component,

    properties: {
        spine:{
            default: null,
            type: sp.Skeleton,
        },
        bulletPoint: cc.Node,
    },

    onLoad () {
        this.initEventMap();
        Emitter.registerEventMap(this.eventMap);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    start () {
        this.spine = this.node.getComponent(sp.Skeleton);
        this.spine.setAnimation(0, "idle", true);
    },

    initEventMap() {
        this.eventMap = {
            [EventKeys.MOVE_PLAYER]: this.setPosition.bind(this),
        };
    },

    onKeyUp (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.space:
                this.shootBullet();
                break;
        }
    },

    setPosition(movePosition){
        const localPosition = this.node.parent.convertToNodeSpaceAR(movePosition);
        console.log("localPosition", localPosition.y);
        const moveAnimation = cc.tween(this.node).to(0.2, {y: localPosition.y}).call(() => moveAnimation.stop()).start();
    },

    shootBullet(){
        this.spine.setAnimation(1, "shoot", false);
        const bulletPointPosition = this.bulletPoint.convertToWorldSpaceAR(cc.v2(0,0));
        Emitter.emit(EventKeys.SHOOT_BULLET, bulletPointPosition);
    },

    onDestroy(){
        Emitter.unregisterEventMap(this.eventMap);
        this.eventMap = null;
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }


});