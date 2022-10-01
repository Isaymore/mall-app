<template>
	<view class="index-wrapper">
		<scroll-view :scroll-into-view="scrolltoIndex" class="scroll-content" scroll-x="true">
			<view>
				<!-- 滚动子元素的id：'top'+index -->
				<text :id="'top'+index" :class="topBarIndex === index ? 'f-active-color' : 'f-color'"
					class="scroll-item" v-for="(item,index) in topBarList" :key="index" @tap="changeTab(index)">
					{{item.name}}
				</text>
			</view>
		</scroll-view>
		<!-- 测试：style="background-color: red;" -->
		<swiper @change="handleSwiper" :current="topBarIndex" :style="{height: clientHeight + 'px'}">
			<swiper-item v-for="(item,index) in newTopBar" :key="index">
				<scroll-view scroll-y="true" :style="{height: clientHeight + 'px'}">
					<template v-if="(item.data || []).length">
						<block v-for="(k,i) in item.data" :key="i">
							<!-- 推荐模板 -->
							<!-- v-if 的条件表达式为真，才会渲染，并传递prop；如果为假，不会渲染 -->
							<index-swiper v-if="k.type==='swiperList'" :swiperList="k.data" />

							<template v-if="k.type==='recommendList'">
								<recommend v-if="k.type==='recommendList'" :recommendList="k.data" />
								<!-- card组件不能暴露在外面，有bug：会遍历出现3次。所以要包裹在template元素内 -->
								<!-- 另外card组件不能和commodity-list组件包裹在template元素，不能渲染，这是uni-app的已知bug -->
								<card card-title="猜你喜欢" />
							</template>

							<commodity-list v-if="k.type==='commodityList'" :commodityList="k.data" />
						</block>
					</template>

					<template v-else>
						<view>抱歉，暂无数据...</view>
					</template>
				</scroll-view>
			</swiper-item>
		</swiper>



		<!-- 其他模板：运动户外、美妆等 -->
		<!-- <banner :banner-url="bannerUrl" />
					<icons />
					<card card-title="热销爆品" />
					<hot />
					<card card-title="推荐店铺" />
					<recommend-shop />
					<card cardTitle="为您推荐" />
					<commodity-list /> -->
	</view>
</template>

<script>
	import IndexSwiper from '@/components/index/IndexSwiper.vue'
	import Recommend from '@/components/index/Recommend.vue'
	import Card from '@/components/common/Card.vue'
	import CommodityList from '@/components/common/CommodityList.vue'
	import Banner from '@/components/common/Banner.vue'
	import Icons from '@/components/common/Icons.vue'
	import Hot from '@/components/index/Hot.vue'
	import RecommendShop from '@/components/index/RecommendShop.vue'
	export default {
		components: {
			IndexSwiper,
			Recommend,
			Card,
			CommodityList,
			Banner,
			Icons,
			Hot,
			RecommendShop,
		},
		data() {
			return {
				swiperList: [],
				// 内容块的高度值
				// 因为滑块视图组件swiper本身有150px的默认高度，所以要动态获取内容块的高度
				// 屏幕可视区域的高度
				clientHeight: 0,
				bannerUrl: '../../static/img/banner1.jpg',
				// 滚动到该子元素，值为某子元素id（id不能以数字开头），默认第一个子元素
				scrolltoIndex: 'top0',
				// current: 0, // 当前所在滑块的 index，默认在第一个
				topBarIndex: 0, // 当前选中tab的索引，默认选中第一个
				topBarList: [],
				// 承载滑块视图的内容数据，比如推荐和运动户外tab对应显示的内容不一致
				newTopBar: []
			}
		},
		onLoad() {
			// 监听页面加载，调用页面初始化方法，发请求获取后端数据
			this.__init()
		},
		// 监听页面初次渲染完成
		onReady() {
			uni.getSystemInfo({
				success: res => {
					// 80rpx指的是.scroll-content的高度，调用upx2px方法将rpx单位值转换成px
					// 调用getClientHeight函数：this.getClientHeight()，减去手机状态栏的高度
					// 小米9测试发现不需要调用getClientHeight函数
					this.clientHeight = res.windowHeight - uni.upx2px(80)
				}
			})
		},
		methods: {
			// 页面初始化，发请求获取后端的首页数据
			__init() {
				uni.request({
					url: 'http://192.168.1.3:3000/api/index_list/data',
					method: 'GET',
					success: res => {
						// data指向后端返回的数据
						const data = res.data.data
						this.topBarList = data.topBarList
						this.swiperList = data.data[0].data
						// 调用initData方法，初始化数据
						// console.log(this.initData(data))
						this.newTopBar = this.initData(data)
					},
				});
			},
			// 初始化数据，返回一个数组：用于承载滑块视图的内容数据
			initData(res) {
				// console.log(this.topBarList.length)
				// console.log(res)
				// 声明一个空数组，用于接收后端返回的数据
				const arr = []
				// 遍历顶部tab列表长度，一个tab对应一个滑块视图的内容区域
				for (let i = 0; i < this.topBarList.length; i++) {
					// 声明一个空对象，用于接收后端返回的数据
					const obj = {}
					// 首次获取数据，指的是获取推荐tab的数据
					if (i === 0) {
						// obj空对象添加或挂载data属性，指向res.data
						// res.data用作滑块视图的内容数据
						obj.data = res.data
					}
					// 将获得数据的对象添加到数组末尾
					arr.push(obj)
				}
				return arr
			},
			// 点击切换tab
			changeTab(index) {
				// if判断当前选中tab的索引，是否跟传入的index相等。
				// 如果相等，直接return不执行后面的代码，性能优化
				if (this.topBarIndex === index) return
				// 当前选中tab的索引
				this.topBarIndex = index
				// 当前所在滑块的索引
				// this.current = index
				// 滚动到该子元素，值为某子元素id（id不能以数字开头）
				this.scrolltoIndex = 'top' + index
			},
			// 滑动切换滑块
			handleSwiper(e) {
				// 方法一：在data对象内声明变量current，指向当前所在滑块的索引
				// 当前选中tab的索引
				// this.current = e.detail.current
				// 当前所在滑块的索引
				// this.topBarIndex = e.detail.current
				// 方法二：直接调用changeTab方法，不用在data对象内声明变量current
				// 推荐方法二，因为点击切换tab和滑动切换滑块，对应的索引都是一样的
				this.changeTab(e.detail.current)
			},
			// 获取可视区域的高度（兼容iOS、Android和微信小程序）
			// 修复bug：iOS和Android刘海屏手机，往上滚动会隐藏顶部tab
			getClientHeight() {
				const res = uni.getSystemInfoSync()
				console.log(res, typeof res)
				console.log(res.platform)
				console.log(res.statusBarHeight)
				const {
					platform,
					statusBarHeight
				} = res
				if (platform === 'ios') {
					return 44 + statusBarHeight
				} else if (platform === 'android') {
					return 48 + statusBarHeight
				} else {
					// 除了iOS和Android，比如微信小程序
					// 微信小程序不会隐藏隐藏顶部tab，返回0
					return 0
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.scroll-content {
		height: 80rpx;
		white-space: nowrap;
		// margin-bottom: 10rpx;

		.scroll-item {
			display: inline-block;
			margin: 10rpx;
			padding-bottom: 4rpx;
		}

		.f-active-color {
			border-bottom: 4rpx solid #49BDFB;
		}
	}
</style>
