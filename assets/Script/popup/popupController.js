
cc.Class({
    extends: cc.Component,

    properties: {
        popupSetting: require("popupItem"),
        popupRank: require("popupItem")
    },

    onLoad() {
        this.hideSetting();
        this.hideRank();
    },

    showSetting(){
        console.log("showSetting");
        this.popupSetting.show();
    },

    hideSetting(){
        this.popupSetting.hide();
    },

    showRank(){
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
    },

    hideRank(){
        this.popupRank.hide();
    }
});
