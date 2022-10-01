<template>
	<view class="banner">
		<image class="banner-img" :src="bannerUrl" mode=""></image>
	</view>
</template>

<script>
	export default {
		name: 'Banner',
		props: {
			bannerUrl: {
				type: String,
				required: true
			}
		}
	}
</script>

<style lang="less" scoped>
	.banner {
		padding: 10rpx 20rpx;

		.banner-img {
			width: 100%;
			height: 360rpx;
			border-radius: 16rpx;
			vertical-align: middle;
		}
	}
</style>
