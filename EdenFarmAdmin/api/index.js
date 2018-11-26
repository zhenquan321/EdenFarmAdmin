import {BASE_URL,methodList,environmentData} from '../config/apiCfg';
function request(num,url,data,method) {
	 const methodUse = methodList[method]||"GET" //不传递，默认get请求
	 return new Promise(function(resolve, reject) {
		uni.request({
			url:BASE_URL[num]+ url , 
			data:data,
			method:methodUse,
			header: {
				"Content-Type": "application/json",
			},
			success: (res) => {
				resolve(res);
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
	environment : environmentData.BaseEnUrl,
}
