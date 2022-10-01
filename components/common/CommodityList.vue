<template>
	<view class="commodity-list">
		<commodity :commodity-list="commodityList" />
	</view>
</template>

<script>
	import Commodity from '@/components/common/Commodity.vue'
	export default {
		name: 'CommodityList',
		components: {
			Commodity
		},
		props: {
			commodityList: {
				type: Array,
				required: true
			},
		},
	}
</script>

<style>
</style>
