const options = {
    connectTimeout: 4000, //超时时间限制
    clientId: 'clientUserId', //连接id
    host: 'broker.emqx.io', //MQTT 服务器域名
    port: '8083' //websocket 端口号
}
//小程序中只能用wxs://开头
const url = `wx://${options.host}:${options.port}/mqtt`; //替换自己的请求地址 wx或者wxs

module.exports = {
    options,
    url
}