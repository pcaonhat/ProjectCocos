const Emitter = require('emitter');
const EventKeys = require("eventKeys");
cc.Class({
    extends: cc.Component,

    properties: {
       monsterPrefabList: [cc.Prefab],
       field: cc.Node,
       fieldLine: cc.Node,
       lineList: [cc.Node],
       monsterList: [require("monster")],
       monsterLayer: cc.Node,
       background: cc.Node,
    },

    onLoad(){
        this.lineList = this.fieldLine.children;
        this.initEventMap();
        Emitter.registerEventMap(this.eventMap);
    },

    start () {
        this.schedule(this.randomSpawnMonster, 2, 10);
    },

    initEventMap(){
        this.eventMap = {
            [EventKeys.REMOVE_MONSTER]: this.removeMonsterById.bind(this),
        }
    },

    randomSpawnMonster(){
        const newMonster = cc.instantiate(this.randomMonster());
        newMonster.parent = this.monsterLayer;
        const position = this.calculateMonsterPostion();
        newMonster.setPosition(position);
        const monsterComponent = newMonster.getComponent("monster");
        monsterComponent.init(Date.now());
        this.monsterList.push(monsterComponent);
    },
    
    randomLinePosition(){
        const randomIndex = Math.floor(Math.random() * this.lineList.length);
        const worldPosition = this.lineList[randomIndex].convertToWorldSpaceAR(cc.v2(0, 0));
        const localPosition = this.monsterLayer.convertToNodeSpaceAR(worldPosition);
        return localPosition.y;
    },

    randomMonster(){
        const randomIndex = Math.floor(Math.random() * this.monsterPrefabList.length);
        return this.monsterPrefabList[randomIndex];
    },

    removeMonsterById(id) {
        const index = this.monsterList.findIndex(monster => monster.id === id);
        if (index !== -1) {
            this.monsterList.splice(index, 1);
        }
    },

    onDestroy(){
        Emitter.unregisterEventMap(this.eventMap);
        this.eventMap = null;
    },

    calculateMonsterPostion(){
        const yValue = this.randomLinePosition();
        const xValue = this.calculateXPosition();
        return cc.v2(xValue, yValue);
    },

    calculateXPosition(){
        const worldPosition = this.background.convertToWorldSpaceAR(cc.v2(0, 0));
        const localPosition = this.monsterLayer.convertToNodeSpaceAR(worldPosition);
        return localPosition.x + this.background.width/2;
    }

});