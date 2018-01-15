cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    onLoad () {
        this.health_num = 1;
        this.boss_pool = this.node.parent.getComponent("Game").boss_pool;   
    },

    
    onCollisionEnter: function (other, self) {
        if(other.tag == 4){
            this.health_num -=0.2;
            if(this.health_num < 0){
                this.health_num = 1;
                window.score +=2;
                this.boss_pool.put(this.node);  
            }
        }

    },

    update (dt) {
        this.node.y -= dt*200;
        if(this.node.y < -this.node.parent.height){
            this.boss_pool.put(this.node);  
        } 
    },
});
