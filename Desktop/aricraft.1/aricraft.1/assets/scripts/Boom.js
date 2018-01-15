cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.boom_pool = this.node.parent.getComponent("Game").boom_pool; 
    },

    onCollisionEnter: function (other, self) {

    },

    update (dt) {    
      this.node.y -= dt*300;
        if(this.node.y < -this.node.parent.height){
            this.boom_pool.put(this.node);  
        } 
    },
});
