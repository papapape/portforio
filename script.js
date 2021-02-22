$(function(){
gsap.to(".enji1",{
  delay:0.5,
  left:"-110%",
  duration:1.5,
  ease:"expo.inOut"
});
gsap.to(".enji2",{
  delay:0.6,
  left:"-110%",
  duration:1.4,
  ease:"expo.inOut"
});
gsap.to(".enji3",{
  delay:0.7,
  left:"-110%",
  duration:1.3,
  ease:"expo.inOut"
});

  $('.typed').typed({
strings:["Thank you for coming my portfolio","Let's scroll down"],
typespeed: 100,
startDelay:1000,
backspeed: 20,
loop: true,
loopCount: 3,
showCursor: false,
backDelay: 500,
});
});



