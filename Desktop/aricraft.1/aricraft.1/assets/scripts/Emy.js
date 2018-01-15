cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    onLoad () {
        this.health_num = 1;
        this.emy_pool = this.node.parent.getComponent("Game").emy_pool;   
    },


    onCollisionEnter: function (other, self) {
        if(other.tag == 4){
            this.health_num -=0.5;
            if(this.health_num <= 0){
                this.health_num = 1;
                window.score +=1;
                this.emy_pool.put(this.node);  
            }
        }
    },

    update (dt) {
        this.node.y -= dt*250;
        if(this.node.y < -this.node.parent.height){
            this.emy_pool.put(this.node);  
        } 
    },
});
