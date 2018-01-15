cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    // use this for initialization
    onLoad: function () {
        window.score = 0;
        this.label = this.node.getComponent(cc.Label);

    },

   
    update: function (dt) {
        this.label.string = "Score: "+window.score;

    },
});
