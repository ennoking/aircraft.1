cc.Class({
    extends: cc.Component,

    properties: {
        sprite_Frame:{
            type:cc.SpriteFrame,
            default:[],
        },
    },

    onLoad () {
        this.sprite = this.node.getComponent(cc.Sprite);
        this.health_num =1;
        this.bulletback = false;
    },

    //飞行方向
    diretionf:function(){
        this.dr = this.node.parent.getComponent("Game").d;
        if(this.dr > 0){
            if( this.index !=0){
                this.sprite.spriteFrame  = this.sprite_Frame[0];
                this.index = 0;
            } 
        };
        if(this.dr == 0){
            if(this.index !=1){
                this.sprite.spriteFrame  = this.sprite_Frame[1];
                this.index = 1;
            }
        };
        if(this.dr < 0){
            if(this.index !=2){
                this.sprite.spriteFrame  = this.sprite_Frame[2];
                this.index = 2;
            }
        };
    },

    //碰撞监测及主机状态调整
    onCollisionEnter: function (other, self) {
       if(other.tag == 8){
           this.health_num +=0.2;
           if(this.health_num >=1){
               this.health_num =1;
           }
       }
       if(other.tag == 3){
            this.health_num = 0;
       }
       if(other.tag == 2){
            this.health_num = 0;
       }
       if(other.tag == 5){
            this.health_num -=0.1;
       }
       if(other.tag == 6){
           this.health_num -=0.2;
       }
    },
    
    //
    Craftf:function(){
        if(this.health_num <=0){
            var d = new cc.Event.EventCustom("craft",true);
            d.detail = true;
            this.node.dispatchEvent(d);
        }else{
            return;
        }
    },
    update (dt) {
       this.diretionf();
       this.Craftf();
    },
});
