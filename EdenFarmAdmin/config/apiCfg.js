const BASE_URL = {
	formal: "https://api.ydnc.com.cn/",
}
const methodList = {
	get: "GET",
	post: "POST",
	options: "OPTIONS",
	head: "HEAD",
	put: "PUT",
	delete: "DELETE",
	trace: "TRACE",
	connect: "CONNECT"
}
//常量
const environmentData = {
	BaseEnUrl: BASE_URL.formal,//修改环境默认接口
}
module.exports = {
	BASE_URL,
	methodList,
	environmentData
}
