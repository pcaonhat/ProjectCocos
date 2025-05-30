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
        newMonster.parent = this.field;
        const yValue = this.randomLine();
        newMonster.setPosition(800, yValue);
        const monsterComponent = newMonster.getComponent("monster");
        monsterComponent.init(Date.now());
        this.monsterList.push(monsterComponent);
    },
    
    randomLine(){
        const randomIndex = Math.floor(Math.random() * this.lineList.length);
        return this.lineList[randomIndex].position.y;
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

});