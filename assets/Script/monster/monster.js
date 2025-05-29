
cc.Class({
    extends: cc.Component,

    properties: {
        id: {
            default: ""
        },
        maxHp: { 
            default: 0,
            type: cc.Integer,
        },
        currentHp: {
            default: 0,
            type: cc.Integer,
        },
        healthBar: cc.ProgressBar
    },

    onLoad () {
        this.id = Date.now();
        cc.director.getCollisionManager().enabled = true;
    },

    start () {
        this.onMove();
        this.currentHp = this.maxHp;
        healthBar.progress = 1;
    },

    update(){
        if(currentHp <= 0){
            onDie();
        }
    },

    onMove() {
        cc.tween(this.node)
            .repeatForever(
                cc.tween()
                    .by(1, {x: -100})
            )
            .start()

        cc.tween(this.node)
            .repeatForever(
                cc.tween()
                    .by(1, {scale: -0.1})
                    .by(1, {scale: 0.1})
            )
            .start()
        
        cc.tween(this.node)
            .repeatForever(
                cc.tween()
                    .by(1, {y: -10})
                    .by(1, {y: 10})
            )
            .start()
    },

    onDie(){
        cc.Tween.stopAllByTarget(this.node);
        this.stopAllAnimations();
    },

    onCollisionExit: function (other, self) {
        cc.log('Kết thúc va chạm với: ' + other.node.name);
        if(other.node.group == "field"){
            this.node.destroy();
        }
    },

    onCollisionEnter: function(other, self){
        cc.log('Va chạm với: ' + other.node.name);
        if(other.node.group == "obstacles"){
            this.node.destroy();
        }
    }

});
