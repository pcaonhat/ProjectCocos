
cc.Class({
    extends: cc.Component,

    properties: {
        popupSetting: require("popupItem"),
        popupRank: require("popupItem"), 
        isShowing: {
            default: false,
        }
    },

    onLoad() {
        this.hideSetting();
        this.hideRank();
    },

    showSetting(){
        if(this.getIsShowing()){
            return;
        }
        this.popupSetting.show();
        this.setIsShowing(true);
    },

    hideSetting(){
        this.popupSetting.hide();
        this.setIsShowing(false);
    },

    showRank(){
        if(this.getIsShowing()){
            return;
        }
        let fakeData = [
            {order: "1", name: "Player1", rank: "Gold II" },
            {order: "2", name: "Player2", rank: "Gold III" },
            {order: "3", name: "Player3", rank: "Gold IV" },
            {order: "4", name: "Player4", rank: "Bronze I" },
            {order: "5", name: "Player5", rank: "Bronze II" },
            {order: "6", name: "Player6", rank: "Bronze IV" },
            {order: "7", name: "Player7", rank: "Bronze V" },
        ];
        this.popupRank.show(fakeData);
        this.setIsShowing(true);
    },

    hideRank(){
        this.popupRank.hide();
        this.setIsShowing(false);
    },

    setIsShowing(isShowing) {
        this.isShowing = isShowing;
    },

    getIsShowing() {
        return this.isShowing;
    }
});
