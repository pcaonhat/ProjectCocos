const Emitter = require('emitter');
const EventKeys = require("eventKeys");
cc.Class({
    extends: cc.Component,

    properties: {
        onHitEffect: cc.Node
    },

    onLoad () {
        this.initEventMap();
        Emitter.registerEventMap(this.eventMap);
    },

    initEventMap() {
        this.eventMap = {
            [EventKeys.ON_HIT_EFFECT]: this.triggerOnHitEffect.bind(this),
        };
    },

    triggerOnHitEffect(other, self){
        const otherWorldPosition = other.convertToWorldSpaceAR(cc.v2(0, 0));
        const selfWorldPosition = self.convertToWorldSpaceAR(cc.v2(0, 0));

        const xValue = (otherWorldPosition.x + selfWorldPosition.x) / 2;
        const yValue = (otherWorldPosition.y + selfWorldPosition.y) / 2;
        const midPoint = cc.v2(xValue, yValue);
    },
    


    onDestroy() {
        Emitter.unregisterEventMap(this.eventMap);
        this.eventMap = null;
    }

});
