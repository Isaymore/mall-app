<template>
	<view class="index-swiper">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<view class="swiper-item">
					<image class="swiper-img" :src="item.imgUrl" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		name: 'IndexSwiper',
		props: {
			swiperList: {
				type: Array,
				required: true
			},
		},
	}
</script>

<style lang="less" scoped>
	swiper {
		width: 100%;
		height: 400rpx;
	}

	.swiper-item {
		// padding: 20rpx;

		.swiper-img {
			width: 100%;
			height: 400rpx;
			// border-radius: 12rpx;
		}
	}
</style>
