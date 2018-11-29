<template>
	<view class="content">
		<view class="app">
			<view class="header">
				<view class="jinEnCard">
					<view class='JETitle'>今天付款金额(元)</view>
					<view class='JENum'>34411.2</view>
				</view>
				<view class='XMList'>
					<view class='xmCard'>
						<view>待确认订单</view>
						<view>34</view>
					</view>
					<view class='xmCard'>
						<view>待发货订单</view>
						<view>34</view>
					</view>
					<view class='xmCard'>
						<view>付款件数</view>
						<view>34</view>
					</view>
				</view>
			</view>
			<view class="action">
				<view class="col">
					<navigator url="/pages/shop/order/index">
						<image class="tubiao" src="/static/manage/dingdanGl.png"></image>
						<text class='textMs'>订单管理</text>
					</navigator>
				</view>
				<view class="col">
					<navigator url="/pages/hotel/store/fang/room">
						<view class='imgCardIcon'>
							<image class="tubiao" src="/static/manage/fangjianGl3.png"></image>
						</view>
						<text class='textMs'>房间管理</text>
					</navigator>
				</view>
				<view class="col">
					<navigator url="/pages/hotel/store/fang/price">
						<image class="tubiao" src="/static/manage/fangjiaGl2.png"></image>
						<text class='textMs'>房价管理</text>
					</navigator>
				</view>

				<view class="col">
					<navigator url="/pages/hotel/store/info/index">
						<view class='imgCardIcon2'>
							<image class="tubiao" src="/static/manage/ziliaoGl.png"></image>
						</view>
						<text class='textMs'>资料管理</text>
					</navigator>
				</view>

				<view class="col">
					<navigator url="/pages/hotel/store/comment/index">
						<image class="tubiao" src="/static/manage/pingjiaGl.png"></image>
						<text class='textMs'>评价管理</text>
					</navigator>
				</view>


				<view bindtap="tel" class="col">
					<view class='imgCardIcon3'>
						<image class="tubiao" src="/static/manage/lianxiKf.png"></image>
					</view>
					<text class='textMs'>联系客服</text>
				</view>
			</view>
			<view class="kongbai"></view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'

	export default {
		computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
		methods: {
				...mapMutations(['login']),
				statistics() {
					const data = {
					};
					let parmas={
						data:data,// 查询条件；
						setTime:"",//缓存时间 day，week，month ；
						host:"",//接口地址；
						method:"get",//请求方式
						apiUrl:"/api/Order/statistics",//接口地址
					}
					this.request(parmas)
					.then(re=>{
						console.log(re.data);
						
					})
					.catch(re=>{
						this.conLog("oauthAerify_catch",re)
					})
				},
		},
		
		onLoad() {
			if (!this.hasLogin) {
				uni.showModal({
					title: '未登录',
					content: '您未登录，需要登录后才能继续',
					/**
					 * 如果需要强制登录，不显示取消按钮
					 */
					showCancel: !this.forcedLogin,
					success: (res) => {
						if (res.confirm) {
							/**
							 * 如果需要强制登录，使用reLaunch方式
							 */
							if (this.forcedLogin) {
								uni.reLaunch({
									url: '../login/login'
								});
							} else {
								uni.navigateTo({
									url: '../login/login'
								});
							}
						}
					}
				});
			}
		}
	}
</script>

<style lang="less" scoped>
page {
    background: #f2f7fa;
}

.app{
  height: auto; width: auto; overflow: hidden;
  font-size: 26rpx;
}


.header{
  width: 100%;
  height: 300rpx;
  background:  #60a411;
  padding-top: 20rpx;
}

.hd_main{
  width: 90%;
  margin-left: 5%;
  height: auto; overflow: hidden;
}

