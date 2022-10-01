<template>
	<view class="icons">
		<view class="icons-item">
			<image class="icons-img" src="../../static/img/icons1.png" mode="widthFix"></image>
			<text class="icons-name">跑步</text>
		</view>
		<view class="icons-item">
			<image class="icons-img" src="../../static/img/icons2.png" mode="widthFix"></image>
			<text class="icons-name">跑步</text>
		</view>
		<view class="icons-item">
			<image class="icons-img" src="../../static/img/icons3.png" mode="widthFix"></image>
			<text class="icons-name">跑步</text>
		</view>
		<view class="icons-item">
			<image class="icons-img" src="../../static/img/icons4.png" mode="widthFix"></image>
			<text class="icons-name">跑步</text>
		</view>
		<view class="icons-item">
			<image class="icons-img" src="../../static/img/icons5.png" mode="widthFix"></image>
			<text class="icons-name">跑步</text>
		</view>
		<view class="icons-item">
			<image class="icons-img" src="../../static/img/icons6.png" mode="widthFix"></image>
			<text class="icons-name">跑步</text>
		</view>
		<view class="icons-item">
			<image class="icons-img" src="../../static/img/icons7.png" mode="widthFix"></image>
			<text class="icons-name">跑步</text>
		</view>
		<view class="icons-item">
			<image class="icons-img" src="../../static/img/icons8.png" mode="widthFix"></image>
			<text class="icons-name">跑步</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Icons'
	}
</script>

<style lang="less" scoped>
	.icons {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		margin: 0 30rpx;

		.icons-item {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 25%;
			padding-bottom: 10rpx;

			.icons-img {
				width: 100rpx;
				height: 100rpx;
			}

			.icons-name {
				color: #636263;
			}
		}
	}
</style>
