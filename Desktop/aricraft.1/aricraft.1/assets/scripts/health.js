cc.Class({
    extends: cc.Component,

    properties: {
        P_node:{
            type:cc.Node,
            default:null,
        },       
    },
    
    onLoad () {
        this.healthf();
    },

    //初始化血量条
    healthf:function(){
        this.Sprite = this.node.getComponent(cc.Sprite);
    },
    
    //更新血量条
    Fillrangf:function(){
        this.Sprite = this.node.getComponent(cc.Sprite);
        this.Sprite.fillRange = this.P_node.getComponent("Player").health_num;
    },

    update (dt) {
        this.Fillrangf();
    },
});
