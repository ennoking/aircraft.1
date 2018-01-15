cc.Class({
    extends: cc.Component,

    properties: {
    
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

    },

    restartf:function(){
        cc.game.restart();

    },

    quitf:function(){
        cc.game.end();
    },


    // update (dt) {},
});
