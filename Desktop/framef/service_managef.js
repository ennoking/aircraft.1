//应用层服务管理模块

//#1# 需要使用的其他功能模块
var log = require("./log.js");//使用第三方代码 log服务器日志模块
var proto_man = require("./proto_man.js");//使用专用数据个数管理模块 进行数据传输管理

//#2#导出的接口 API
var service_manager = {
	on_client_lost_connect: on_client_lost_connect,
	on_recv_client_cmd: on_recv_client_cmd,
	register_service: register_service,
}
module.exports = service_manager;
//#3# 导出的API实现
function on_client_lost_connect(session){

}

function on_recv_client_cmd(session,str_or_buf){

}

function register_service(stype,service){

}

//#4#中间件API
//无
