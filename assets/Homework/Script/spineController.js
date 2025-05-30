
cc.Class({
    extends: cc.Component,

    properties: {
       characterSpine:{
        default: null,
        type: sp.Skeleton,
       },
       button:{
        default: null,
        type: cc.Prefab
       },
       table: cc.Node,
       buttonList: [cc.Button],

    },

    onLoad(){
        console.log(this.characterSpine._skeleton.data.animations)
        const animationList = this.characterSpine._skeleton.data.animations
        for(let index = 0; index < animationList.length; index ++){
            const item = cc.instantiate(this.button);
            item.parent = this.table;

            const label = item.getChildByName("Label").getComponent(cc.Label);
            const animationName = animationList[index].name;
            label.string = animationName

            const button = item.getComponent(cc.Button);
            this.buttonList.push(button);

            button.node.on("click", () => {
                this.playAnimation(animationName);
            }, this);
        }
    },

    playAnimation(animationName) {
        this.characterSpine.setAnimation(0, animationName, true); 
    }
});