.hd_main .icon{
  width: 50%;
  margin-top: 50rpx;
  float: left;
  text-align: center;
}
.hd_main .icon .image{
  position: relative;
  height: 80rpx;
  width: 100rpx;
  margin: 0 auto;
}
.hd_main .icon .image image{
  width: 60rpx; height: 60rpx;
  margin-top: 20rpx;
}
.hd_main .icon .text_wait{
  text-align: center;
  color: #f1c33a;
  font-size: 24rpx;
  margin-top: 20rpx;
}
.hd_main .icon .text_sh{
  text-align: center;
  color: #57a1e0;
  font-size: 24rpx;
  margin-top: 20rpx;
}
.hd_main .icon .text{     
  text-align: center;
  color: #fff;
  font-size: 24rpx;
  margin-top: 20rpx;
}
.tips{
  height: 40rpx;
  width: 40rpx;
  border-radius: 20rpx;
  background: #ef5033;
  color:#fff;
  font-size: 24rpx;
  line-height: 40rpx;
  position: absolute; right: 0;
  top: 0; 
}

.action {
  width: 100%;
  height: auto; overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  background-color:#fff;
  padding-bottom:50rpx;
  margin-top:40rpx;

}

.action .col{
  width: 33%;
  flex:1;
  text-align: center;
  margin-top: 50rpx;
}
.action .tubiao{
  width: 120rpx; 
  height: 120rpx;
}
.action .jiantou{
   float: right; width: 30rpx; height: 30rpx;
  margin-right: 20rpx;
  margin-top: 25rpx;
}

.action .col text{
  height: 40rpx;
  width: 250rpx;
  float: left;
  line-height: 40rpx;
  color: #666; 
  text-align: center;
}
.qihuan{
  width: 100%;
  height: 80rpx;
  text-align: center;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1000;
  background: #fff;
}
.qihuan image{
  width: 40rpx;
  height: 40rpx;
  float: left;
  margin-left: 200rpx; 
  margin-top: 20rpx;
}
.qihuan text{
   font-size: 26rpx;
   margin-left: 20rpx;
   color: #1ba8b9; 
    float: left;
    margin-top: 20rpx;
}

.jinEnCard{
  color:#fff;
  text-align: center;

}

.jinEnCard .JETitle{
  color:#fff;
  
}

.jinEnCard .JENum{
  color:#fff;
  font-size: 68rpx;
  height: 130rpx;
  line-height: 150rpx
}

.XMList{
  color:#fff;
  display: flex;
  background-color: rgb(81, 158, 37);
  background: linear-gradient(#60a411, rgb(78, 145, 43),rgb(71, 138, 33)); /* 标准的语法 */
  margin-bottom: 20px;
  height:100rpx;
  padding: 44rpx 20rpx 10rpx;
}
.XMList .xmCard{
  text-align: center;
  color:#fff;
  flex:1;
  height:80rpx;
  line-height: 40rpx;
  border-right:1px solid #ddd; 
}

.XMList .xmCard:last-child{
  border-right:0px solid #fff; 
}

.imgCardIcon{
  display: inline-block;
  width: 96rpx;
  height: 96rpx;
  border-radius:50%; 
  background-color: rgb(182, 222, 253);
  padding: 10rpx;
  margin-bottom: 13rpx;
  margin-top: 6rpx;
}

.action .imgCardIcon .tubiao{
  width: 84rpx;
  height: 84rpx;
}

.imgCardIcon2{
  display: inline-block;
  width: 96rpx;
  height: 96rpx;
  border-radius:50%; 
  background-color: rgb(189, 250, 194);
  padding: 16rpx 10rpx 7rpx;
  margin-bottom: 11rpx;
  margin-top: 6rpx;
}
.action .imgCardIcon2 .tubiao{
  width: 80rpx;
  height: 80rpx;
}
.imgCardIcon3{
  display: inline-block;
  width: 96rpx;
  height: 96rpx;
  border-radius:50%; 
  background-color: rgb(250, 201, 201);
  padding: 13rpx 10rpx 7rpx;
  margin-bottom: 11rpx;
  margin-top: 6rpx;
}

.action .imgCardIcon3 .tubiao{
  width: 84rpx;
  height: 84rpx;
}
</style>
