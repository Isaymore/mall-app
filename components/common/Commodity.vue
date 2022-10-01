<template>
	<view class="commodity" :style="{flexWrap: wrap}">
		<view v-for="item in commodityList" :key="item.id" class="commodity-item"
			:style="{width: itemWidth + 'rpx', paddingBottom: '20rpx'}">
			<image :style="{height: bigHeight+'rpx'}" class="commodity-img" :src="item.imgUrl" mode=""></image>
			<view class="commodity-content">
				<text class="commodity-name" :style="{fontSize: nameSize + 'rpx'}">{{item.name}}</text>
				<view>
					<text class="cprice">￥{{item.cprice}}</text>
					<text class="oprice">￥{{item.oprice}}</text>
				</view>
				<text class="discount">{{item.discount}}折</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Commodity',
		props: {
			commodityList: {
				type: Array,
				required: true
			},
			// 一行平均排列3张图时，传入itemWidth prop属性，比如Hot.vue传入：item-width="230"
			itemWidth: {
				type: String,
				default: '350'
			},
			bigHeight: {
				type: String,
				default: '350'
			},
			// 是否换行，默认换行。但RecommendShop组件横向滚动，设置成不换行nowrap
			wrap: {
				type: String,
				default: 'wrap'
			},
			// 商品名的字体大小
			nameSize: {
				type: String,
				default: '32'
			}
		},
		computed: {
			// 注意小程序不能识别编译itemStyleObject，会报渲染层错误
			itemStyleObject() {
				return {
					width: this.itemWidth + 'rpx',
					paddingBottom: '20rpx'
				}
			},
			// 注意小程序不能识别编译nameStyleObject，会报渲染层错误
			nameStyleObject() {
				return {
					fontSize: this.nameSize + 'rpx'
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.commodity {
		display: flex;
		flex-direction: row;
		// flex-wrap: wrap;
		justify-content: space-between;
		padding: 0 20rpx;

		.commodity-item {
			// width: 350rpx;
			// padding-bottom: 20rpx;

			.commodity-img {
				width: 100%;
				// height: 350rpx;
			}

			.commodity-content {
				text-align: center;

				.commodity-name {
					// 隐藏溢出盒子的部分
					overflow: hidden;
					// 用省略号替换溢出的文本
					text-overflow: ellipsis;
					// 弹性伸缩盒子模型显示
					display: -webkit-box;
					// 限制在一个块元素显示的文本的行数
					-webkit-line-clamp: 2;
					// 设置伸缩盒对象的子元素从上到下纵向排列
					-webkit-box-orient: vertical;
					// 解决防止页面中出现连续无意义的长字符打破布局，应该使用break-all属性值
					word-break: break-all;
					color: #333;
					padding: 6rpx 20rpx;
				}

				.oprice {
					padding-left: 10rpx;
					text-decoration: line-through;
					font-size: 24rpx;
					color: #999;
				}

				.discount {
					padding: 2rpx 10rpx;
					border: 1px solid red;
					border-radius: 8rpx;
					font-size: 20rpx;
					color: red;
				}
			}
		}
	}
</style>
