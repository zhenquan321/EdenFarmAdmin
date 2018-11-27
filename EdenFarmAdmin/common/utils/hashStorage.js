/*
 *数据缓存-----------------------------------------------------------------------------
 * 数据缓存key
 *key={
 *  setTime// 日，周，月；
 *  data// 查询条件；
 *}
 * By FZQ
 */
import base64 from "../../components/js-base64";

function hashStorage() {
	console.log("hashStorage");
}
hashStorage.prototype = {
	constructor: hashStorage,
	getWeekd: function() {
		let d1 = new Date();
		let d2 = new Date();
		d2.setMonth(0);
		d2.setDate(1);
		let rq = d1 - d2;
		let days = Math.ceil(rq / (24 * 60 * 60 * 1000));
		let num = Math.ceil(days / 7);
		return num;
	},
	generateHashId: function(key) {
		let hashId = "";
		var NowDate = new Date();
		let time = "";
		if (key.setTime == "day") {
			time = NowDate.getYear() + NowDate.getMonth() + "day" + NowDate.getDate();
		} else if (key.setTime == "week") {
			time = NowDate.getYear() + "week" + this.getWeekd();
		} else if (key.setTime == "month") {
			time = NowDate.getYear() + "month" + NowDate.getMonth();
		}
		hashId = base64.Base64.encode(time + (typeof(key.data) === "string" ? key.data : JSON.stringify(key)));
		return hashId
	},
	getStorage: function(key) {
		let hashId = typeof(key) === "string" ? key : this.generateHashId(key);
		return uni.getStorageSync(hashId);
	},
	setStorage: function(key, data) {
		let hashId = typeof(key) === "string" ? key : this.generateHashId(key);
		uni.setStorageSync(hashId, data);
	},
	// 异步存储数据到缓存
	setStorageAsync: (params) => {
		const {
			key,
			data,
			frontFun = () => {}
		} = params;
		return new Promise((resolve, reject) => {
			let hashId = typeof(key) === "string" ? key : this.generateHashId(key);
			uni.setStorage({
				key: hashId,
				data: data,
				success: () => {
					resolve('success');
				},
				fail: () => {
					reject('fail');
				},
				complete: () => {
					frontFun && frontFun();
				}
			});
		});
	},
	// 异步从缓存获取数据
	$getStorageAsync: (params) => {
		const {
			key,
			frontFun = () => {}
		} = params;
		return new Promise((resolve, reject) => {
			let hashId = typeof(key) === "string" ? key : this.generateHashId(key);
			uni.getStorage({
				key: hashId,
				success: (res) => {
					res && resolve(res.data);
				},
				fail: () => {
					reject('fail');
				},
				complete: () => {
					frontFun && frontFun();
				}
			});
		});
	},
}

module.exports = {
	hashStorage
}
