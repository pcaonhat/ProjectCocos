
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
        if(this.isShowing){
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
        if(this.isShowing){
            return;
        }
        let fakeData = [
            { name: "Player1", rank: "Gold II" },
            { name: "Player2", rank: "Silver IV" },
            { name: "Player3", rank: "Bronze V" },
            { name: "Player4", rank: "Bronze V"},
            { name: "Player5", rank: "Bronze V" },
            { name: "Player6", rank: "Bronze V" },
            { name: "Player7", rank: "Bronze V" },
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
});
