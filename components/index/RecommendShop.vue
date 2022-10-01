<template>
	<view class="recommend-shop">
		<banner :banner-url="bannerUrl" />
		<scroll-view class="scroll-content" scroll-x="true">
			<view class="scroll-item">
				<commodity :commodityList="shopList" itemWidth="175" bigHeight="175" wrap="nowrap" nameSize="20" />
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import Banner from '@/components/common/Banner.vue'
	import Commodity from '@/components/common/Commodity.vue'
	export default {
		name: 'RecommendShop',
		components: {
			Banner,
			Commodity
		},
		data() {
			return {
				bannerUrl: '../../static/img/shop.jpg',
				shopList: [{
						id: 1,
						imgUrl: '../../static/img/shop1.jpg',
						name: '2022年潮流新款衣服，卫衣时尚男女，爆款G9527',
						cprice: 666,
						oprice: 999,
						discount: 1.8
					},
					{
						id: 2,
						imgUrl: '../../static/img/shop2.jpg',
						name: '2022年潮流新款衣服，卫衣时尚男女，爆款G9527',
						cprice: 666,
						oprice: 999,
						discount: 1.8
					},
					{
						id: 3,
						imgUrl: '../../static/img/shop3.jpg',
						name: '2022年潮流新款衣服，卫衣时尚男女，爆款G9527',
						cprice: 666,
						oprice: 999,
						discount: 1.8
					},
					{
						id: 4,
						imgUrl: '../../static/img/shop4.jpg',
						name: '2022年潮流新款衣服，卫衣时尚男女，爆款G9527',
						cprice: 666,
						oprice: 999,
						discount: 1.8
					},
					{
						id: 5,
						imgUrl: '../../static/img/shop1.jpg',
						name: '2022年潮流新款衣服，卫衣时尚男女，爆款G9527',
						cprice: 666,
						oprice: 999,
						discount: 1.8
					},
					{
						id: 6,
						imgUrl: '../../static/img/shop2.jpg',
						name: '2022年潮流新款衣服，卫衣时尚男女，爆款G9527',
						cprice: 666,
						oprice: 999,
						discount: 1.8
					},
					{
						id: 7,
						imgUrl: '../../static/img/shop3.jpg',
						name: '2022年潮流新款衣服，卫衣时尚男女，爆款G9527',
						cprice: 666,
						oprice: 999,
						discount: 1.8
					},
					{
						id: 8,
						imgUrl: '../../static/img/shop4.jpg',
						name: '2022年潮流新款衣服，卫衣时尚男女，爆款G9527',
						cprice: 666,
						oprice: 999,
						discount: 1.8
					}
				]
			}
		},
	}
</script>

<style lang="less" scoped>
</style>
