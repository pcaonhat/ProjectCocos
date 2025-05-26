
cc.Class({
    extends: require("popupItem"),

    properties: {
        content: cc.Node,
        rankItemPrefab: cc.Prefab,
        rankItemList: [require("rankItem")],
    },

    onLoad(){
        for(let i = 0; i < 10; i++){
            const item = cc.instantiate(this.rankItemPrefab);
            item.parent = this.content;
            const rankItem = item.getComponent("rankItem");
            this.rankItemList.push(rankItem);

            if(i === 0){
                rankItem.setBorderColor(cc.Color.YELLOW);
            }
            if(i === 1){
                rankItem.setBorderColor(cc.Color.WHITE);
            }
            if(i === 2){
                rankItem.setBorderColor(cc.Color.GRAY);
            }
            if(i > 2){
                rankItem.setBorderColor(cc.Color.BLACK);
            }
        }
    },

    show(playerData){
        this._super();
        for(let i = 0; i < this.rankItemList.length; i++){
            if(i < playerData.length){
                this.rankItemList[i].setInfo(playerData[i]);
            } else {
                this.rankItemList[i].node.active = false;
            }
        }
    }
    
});
