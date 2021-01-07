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
			},
			currentId: {
				type: String,
				default: '1'
			}
		},
		mounted() {
			let videoContext = uni.createVideoContext('myVideo', this)
			if(this.currentId === this.item.id){
				videoContext.play()
			}else{
				videoContext.stop()
			}
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
