var characterController = require("characterController")
cc.Class({
    extends: cc.Component,

    properties: {
        characterSprite: {
            default: null,
            type: cc.SpriteFrame
        },

        characterName: {
            default: "",

        },

        characterController: {
            default: null,
            type: characterController
        }

    },

    changeSelectedCharacter(){
        this.characterController.changeMainCharacter(this.characterSprite, this.characterName)
    }


});
