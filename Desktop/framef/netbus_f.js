//netbus 模块
//#1# 需要使用的其他功能模块
//A node 自带
var net = require("net");//tcp 协议下 创建socket 进行客户端服务器连接
var ws = require("ws");//ws 协议下 创建socket 进行客户端服务器连接
//B 第三方或者自建的模块
var log = require("./log.js");//使用第三方代码 log服务器日志模块
var tcpokg = require("./tcppkg.js");//使用专用数据打包模块 进行tcp发送时数据打包
var proto_man = require("./proto_man.js");//使用专用数据个数管理模块 进行数据传输管理
var service_manager = require("./service_manager.js"); //使用专门的具体应用服务管理协议

//#2#导出的接口 API
var netbus = {
	//启动数据接收服务器
	start_tcp_server:start_tcp_server,
	start_ws_server:start_ws_server,

	//服务器数据发送及关闭
	session_send:session_send,
	session_close:session_close,

}
module.exports = netbus;
//#3# 导出的API实现
function start_tcp_server(ip,port,proto_type){

}

function start_ws_server(ip,port,proto_type){

}

function session_send(session,cmd){

}

function session_close(session){

}

//#4#中间件API
function isString(ojb){

}

var global_session_list = {};
var global_session_key = {};
function on_session_enter(session,proto_type,is_ws){

}

function on_session_exit(session){

}

function on_session_recv_cmd(session,str_or_buf){

}


function tcp_add_client_session_event(session,proto_type){

}

function ws_add_client_session_event(session,proto_type){

}











//end.................................