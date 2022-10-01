<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url('./common/uni.css');
	@import url('./common/iconfont.css');
	@import url("./common/common.css");

	/* App.vue 增加如下样式可以去除 scroll-view 组件的滚动条（不支持nvue页面） */
	::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}
</style>
