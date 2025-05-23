
cc.Class({
    extends: cc.Component,

    properties: {
        labelPlayer: cc.Label,
        labelRank: cc.Label
    },

    onLoad () {
        let nodeLabelPlayer = this.node.getChildByName("labelPlayer");
        this.labelPlayer = nodeLabelPlayer.getComponent(cc.Label);

        let nodeRankFlag = this.node.getChildByName("rankFlag");
        let nodeRankLabel = nodeRankFlag.getChildByName("label");
        this.labelRank = nodeRankLabel.getComponent(cc.Label);
    },

    start () {

    },

    setItemInfo(order, playerName, rank){
        this.labelPlayer.string = order + ". " + playerName;
        this.labelRank.string = rank;
    }
    // update (dt) {},
});
