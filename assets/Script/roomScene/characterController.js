
cc.Class({
    extends: cc.Component,

    properties: {
        mainCharacter: {
            default: null,
            type: cc.Node
        }
    },

    changeMainCharacter(character, name){
        let spriteMainCharacter = this.mainCharacter.getComponent(cc.Sprite);
        spriteMainCharacter.spriteFrame  = character;

        let nameNode = this.mainCharacter.getChildByName("name");
        let labelName = nameNode.getComponent(cc.Label)
        labelName.string = name;
    }
});
