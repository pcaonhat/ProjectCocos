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
       playerCurrentLine: {
            type: cc.Integer,
            default: 0,
       }
    },

    onLoad(){
        this.playerCurrentLine = 0
        this.lineList = this.fieldLine.children;
        this.initEventMap();
        Emitter.registerEventMap(this.eventMap);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },

    start () {
        this.schedule(this.randomSpawnMonster, 2, 10);
    },

    onDestroy(){
        Emitter.unregisterEventMap(this.eventMap);
        this.eventMap = null;
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },

    onKeyDown (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.w:
                Emitter.emit(EventKeys.MOVE_PLAYER, this.getPlayerLinePosition(true));
                break;
            case cc.macro.KEY.s:
                Emitter.emit(EventKeys.MOVE_PLAYER, this.getPlayerLinePosition(false));
                break;
        }
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

    calculateMonsterPostion(){
        const yValue = this.randomLinePosition();
        const xValue = this.calculateXPosition();
        return cc.v2(xValue, yValue);
    },

    calculateXPosition(){
        const worldPosition = this.background.convertToWorldSpaceAR(cc.v2(0, 0));
        const localPosition = this.monsterLayer.convertToNodeSpaceAR(worldPosition);
        return localPosition.x + this.background.width/2;
    },

    getPlayerLinePosition(isUp){
        if (isUp) {
            this.playerCurrentLine = Math.min(this.playerCurrentLine + 1, this.lineList.length - 1);
        } else {
            this.playerCurrentLine = Math.max(this.playerCurrentLine - 1, 0);
        }

        const targetLineNode = this.lineList[this.playerCurrentLine];
        const worldPosition = targetLineNode.convertToWorldSpaceAR(cc.v2(0, 0));
        const position = cc.v2(0, worldPosition.y - 50);

        return position;

    },

});