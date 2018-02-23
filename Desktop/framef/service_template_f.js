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

}

function on_recv_player_cmd(session,ctype,body){

}

function on_player_disconnect(session){
	
}
//#4#中间件API
