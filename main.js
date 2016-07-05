//指明需要打包的的css文件

require("./css/index.css");
require("./css/swiper.min.css");
require("./css/animate.min.css");

//npm install exports-loader --save -dev
// exports? 需要用到的变量或方法名；
swiperAnimateCache=require("exports?swiperAnimateCache!./js/swiper.animate1.0.2.min.js");
swiperAnimate=require("exports?swiperAnimate!./js/swiper.animate1.0.2.min.js");
require("./js/index.js");