// bootstrap5
import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

// Swiper
import Swiper from 'swiper/bundle';  // import Swiper bundle with all modules installed
import 'swiper/css/bundle';          // import styles bundle
// init Swiper：宣告一個新的常數Swiper 指定在.swiper下有swiper的效果
// 修正：學習每日任務 Day38-swiper跑馬燈樣式後
const swiper = new Swiper('.swiper', {
  allowTouchMove: false,         // 避免使用者移動到
  slidesPerView: "auto",         // 能呈現幾個.swiper-slide
  speed: 20000,                  // 跑馬燈的速度(毫秒)
  loop: true,                    // 是否重複
  autoplay: {
    delay: 0,                    // 到下一個幻燈片時，停下的時間
    disableOnInteraction: false  // 避免點擊造成跑馬燈失效，視情況增加
  },
});

// GSAP
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


console.log("Hello world!");
