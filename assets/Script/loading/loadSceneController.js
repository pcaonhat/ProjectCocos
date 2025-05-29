cc.Class({
    extends: cc.Component,

    properties: {
        progressBar: cc.ProgressBar,
        labelProgress: cc.Label
    },

    onLoad() {
        const targetScene = cc.sys.localStorage.getItem('targetScene');

        if (!targetScene) {
            return;
        }

        cc.director.preloadScene(targetScene, this.updateProgressBar.bind(this), () => this.loadScene(targetScene));
    },

    updateProgressBar(completedItem, totalItem) {
        const progress = completedItem / totalItem;
        this.progressBar.progress = progress;
        this.labelProgress.string = `${(progress * 100).toFixed(0)}%`;
    },

    loadScene(targetScene){
        cc.sys.localStorage.removeItem('targetScene')
        cc.Director.loadScene(targetScene)
    }
});
