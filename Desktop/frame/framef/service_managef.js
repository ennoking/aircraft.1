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
var service_modules = {};
function on_client_lost_connect(session){
//service_manager014:玩家掉线，遍历所有的服务模块（key in service_modules）
//遍历所有的服务模块通知在这个服务上的这个玩家掉线了
}

function on_recv_client_cmd(session,str_or_buf){
//service_manager012：根据我们接收到的数据解码我们的命令，调用proto_man011进行解码
//------返回true
}

function register_service(stype,service){
//service_manager014:对应用层具体服务进行注册并执行service初始化函数init()
//可先判断该服务是否已经注册	
}

//#4#中间件API
//无
