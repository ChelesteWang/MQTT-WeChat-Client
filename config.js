const options = {
    connectTimeout: 4000,
    clientId: 'clientUserId',
    host: 'broker.emqx.io'
  }
//小程序中只能用wxs://开头
const url = `wx://${options.host}:8083/mqtt`; //替换自己的请求地址 wx或者wxs

module.exports = {options,url}