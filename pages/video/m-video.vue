<template>
	<view class="swiper-item">
		<video id="myVideo" class="video" :src="item.path" :enable-play-gesture="true" controls></video>
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
		data(){
			return{
				videoContext: null
			}
		},
		watch: {
			currentId(newData, oldData){
				if(this.currentId === this.item.id){
					this.videoContext.play()
				}else{
					this.videoContext.stop()
				}
			}
		},
		mounted() {
			this.videoContext = uni.createVideoContext('myVideo', this)
			this.videoContext.play()
		},
		methods: {
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
