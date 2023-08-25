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

// 加入 window.gsap = gsap; 設為全域物件下的屬性，讓非模塊的 js 檔案可以透過全域取得 gsap 這個物件
window.gsap = gsap;

const g_logo = document.querySelector(".g_logo");
const g_searchbar = document.querySelector(".g_searchbar");
const g_btnmenu = document.querySelector(".g_btnmenu");
const g_categoryGroup = document.querySelector(".g_categoryGroup");
const g_h6 = document.querySelector(".g_h6");
let tl = gsap.timeline(); //create the timeline

// header
gsap.to(g_logo,{
  duration: 1.5,
  rotation: 360,
  repeat: -1,
  ease: "strong.inOut"
})

tl.to(g_searchbar, {
  duration: 0.1,
  delay: 2,
  x:"+=20",
  yoyo: true,
  repeat: 5
}); 

tl.to(g_searchbar, {
  duration: 0.1,
  delay: 2,
  x:"-=20",
  yoyo: true,
  repeat: 5
}); 

gsap.from(g_btnmenu,{
  duration: 1.5,
  delay: 3,
  x: -200,
  ease: "circ.inOut"
})

gsap.set(g_categoryGroup,{
   opacity: 0 
  })
gsap.to(g_categoryGroup,{
  opacity: 1,
  duration: 1.5,
  scrollTrigger: {
    trigger: g_h6,
    markers: true,
    start: "top 70%",
    end: "bottom 30%",
  }
})














console.log("Hello world!");
