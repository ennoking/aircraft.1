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
//netbus022：tcp服务器开启API，var server = new ws.Server
//调用netbus019 进行事件监听
//本身连得事件监听
}

function start_ws_server(ip,port,proto_type){
//netbus023：ws服务器开启API，sever = net.createServer
//调用netbus019 进行事件监听
//本身连得事件监听
}

function session_send(session,cmd){
//netbus24:tcp/ws的发送消息 
//tcp 需要调用tcppkg002 打包成固定格式的数据包
}

function session_close(session){
//netbus021：tcp/ws的关闭end（）/close tcp/ws
}

//#4#中间件API
function isString(ojb){
//netbus015：判断对象是否是字符串
// return Object.prototype.toString.call(ojb)==="[object String]";
}

var global_session_list = {};
var global_session_key = {};
function on_session_enter(session,proto_type,is_ws){
//netbus016:有客户端接入进来时被调用，判断是ws还是tcp
//给session（client）对象加入值：proto_type /is
//加入到全局对象列表global_session_list[glob...key]中，同时将该key加入到session方便管理
}

function on_session_exit(session){
//netbus017:有客户端日退出时调用，调用触发service_manager014管理退出
//然后从global_session_list删除，以及session.key  重设为空
}

function on_session_recv_cmd(session,str_or_buf){
//netbus018:调用service_manager012判断接收到的数据是否正确并进行解码
//不正确则关闭连接调用netbus021
}

function tcp_add_client_session_event(session,proto_type){
//netbus019:开启tcp连接的事件监听
//"close":调用netbus017进行退出 
//'data'：数据体进行数据防粘包处理并通过调用netbus018处理数据
//调用betbus017
}

function ws_add_client_session_event(session,proto_type){
//betbus020:开启ws连接的事件监听
//"close" "error" 等事件的监听
//"message"：调用netbus018处理数据
//调用betbus017
}

