
cc.Class({
    extends: cc.Component,

    onLoad () {
        const childrenList = this.node.children;
        this.playPopWordAnimation(childrenList);
    },

    playPopWordAnimation(childrenList) {
        const duration = 0.2;
        let tweenChain = cc.tween(this.node);
        childrenList.forEach((child) => {
            tweenChain = tweenChain.call(() => {
                cc.tween(child)
                    .repeatForever(
                        cc.tween()
                            .by(duration, { position: cc.v2(0, 20) })
                            .by(duration, { position: cc.v2(0, -20) })
                            .delay(duration * childrenList.length)
                    )
                    .start();
            }).delay(duration);
        });
        tweenChain.start();
    }
});
