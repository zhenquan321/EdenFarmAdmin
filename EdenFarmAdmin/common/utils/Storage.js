import base64 from "../../components/js-base64";
 /*
 *qurey 数据缓存条件
 qurey={
   time// 日，周，月；
   data// 查询条件；
 }
 */
// function UnStorage() {};
// UnStorage.prototype = {
export default {
  getWeekd: function (dt) {
    let d1 = new Date();
    let d2 = new Date();
    d2.setMonth(0);
    d2.setDate(1);
    let rq = d1 - d2;
    let days = Math.ceil(rq / (24 * 60 * 60 * 1000));
    let num = Math.ceil(days / 7);
    return num;
  },
  generateHashId: function (qurey) {
    let hashId = "";
    let NowDate = new Date();
    let time = "";
	let qureyTime = qurey.time||"week";
    if (qureyTime == "day") {
      time = NowDate.getYear() + NowDate.getMonth() + "day" + NowDate.getDate();
    } else if (qureyTime == "week") {
      time = NowDate.getYear() + "week" + this.getWeekd();
    } else if (qureyTime == "month") {
      time = NowDate.getYear() + "month" + NowDate.getMonth();
    }
    hashId = base64.Base64.encode(time + (typeof(qurey.data)==="string"?qurey.data:JSON.stringify(qurey)));
    return hashId
  },
	// 同步存储数据到缓存
	$setStorage: (key, data) => {
		console.log(this.generateHashId)
		let hashId = typeof(key)==="string"? key : this.generateHashId(key);
		uni.setStorageSync(hashId, data);
	},
	// 同步从缓存获取数据
	$getStorage: (key) => {
		let hashId = typeof(key)==="string"? key : this.generateHashId(key);
		return uni.getStorageSync(hashId);
	},
	// 异步存储数据到缓存
    $setStorageAsync: (params) => {
		const {key, data, frontFun = () => {}} = params;
		return new Promise((resolve, reject)=> {
			let hashId = typeof(key)==="string" ? key : this.generateHashId(key);
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
		const {key, frontFun = () => {}} = params;
		return new Promise((resolve, reject) =>{
			let hashId = typeof(key)==="string" ? key : this.generateHashId(key);
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
};
