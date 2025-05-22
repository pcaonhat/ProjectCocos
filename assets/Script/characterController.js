// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        mainCharacter: {
            default: null,
            // type: cc.Sprite
            type: cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
    },

    changeMainCharacter(character, name){
        let spriteMainCharacter = this.mainCharacter.getComponent(cc.Sprite);
        spriteMainCharacter.spriteFrame  = character;

        let nameNode = this.mainCharacter.getChildByName("name");
        let labelName = nameNode.getComponent(cc.Label)
        labelName.string = name;
    }

    // update (dt) {},
});
