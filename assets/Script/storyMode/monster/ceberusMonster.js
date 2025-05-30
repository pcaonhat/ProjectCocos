const MonsterType = require("monsterType")
cc.Class({
    extends: require("monster"),
    init(id){
        this._super(id);
        this.type = MonsterType.CEBERUS;
    }
});
