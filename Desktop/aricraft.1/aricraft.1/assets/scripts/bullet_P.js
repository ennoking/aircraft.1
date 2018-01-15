cc.Class({
    extends: cc.Component,

    properties: {
        hit_sprite:{
            type:cc.SpriteFrame,
            default:[],
        }
       
    },

    onLoad () {
        this.sprite = this.node.getComponent(cc.Sprite);
        this.bullet_P_Pool = this.node.parent.getComponent("Game").bullet_P_Pool; 
    },

    
    onCollisionEnter: function (other, self) {
        console.log("hit");
    
        var sp0 =cc.callFunc(function(){
            this.sprite.spriteFrame  = this.hit_sprite[0];
        },this);
        
        var delate = cc.delayTime(0.01);

        var sp1 =cc.callFunc(function(){
            this.sprite.spriteFrame  = this.hit_sprite[1];
        },this);

        var putback =cc.callFunc(function(){
            this.bullet_P_Pool.put(this.node); 
        },this);

        var combine = cc.sequence(sp0,delate,sp1,putback);
        this.node.runAction(combine);
},

  
    update (dt) {
        this.node.y +=dt*800;
        if(this.node.y > this.node.parent.height+50){
            this.bullet_P_Pool.put(this.node); 
        } 
    },
});
