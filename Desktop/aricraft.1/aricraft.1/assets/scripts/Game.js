cc.Class({
    extends: cc.Component,

    properties: {
        bullet_P_prefab:{
            type:cc.Prefab,
            default:null,
        },
        Boss_prefab:{
            type:cc.Prefab,
            default:null,

        },
        Emy_prefab:{
            type:cc.Prefab,
            default:null,
        },
        Boom_prefab:{
            type:cc.Prefab,
            default:null,
        },
        Bulet_E_prefab:{
            type:cc.Prefab,
            default:null,
        },
        heart_prefab:{
            type:cc.Prefab,
            default:null,
        },

        is_Enable:true,
        audio_p:{
            url:cc.AudioClip,
            default:[],
        }
    },

    onLoad () { 
        this.player = this.node.getChildByName("Player");
        this.playerSprite = this.node.getComponent(cc.Sprite);
        this.gameover = this.node.getChildByName("gameover");
        this.gameover.active = false;

        this.CollisionOn();

        this.Player_Moveing();
        this.Player_stopMoving();

        this.Craftf_ronot();  
        //对象池
        this.bullet_P_Pool();
        this.shuting();

        this.boss_pool();
        this.boss_come();

        this.emy_pool();
        this.emy_come();

        this.bulet_E_pool();
        this.boom_pool();
        this.heart_pool();
        
    },

    //开启碰撞
    CollisionOn:function(){
        if(this.is_Enable){
            //获得碰撞管理器
            var manager = cc.director.getCollisionManager();
            //开启碰撞检测
            manager.enabled = true;
         }
    },
    //监听点击移动消息,并控制play的移动
    Player_Moveing:function(){
        this.node.on(cc.Node.EventType.TOUCH_MOVE,function(e){
             this.d = e.getDelta().x;
             this.player.x += e.getDelta().x;
             this.player.y += e.getDelta().y;
        },this);
    },
    
    Player_stopMoving:function(){
        this.node.on(cc.Node.EventType.TOUCH_CANCEL,function(c){
            this.d = 0;
        },this)
        this.node.on(cc.Node.EventType.TOUCH_END,function(c){
            this.d = 0;
        },this)
    },
    
    //监听是否坠机，离开游戏或者重启
    Craftf_ronot:function(){
        this.node.on("craft",function(d){
            if(d.detail){         
                //游戏停止,重启或者离开
                this.gameover.active = true;   
                this.node.off("craft");
                //坠机效果
                this.Audiof();
                var m = cc.moveBy(2,cc.p(0,200));
                var s = cc.scaleTo(2,0.1);
                this.player.runAction(s);
                this.player.runAction(m);
                
                var delate = cc.delayTime(2);
                var playerout = cc.callFunc(function(){
                    this.player.active = false;           
                },this) 
                var combine = cc.sequence(delate,playerout);
                this.player.runAction(combine);       
            } 
        },this)
    },

    //切换坠机音效
    Audiof:function(){
            this.audio = this.node.getComponent(cc.AudioSource);
            this.audio.clip = this.audio_p;
            this.audio.play(); 
            this.audio.loop = false;
    },
    //P子弹对象池及调用
    bullet_P_Pool:function(){
        this.bullet_P_Pool = new cc.NodePool(); 
        for(var i = 0;i<50;i++){
            var bullet_P = cc.instantiate(this.bullet_P_prefab);
            this.bullet_P_Pool.put(bullet_P);       
        };  
    },
    shuting:function(){
        this.schedule(function(){
            if(this.bullet_P_Pool.size()>0){
                var bullet =this.bullet_P_Pool.get();
                bullet.setPosition(this.player.x+5,this.player.y+30);//初始化位置
                this.node.addChild(bullet);
            }
        },0.15,cc.macro.REPEAT_FOREVER)
    },
    //Boss对象池及调用
    boss_pool:function(){
        this.boss_pool = new cc.NodePool(); 
        for(var i = 0;i<10;i++){
            var boss = cc.instantiate(this.Boss_prefab);
            this.boss_pool.put(boss);       
        };
    },
    boss_come:function(){
        this.schedule(function(){
            if(this.boss_pool.size()>0){
                this.boss =this.boss_pool.get();
                this.boss.setPosition(Math.random()*600-300,500);//初始化位置
                this.node.addChild(this.boss);

                this.boom_drop();
            }
            
        },2,cc.macro.REPEAT_FOREVER)
    },
    //Emy对象池及调用
    emy_pool:function(){
        this.emy_pool = new cc.NodePool(); 
        for(var i = 0;i<20;i++){
            var emy = cc.instantiate(this.Emy_prefab);
            this.emy_pool.put(emy);       
        };  
    },
    emy_come:function(){
        this.schedule(function(){
            if(this.emy_pool.size()>0){
                this.emy =this.emy_pool.get();
                this.emy.setPosition(Math.random()*600-300,500);//初始化位置
                this.node.addChild(this.emy);

                this.bulet_E_shut();
            }
        },1,cc.macro.REPEAT_FOREVER)
    },
    //e子弹对象池及调用
    bulet_E_pool:function(){
        this.bulet_E_pool = new cc.NodePool(); 
        for(var i = 0;i<100;i++){
            var bulet_E = cc.instantiate(this.Bulet_E_prefab);
            this.bulet_E_pool.put(bulet_E);       
        };  
    },
    bulet_E_shut:function(){
        this.schedule(function(){
            if(this.bulet_E_pool.size()>0){
                var bulet_E =this.bulet_E_pool.get();
                bulet_E.setPosition(this.emy.x,this.emy.y-30);//初始化位置
                this.node.addChild(bulet_E);
            }
        },0.5,2)
    },
    //boom对象池及调用
    boom_pool:function(){
        this.boom_pool = new cc.NodePool(); 
        for(var i = 0;i<20;i++){
            var boom = cc.instantiate(this.Boom_prefab);
            this.boom_pool.put(boom);       
        }; 
    },
    boom_drop:function(){
        this.schedule(function(){
            if(this.boom_pool.size()>0){
                var boom =this.boom_pool.get();
                boom.setPosition(this.boss.x,this.boss.y-30);//初始化位置
                this.node.addChild(boom);
            }
        },1,2)
    },

   //boom对象池及调用
    heart_pool:function(){
        this.heart_pool = new cc.NodePool(); 
        for(var i = 0;i<10;i++){
            var heart = cc.instantiate(this.heart_prefab);
            this.heart_pool.put(heart);       
        }; 
    },

    heart_come:function(){
        if(this.heart_pool.size()>0){
            var heart =this.heart_pool.get();
            heart.setPosition(Math.random()*600-300,500);//初始化位置
            this.node.addChild(heart);
        }
    },

    update (dt) {
        var h = Math.random();
        if(h <=0.0035){
            this.heart_come();
        }
    },
});
