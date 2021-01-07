<template>
	<view class="wrapper">
		<view class="page-section swiper">
			<view class="page-section-spacing">
				<swiper class="swiper" @change="changeSwiper" :vertical="vertical" :circular="circular" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				 :duration="duration">
					<swiper-item v-for="item in dataList" :key="item.id">
						<mVideo :item="item" v-if="item.show"></mVideo>
						<!-- <view class="swiper-item">
							<video id="myVideo" class="video" :src="item.path" controls></video>
						</view> -->
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
</template>

<script>
	import mVideo from './m-video.vue'
	export default {
		components: {
			mVideo
		},
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: false, // 指示点
				autoplay: false, // 自动播放
				vertical: true, // 是否为纵向
				circular: true, // 是否循环滑动
				interval: 2000,
				duration: 500,
				dataList: [
					{
						id: '1',
						path: 'https://appvod.lizanstar.cn/b6e95f26f74b46869f6faa1e4a860e18/6f93c79247f044a5a00fb73fb8f71bad.m3u8',
						show: true
					},
					{
						id: '2',
						path: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-uni-app-doc/360e4b20-4f4b-11eb-8a36-ebb87efcf8c0.mp4',
						show: false
					}
				]
			}
		},
		methods: {
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			},
			changeSwiper(e) {
				console.log(e.detail.current);
				this.dataList.forEach(item => {
					item.show = false
				})
				this.dataList[e.detail.current].show = true
			}
		},
		onLoad() {
			// let videoContext = uni.createVideoContext('myVideo')
			// videoContext.play()
		}
	}
</script>

<style scoped>
	.wrapper {
		height: 100vh;
		width: 100vw;
	}

	.page-section-spacing, .page-section, .swiper{
		height: 100%;
	}
	.swiper-item {
		height: 100%;
	}
	.uni-bg-red {
		background: red;
	}

	.uni-bg-green {
		background: green;
	}

	.uni-bg-blue {
		background: blue;
	}
</style>
