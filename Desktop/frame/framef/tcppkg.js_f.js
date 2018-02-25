//#1# 需要使用的其他功能模块

//#2#导出的接口 API
var tcppkg ={
	read_pkg_size:read_pkg_size,
	package_data:package_data,
}
module.exports = tcppkg;
//#3# 导出的API实现
function read_pkg_size(package_data，offset){
//tcppkg001：读取传入的数据主体长度，使用readUint16LE读取传入数据主体package_data的长度 注意偏移offset
//--------返回主体数据长度
}

function package_data(data){
//tcppkg002:打包成2+buf数据数据格式，申请buffer内存Buffer.allocUnsave，规定使用writeInt16LE规则写入数据至buf
//写入数据buf.fill
//--------返回一个buf数据对象
}
//#4#中间件API
//无
