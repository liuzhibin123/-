var $ = require("swiper");
var self = document.querySelector(".self")
var swiper = new Swiper('.swiper-container', {
	pagination: '.swiper-pagination',
	direction: 'vertical',
	slidesPerView: 1,
	paginationClickable: true,
	spaceBetween: 30,
	mousewheelControl: true,
	onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
		swiperAnimateCache(swiper); //隐藏动画元素 
		swiperAnimate(swiper); //初始化完成开始动画
	},
	onSlideChangeEnd: function(swiper) {
		swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画				
		var btn = document.querySelector(".btn2")
		var slide = document.querySelectorAll(".swiper-slide")
		if (swiper.activeIndex == slide.length - 1) {
			btn.style.display = "none";
		} else {
			btn.style.display = "block";
		}
	}

});