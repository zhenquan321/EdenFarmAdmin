<template :name="WxLoginAlert" >
	<view class="page-share-title" >
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex';
	export default {
		name: "WxLoginAlert",
		props: {
			name: {
				default: ""
			}
		},
		computed: mapState(['userInfo',"SystemInfo"]),
		methods: {
			...mapMutations(['login']),
			//第三方授权登录
			oauth(value) {
				uni.login({
					provider: value,
					success: (res) => {
						this.conLog(res);
						this.conLog(this.SystemInfo,"SystemInfo");
						this.wxappVerify(res.code)
					},
					fail: (err) => {
						console.error('授权登录失败：' + JSON.stringify(err));
					}
				});
			},
			//wps账号中心验证与获取用户信息
			wxappVerify(type){
				//设备信息上报待处理
				let deviceInfo="wpsua=V1BTVUEvMS4wIChhbmRyb2lkLW9mZmljZToxMC4xLjIuNDsgYW5kcm9pZDptaXVpIDguMTsgYTFmNmNjYTU1NDFlNGFkZGFlZDg4ODFiYTJlNTg4MmI6ZUhoNGVPZWFoT2FKaS1hY3VnPT0pIHhpYW9taS81";
				let qurey = {
					deviceInfo:deviceInfo,	//Y	第三方OAuth2类型	枚举值（qq, wechat, wechat_mp, sina, xiaomi, 等等）
					wx_jscode:type,	//	Y	第三方OAuth2回调得到的授权Code	
					xiuTangKey:"xiuTangSecret",
				}
				
				let parmas={
					data:qurey,// 查询条件；
					setTime:"",//缓存时间 day，week，month ；
					host:"",//接口地址；
					method:"post",//请求方式
					apiUrl:"/wxapp/verify",//接口地址
				}
				this.request(parmas)
				.then(re=>{
					this.conLog(re.data);
					this.login(re.data);
				})
				.catch(re=>{
					this.conLog("oauthAerify_catch",re)
				})
			},
			
		},
		onLoad() {
			uni.showModal({
				title: '登录',
				content: '是否通过微信登录',
				success:  (res)=>{
					if (res.confirm) {
						this.oauth("weixin");
					} else if (res.cancel) {
						
					}
				}
			});
		}
	}
</script>
<style>
</style>
