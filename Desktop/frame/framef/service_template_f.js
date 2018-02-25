
//-------只是模版
//#1# 需要使用的其他功能模块

//#2#导出的接口 API
var service = {
	stype: 1,
	name: "server template",
	init:init,
	on_recv_player_cmd: on_recv_player_cmd,
	on_player_disconnect: on_player_disconnect,
}
module.exports = server;
//#3# 导出的API实现
function init(){
//每个服务初始化的时候调用
}

function on_recv_player_cmd(session,ctype,body){
// 每个服务收到数据的时候调用
}

function on_player_disconnect(session){
// 每个服务连接丢失后调用,被动丢失连接	
}
//#4#中间件API
