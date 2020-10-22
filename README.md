# MQTT-WeChat-Client 一个用于物联网 MQTT 协议的微信小程序客户端

## 本小程序使用 MQTT.js 进行 websocket 通信
因使用微信小程序的缘故，微信将 websocket 进行封装，连接需使用 wxs 或 wx 进行连接

## Quick Start 快速开始

```shell
git clone https://github.com/yuqing521/WXapp_MQTT.git
```

### 克隆本项目后需要修改四部分

（1）小程序appid

（2）MQTT服务器域名

修改根目录下的 config.js 修改 mqtt 服务器地址，以及端口号来进行连接
```js 
const options = {
    connectTimeout: 4000, //超时时间限制
    clientId: 'clientUserId', //连接id
    host: 'broker.emqx.io', //MQTT 服务器域名
    port: '8083' //websocket 端口号
  }
  ```
（3）订阅主题 
修改/pages/index 目录下 index.js 修改订阅主题列表 TopicList
```js
TopicList:["test1","test2","test3","test4"]
```
## 注：mqtt.js文件下载链接
https://unpkg.com/browse/mqtt@3.0.0/dist/

