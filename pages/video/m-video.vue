<template>
	<view class="swiper-item">
		<video id="myVideo" class="video" :src="item.path" controls></video>
	</view>
</template>

<script>
	export default{
		props:{
			item: {
				default(){
					return {}
				}
			}
		},
		mounted() {
			let videoContext = uni.createVideoContext('myVideo', this)
			videoContext.play()
		}
	}
</script>

<style scoped>
	.swiper-item {
		height: 100%;
	}
	.video{
		height: 100%;
		width: 100%;
		background-color: black;
	}
</style>
