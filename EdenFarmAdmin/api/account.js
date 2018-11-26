import index from './index'
const _request = index.request;
const _environment = index.environment;
/**
 * environment:当前环境默认请求URL，如需单独写，请查看config。
 * 例：账号中心：传"account";
 */

const Api_account = {
	//小程序微信授权登录
	wxappVerify(data){
		let url = '/wxapp/verify';
		return _request(_environment, url, data ,"post")
	},
	//微信授权登录
	appVerify(data){
		let url = '/app/verify';
		return _request(_environment, url, data ,"post")
	},
	//根据wpsid获取用户信息
	getUserInfo(data){
		let url = '/wxapp/getUserInfo';
		return _request(_environment, url, data ,"get")
	},
}
	
export default Api_account