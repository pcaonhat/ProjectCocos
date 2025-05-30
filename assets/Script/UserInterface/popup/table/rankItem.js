
cc.Class({
    extends: cc.Component,

    properties: {
        labelPlayer: cc.Label,
        labelRank: cc.Label,
        border: cc.Node,
    },

    setInfo(playerData){
        this.labelPlayer.string = playerData.order + ". " + playerData.name;
        this.labelRank.string = playerData.rank;
    },
    
    setBorderColor(color) {
        this.border.color = color;
    },
});
