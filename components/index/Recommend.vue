<template>
	<view class="recommend bg-color">
		<view v-for="(item,index) in recommendList" :key="index" class="recommend-item">
			<image class="item-big" :src="item.bigUrl" mode="widthFix"></image>
			<view class="item-small">
				<block v-for="(k,i) in item.data" :key="i">
					<image class="item-img" :src="k.imgUrl" mode="widthFix"></image>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Recommend',
		props: {
			recommendList: {
				type: Array,
				required: true
			}
		}
	}
</script>

<style lang="less" scoped>
	.recommend {
		padding: 20rpx;

		.recommend-item {
			display: flex;
			flex-direction: column;
			border-radius: 20rpx;
			border: 2rpx solid #ccc;
			overflow: hidden;
			margin: 20rpx 0;

			.item-big {
				width: 100%;
				height: 300rpx;
			}

			.item-small {
				// 方法一：使用flex布局
				display: flex;
				flex-direction: row;
				width: 100%;
				height: 240rpx;

				// 方法二：使用百分比布局，每张图片的宽度设置为33.3333%
				// .item-img {
				// 	width: 33.3333%;
				// 	height: 240rpx;
				// }

				& .item-img:nth-child(-n+3) {
					border: 1px solid #fff;
				}
			}
		}

	}
</style>
