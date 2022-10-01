var express = require('express');

var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Express'
	});
});
// 测试本地后端接口
router.get('/api/index_list/data', (req, res, next) => {
	res.send({
		code: 0,
		data: {
			// 首页顶部tab列表
			topBarList: [{
					id: 1,
					name: '推荐'
				},
				{
					id: 2,
					name: '运动户外'
				},
				{
					id: 3,
					name: '服饰内衣'
				},
				{
					id: 4,
					name: '鞋靴箱包'
				},
				{
					id: 5,
					name: '美妆个护'
				},
				{
					id: 6,
					name: '手机数码'
				},
				{
					id: 7,
					name: '食品母婴'
				},
			],
			// 用作滑块视图的内容数据
			data: [{
					type: 'swiperList',
					data: [{
							imgUrl: '../../static/img/swiper1.jpg'
						},
						{
							imgUrl: '../../static/img/swiper2.jpg'
						},
						{
							imgUrl: '../../static/img/swiper3.jpg'
						}
					]
				},
				{
					type: 'recommendList',
					data: [{
							bigUrl: '../../static/img/Furnishing.jpg',
							data: [{
									imgUrl: '../../static/img/Furnishing1.jpg'
								},
								{
									imgUrl: '../../static/img/Furnishing2.jpg'
								},
								{
									imgUrl: '../../static/img/Furnishing3.jpg'
								}
							]
						},
						{
							bigUrl: '../../static/img/Children.jpg',
							data: [{
									imgUrl: '../../static/img/Children1.jpg'
								},
								{
									imgUrl: '../../static/img/Children2.jpg'
								},
								{
									imgUrl: '../../static/img/Children3.jpg'
								}
							]
						}
					]
				},
				{
					type: 'commodityList',
					data: [{
							id: 1,
							imgUrl: '../../static/img/commodity1.jpg',
							name: '2022年潮流新款衣服，卫衣时尚男女，爆款G9527',
							cprice: 666,
							oprice: 999,
							discount: 1.8
						},
						{
							id: 2,
							imgUrl: '../../static/img/commodity2.jpg',
							name: '2022年潮流新款衣服，卫衣时尚男女，爆款G9527',
							cprice: 666,
							oprice: 999,
							discount: 1.8
						},
						{
							id: 3,
							imgUrl: '../../static/img/commodity3.jpg',
							name: '2022年潮流新款衣服，卫衣时尚男女，爆款G9527',
							cprice: 666,
							oprice: 999,
							discount: 1.8
						},
						{
							id: 4,
							imgUrl: '../../static/img/commodity4.jpg',
							name: '2022年潮流新款衣服，卫衣时尚男女，爆款G9527',
							cprice: 666,
							oprice: 999,
							discount: 1.8
						}
					]
				}
			]
		}
	})
})
module.exports = router;
