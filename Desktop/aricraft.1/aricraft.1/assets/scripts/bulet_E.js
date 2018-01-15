cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.bulet_E_pool = this.node.parent.getComponent("Game").bulet_E_pool; 
    },

    onCollisionEnter: function (other, self) {

    },

    update (dt) {
       
      this.node.y -= dt*400;
    
       
        if(this.node.y < -this.node.parent.height){
            this.bulet_E_pool.put(this.node);  
        } 
    },
});
