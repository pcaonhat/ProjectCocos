

cc.Class({
    extends: cc.Component,

    onLoad () {
        this.initGame();
    },

    initGame(){
        cc.director.getCollisionManager().enabled = true;
    }
});
