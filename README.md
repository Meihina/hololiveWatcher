# holo
* 用于概览并监听hololive在bilibili的直播转播的网页   
* vueJS + nodeJS(express)
[网页地址](http://hololive.kaza.ink )  
* hololive牛逼  
# API
* 服务器地址 http://hololive_api.kaza.ink  
* 接口说明
    | 接口 | 类型 |说明|
    |------|----|----|
    | /livingRoom | POST| 返回主播信息|
    | /getVideo | POST| 返回用户投稿视频|
* /livingRoom
    | 参数 | 类型 |必填|说明|
    |-----|-------|----|----|
    | header | | true|'Content-Type': 'application/json'|
    | vtbID | string/number|true |用户直播间id|
* /getVideo 
    | 参数 | 类型 |必填|说明|
    |-----|-------|----|----|
    | header | | true|'Content-Type': 'application/json'|
    | userID | string/number|true |用户id|
    | page | string/number|true |请求的页码|
    | pagesize | string/number|true |单次请求每页返回的条目数|
