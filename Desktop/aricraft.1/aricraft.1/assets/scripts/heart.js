
cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    onLoad () {
        this.fade();
        this.heart_pool = this.node.parent.getComponent("Game").heart_pool; 
    },

    fade:function(){
        var f0 = cc.fadeTo(0.5,0);
        var f225 =cc.fadeTo(0.5,225);
        var combine = cc.sequence(f0,f225);
        var repeat = cc.repeatForever(combine);
        this.node.runAction(repeat);
    },

    onCollisionEnter: function (other, self) {
        this.heart_pool.put(this.node); 
    },

    update (dt) {
        this.node.y -=dt*200;
        if(this.node.y <-500){
            this.heart_pool.put(this.node); 
        }

    },
});
