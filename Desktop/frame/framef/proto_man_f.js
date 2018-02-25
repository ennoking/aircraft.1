//protocol manager 传输数据格式的编码解码协议管理模块
/* 格式规定:
(1)服务号 命令号 不能为0
(2)服务号与命令号大小不能超过2个字节的整数;
(3)buf协议里面2个字节来存放服务号(0开始的2个字节)，命令号(1开始的2个字节);
(4)加密,解密, 
(5)服务号命令号二进制中都用小尾存储
(6)所有的文本，都使用utf8
*/

//#1# 需要使用的其他功能模块
var log = require("./log.js");//使用第三方代码 log服务器日志模块

//#2#导出的接口 API
var proto_man = {
	PROTO_JSON: 1,
	PROTO_BUF: 2,
	encode_cmd: encode_cmd,
	decode_cmd: decode_cmd,
	reg_decoder: reg_buf_decoder,
	reg_encoder: reg_buf_encoder,
}
module.exports = proto_man;
//#3# 导出的API实现
function encode_cmd(proto_type,stype,ctype,body){
//proto_man011:body数据编码接口，先判断是Json ro buf
//json:直接调用proto_man006进行编码
//buf：调用stype，ctype对应的编码回调函数
//------返回编码好的主体数据
}

function decode_cmd(proto_type,str_or_buf){
//proto_man010:buf_ro_str数据解码接口，先判断是Json ro buf
//json:直接调用proto_man005进行解码
//buf：使用readUint16LE 进行服务号，命令号获取，然后调用stype，ctype对应的解码回调函数
//------返回解码好的主体数据
}

var decoder = {};
var encoder = {};
function reg_buf_encoder(stype,ctype,encode_func){
//proto_man008:buf编码回调函数注册，调用proto_007获取键值
//将回调函数赋值给encoder数组 encoder是全局对象 赋值一次即完成该对象的注册（实质是函数赋值到一个全局表中）
//编码回调函函数将需要另行编写	且return 二进制bufffer对象主体数据
}

function reg_buf_decoder(stype,ctype,decode_func){
//proto_man009:buf解码回调函数注册，调用proto_007获取键值
//将回调函数赋值给decoder数组 decoder是全局对象 赋值一次即完成该对象的注册（实质是函数赋值到一个全局表中）
//解码回调函函数将需要另行编写，return cmd { 0: 服务号, 1: 命令号, 2: body};
}
//#4#中间件API
function encrypt_cmd(str_or_buf){
//proto_man003:预留的数据加密接口
}

function decrypt_cmd(str_or_buf){
//proto_man004:预留的数据解码接口
}

function _json_encode(stype,ctype,body){
//proto_man005:json数据格式编码，按规定将stype，ctype，body编入到对象cmd中
//使用JSON.stringify(cmd)?? 打成串
//------返回字符串 （Json格式必然是字符串比较简单，buf则需要定义数据规则）
}

function _json_decode(cmd_json){
//proto_man006:json数据格式解码，使用JOSN.parse？？？ 解码成json数据
//------返回数据
}

function decoder_get_key(stype,ctype){
//proto_man007:给每个buf解码回调函数编写与服务函命令号相关的唯一键值以便识别注册
//返回一个整数
}



