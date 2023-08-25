const logo = document.querySelector(".logo");
const h5 = document.queryselector("h5");

gsap.to(logo,{
  duration: 1.5,
  rotation: 360,
  repeat: -1,
  ease: "strong.inOut"
})