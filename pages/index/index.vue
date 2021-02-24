<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<u-button type="success" @click="gotoVideo">video</u-button>
		<button type="default" open-type="getUserInfo" @getuserinfo="uniLogin">微信登录</button>
		<view class="swiper-box">
			<swiper class="swiper" :indicator-dots="false" :autoplay="false" :interval="interval" :vertical="true" :duration="duration" :display-multiple-items="2">
				<swiper-item class="swiper-item">
					<view class="uni-bg">A</view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<view class="uni-bg">B</view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<view class="uni-bg">C</view>
				</swiper-item>
			</swiper>
		</view>
		<u-popup v-model="show" mode="bottom" height="500rpx" border-radius="20" closeable close-icon="close-circle" close-icon-color="#66666666" close-icon-size="40">
			<myslot>
				<div slot="header">123</div>
				<div slot="footer">456</div>
			</myslot>
		</u-popup>
	</view>
</template>

<script>
	import myslot from './components/slot.vue'
	
	export default {
		components: {
			myslot
		},
		data() {
			return {
				title: 'Hello',
				show: false,
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		onLoad() {

		},
		methods: {
			uniLogin() {
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						console.log(loginRes);
						// 获取用户信息
						uni.getUserInfo({
							provider: 'weixin',
							success: function(infoRes) {
								console.log('用户昵称为：' + infoRes.userInfo.nickName);
							},
							fail: (err) => {
								console.log(err);
								uni.showToast({
									icon: 'none',
									title: "授权失败",
									duration: 1500
								})
							}
						});
					},
					fail: (err) => {
						console.log(err);
					}
				});
			},
			gotoVideo(){
				this.show = true;
				return
				uni.navigateTo({
					url: '/pages/video/index'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.swiper-box{
		height: 500rpx;
		width: 100%;
	}
	.swiper-item{
		padding-bottom: 20rpx;
		box-sizing: border-box;
		.uni-bg{
			height: 100%;
			border: 2rpx solid red;
			box-sizing: border-box;
		}
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
