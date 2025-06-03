
cc.Class({
    extends: cc.Component,

    properties: {
        damage:{
            type: cc.Integer,
            default: 30,
        }
    },

    start () {
        const moveTween = cc.tween(this.node)
                                .by(3,{x: 1560})
                                .call(() => {
                                    moveTween.stop();
                                    this.node.destroy();
                                })
                                .start()
    },

    getDamage(){
        return this.damage;
    },

    onCollisionEnter: function(other, self){
        this.node.destroy();
    }
});
