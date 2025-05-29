
cc.Class({
    extends: cc.Component,

    properties: {
       monsterList: [cc.Prefab],
       field: cc.Node,
       lineField: cc.Node,
       lineList: [cc.Node],
    },

    onLoad(){
        this.lineList = this.lineField.children;
    },

    start () {
        this.schedule(this.randomSpawnMonster, 2, 5);
    },

    randomSpawnMonster(){
        const newMonster = cc.instantiate(this.randomMonster());
        newMonster.parent = this.field;
        const yValue = this.randomLine();
        newMonster.setPosition(800, yValue);
    },
    
    randomLine(){
        const randomIndex = Math.floor(Math.random() * this.lineList.length);
        return this.lineList[randomIndex].position.y;
    },

    randomMonster(){
        const randomIndex = Math.floor(Math.random() * this.monsterList.length);
        return this.monsterList[randomIndex];
    }

});