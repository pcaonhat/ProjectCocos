const Emitter = require('emitter');
const EventKeys = require("eventKeys");
cc.Class({
    extends: cc.Component,

    properties: {
        onHitEffect: cc.Prefab,
        effectLayer: cc.Node,
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
        const midPoint = this.calculateMidPoint(other, self);   
        const effectPosition = this.effectLayer.convertToNodeSpaceAR(midPoint);     
        const effect = cc.instantiate(this.onHitEffect);
        effect.parent = this.effectLayer;
        effect.setPosition(effectPosition);
        this.destroyEffect(effect);
    },

    calculateMidPoint(other, self) {
        const otherWorldPosition = other.node.convertToWorldSpaceAR(cc.v2(0, 0));
        const selfWorldPosition = self.node.convertToWorldSpaceAR(cc.v2(0, 0));

        const xValue = (otherWorldPosition.x + selfWorldPosition.x) / 2;
        const yValue = (otherWorldPosition.y + selfWorldPosition.y) / 2;
        return cc.v2(xValue, yValue);
    },

    destroyEffect(effect){
        const animation = effect.getComponent(cc.Animation);
        animation.on('finished', () => {effect.destroy();});
    },

    onDestroy() {
        Emitter.unregisterEventMap(this.eventMap);
        this.eventMap = null;
    }

});
