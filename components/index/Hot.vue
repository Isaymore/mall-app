<template>
	<view class="hot">
		<commodity :commodity-list="hotList" item-width="230" bigHeight="230" />
	</view>
</template>

<script>
	import Commodity from '@/components/common/Commodity.vue'
	export default {
		name: 'Hot',
		components: {
			Commodity
		},
		data() {
			return {
				hotList: [{
						id: 1,
						imgUrl: '../../static/img/hot1.jpg',
						name: '2022年潮流新款衣服，卫衣时尚男女，爆款G9527',
						cprice: 666,
						oprice: 999,
						discount: 1.8
					},
					{
						id: 2,
						imgUrl: '../../static/img/hot2.jpg',
						name: '2022年潮流新款衣服，卫衣时尚男女，爆款G9527',
						cprice: 666,
						oprice: 999,
						discount: 1.8
					},
					{
						id: 3,
						imgUrl: '../../static/img/hot3.jpg',
						name: '2022年潮流新款衣服，卫衣时尚男女，爆款G9527',
						cprice: 666,
						oprice: 999,
						discount: 1.8
					},
					{
						id: 4,
						imgUrl: '../../static/img/hot1.jpg',
						name: '2022年潮流新款衣服，卫衣时尚男女，爆款G9527',
						cprice: 666,
						oprice: 999,
						discount: 1.8
					},
					{
						id: 5,
						imgUrl: '../../static/img/hot2.jpg',
						name: '2022年潮流新款衣服，卫衣时尚男女，爆款G9527',
						cprice: 666,
						oprice: 999,
						discount: 1.8
					},
					{
						id: 6,
						imgUrl: '../../static/img/hot3.jpg',
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

<style>
</style>
