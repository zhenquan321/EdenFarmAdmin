<template :name="TemplateList">
	<view :class="[count ==2 ?'info-recommend-container-two':'info-recommend-container-three']">
		<view class="info-recommend-item" v-for="item in templateList" :key="item">
			<view class="info-item-wrapper" @tap="goToEditor(item)">
				<image class="item-img" :src="'https:'+item._sm.c"></image>
				<view class="item-title">{{item._sm.t}}</view>
				<view class="item-price">免费</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		name: "TemplateList",
		props: ['templateList','count'],
		
		methods: {
			jumpToNewTab(url) {
				uni.navigateTo({
					url: url,
				});
			},
			goToEditor(data){
			  let parmas={
			  	data:{
				  from: this.userInfoGlobal().userid,
				  opts: {
					mobile: true,
					nickname: this.userInfoGlobal().nickname
				  },
				  rfid: null,
				  rtid: data._id,
				  user: {
					avatar: this.userInfoGlobal().pic,
					uid: this.userInfoGlobal().userid,
					uname: this.userInfoGlobal().nickname
				  },
				  extra: {}
				},// 查询条件；
			  	setTime:"",//缓存时间 day，week，month ；
			  	host:"",//接口地址；
			  	method:"post",//请求方式
			  	apiUrl:"/api/index/newFile",//接口地址
			  };
			  this.request(parmas)
				.then(res => {
				  if (
					res &&
					res.data &&
					res.data.data &&
					res.data.data.cnt &&
					res.data.data.cnt.file
				  ) {
					console.log(this.userInfoGlobal().userid,res.data.data.cnt.file._id)
					this.goEditor.goUrl(res.data.data.cnt.file._id, "", "");
				  }
				})
				.catch(err => {});
			}
		},
		mounted() {
			
		}
	}
</script>
<style>
	.info-recommend-container-three {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}

	.info-recommend-container-three .info-recommend-item {
		width: 33%;
		border-radius: 12px;
		margin-top: 24px;
	}

	.info-recommend-container-two {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}

	.info-recommend-container-two .info-recommend-item {
		width: 45%;
		border-radius: 12px;
		margin-top: 24px;
	}

	.info-recommend-item .info-item-wrapper {
		border-radius: 12px;
		margin-left: 12px;
		margin-right: 12px;
		width: auto;
		box-shadow: -2px 0px 2px rgba(0, 0, 0, .1), 0px 0px 0px rgba(0, 0, 0, 0.1), 0px 4px 2px rgba(0, 0, 0, .1), 2px 0px 2px rgba(0, 0, 0, .1);
		overflow: hidden;
	}

	.info-item-wrapper .item-img {
		width: 100%;
		height: 240px;
	}

	.info-item-wrapper .item-title {
		margin-top: 10px;
		margin-left: 12px;
		font-size: 24px;
		color: #444;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.info-item-wrapper .item-price {
		margin-top: 4px;
		margin-left: 12px;
		font-size: 24px;
		color: #fc5252;
		padding-bottom: 8px;
	}
</style>
