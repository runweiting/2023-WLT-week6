// 預設
import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper：宣告一個新的常數Swiper 指定在.swiper下有swiper的效果
const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    speed: 20000,
    loop: true,
    autoplay: {
        delay: 1, // 過1秒才跑下一個
      },

  });


console.log("Hello world!");