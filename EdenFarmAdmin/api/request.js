/*
 *参数-----------------------------------------------------------------------------
 * 缓存参数data
 *data={
 *  data// 查询条件；
 *  setTime//缓存时间 day，week，month ；
 * 	host//接口地址；
 *  method//请求方式
 *  apiUrl//接口地址
 *}
 * By FZQ
 */

import {BASE_URL,methodList,environmentData} from '../config/apiCfg';
import {hashStorage} from '../common/utils/hashStorage';
const apiHashStorage = new hashStorage();
console.log("apiHashStorage",typeof(apiHashStorage.getStorage));
function request(data) {
	 const methodUse = methodList[data.method]||"GET" //不传递，默认get请求
	 const url = (BASE_URL[data.host] || environmentData.BaseEnUrl)+ data.apiUrl
	 return new Promise(function(resolve, reject) {
		if(data.setTime){
		 	if(apiHashStorage.getStorage(data)){
				resolve(apiHashStorage.getStorage(data));
				return
			}
		}
		uni.request({
			url:url , 
			data:data.data,
			method:methodUse,
			header: {
				"Content-Type": "application/json",
			},
			success: (res) => {
				resolve(res);
				apiHashStorage.setStorage(data,res)
			},
			fail: (res) => {
				console.log("error"+JSON.stringify(res));
				if(false){
					//通用总状态处理
				}else{
					reject(res)
				}
			},
		});
	})
}


module.exports = {
	request: request,
	methodList : methodList,
}
