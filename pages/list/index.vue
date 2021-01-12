<template>
	<view class="wrapper">
		<mescroll-body ref="mescrollRef" @init="mescrollInit" @down="downCallback" @up="upCallback" :down="downOption" :up="upOption">
			 <!-- //  @init="mescrollInit" @down="downCallback" @up="upCallback"为固定值,不可删改(与mescroll-mixins保持一致) 
			 // :down="downOption" :up="upOption" 绝大部分情况无需配置 
			 // :top="顶部偏移量" :bottom="底部偏移量" :topbar="状态栏" :safearea="安全区" (常用)
			 // 字节跳动小程序 ref="mescrollRef" 必须配置 
			 // 此处支持写入原生组件 -->
			 <view v-for="data in dataList" :key="data.id"> 数据列表... </view>
		 </mescroll-body>
	</view>
</template>

<script>
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	export default{
		mixins: [MescrollMixin],
		data(){
			return{
				upOption: {
					noMoreSize: 5,
					page: {
						size: 30
					}
				},
				dataList: []
			}
		},
		methods: {
			downCallback(){
				this.mescroll.resetUpScroll();
			},
			upCallback(page){
				if(page.num == 1) this.dataList = [];
				setTimeout(() => {
					let obj = {}
					for (let i = 0; i < 30; i++) {
						obj.id = i
						this.dataList.push(obj)
					}
					this.mescroll.endBySize(30, 60);
				}, 1000)
			}
		}
	}
</script>

<style>
</style>
