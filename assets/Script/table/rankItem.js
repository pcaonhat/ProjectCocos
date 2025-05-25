
cc.Class({
    extends: cc.Component,

    properties: {
        labelPlayer: cc.Label,
        labelRank: cc.Label,
        border: cc.Node,
    },

    onLoad () {
        let nodeLabelPlayer = this.node.getChildByName("labelPlayer");
        this.labelPlayer = nodeLabelPlayer.getComponent(cc.Label);

        let nodeRankFlag = this.node.getChildByName("rankFlag");
        let nodeRankLabel = nodeRankFlag.getChildByName("label");
        this.labelRank = nodeRankLabel.getComponent(cc.Label);

        this.border = this.node.getChildByName("border");
    },

    setInfo(order, playerData){
        this.labelPlayer.string = order + ". " + playerData.name;
        this.labelRank.string = playerData.rank;
    },
    
    setBorderColor(color) {
        this.border.color = color;
    },
});
