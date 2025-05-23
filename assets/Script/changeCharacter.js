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
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    changeSelectedCharacter(){
        this.characterController.changeMainCharacter(this.characterSprite, this.characterName)
    }

    // update (dt) {},


});
