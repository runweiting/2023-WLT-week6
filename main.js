// bootstrap5
import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper：宣告一個新的常數Swiper 指定在.swiper下有swiper的效果
// 修正：學習每日任務 Day38-swiper跑馬燈樣式後
const swiper = new Swiper('.swiper', {
  
    //避免使用者移動到
    allowTouchMove: false,
    
    //能呈現幾個.swiper-slide
    slidesPerView: "auto",
      
    //跑馬燈的速度(毫秒)
    speed: 20000,
    
    //是否重複
    loop: true,
    
    autoplay: {

    //到下一個幻燈片時，停下的時間
    delay: 0,    
    //避免點擊造成跑馬燈失效，視情況增加
    disableOnInteraction: false

    },
  });

// 每個有 .needs-validation 的 <form> 元素，觸發 submit 事件時，將該元素加入 class 'was-validated'
$('.needs-validation').each(function(index) {
  $(this).on('submit', function(e) {
    e.preventDefault();
    $(this).addClass('was-validated');
  });
});


console.log("Hello world!");