// GSAP 效果
const logo = document.querySelector(".logo");
const h5 = document.queryselector("h5");

gsap.registerPlugin(ScrollTrigger);

gsap.to(logo,{
    duration: 1.5,
    rotation: 360,
    repeat: -1,
    ease: "strong.inOut"
})

gsap.form(h5,{
    opacity: 0,
    x: 50,
    duration: 0.5,
    ScrollTrigger: h5
})



