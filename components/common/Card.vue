<template>
	<view class="card">
		<text>-</text>
		<slot>
			<text class="card-name">{{cardTitle}}</text>
		</slot>
		<text>-</text>
	</view>
</template>

<script>
	export default {
		name: "Card",
		props: {
			cardTitle: {
				type: String,
				default: ''
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="less" scoped>
	.card {
		padding: 20rpx;
		text-align: center;
		font-weight: 700;

		.card-name {
			padding: 0 20rpx;
			font-size: 32rpx;
		}
	}
</style>
