
function animation() {
  var controller = new ScrollMagic.Controller();

  const t1 = gsap.timeline({ defaults: { ease: Expo.InOut } });

  t1.fromTo(
    ".header1",
    2,
    { y: -200, opacity: 0 },
    { y: 0, opacity: 1, scale: 1.5 , textDecoration:"underline" },
    
  );
  t1.fromTo(
    ".img1",
    2,
    {  opacity: 0 },
    {  opacity: 1 }
  );
  t1.fromTo(".info1", 1.5, {x:-1000 }, { x:0, scale:1.2 }, "-=2");


  const t2 = gsap.timeline({ defaults: { ease: Expo.InOut } });

  t2.fromTo(".header2", 2, { x: "-1000", opacity: 0 }, { x: 0, opacity: 1 });
  t2.fromTo(".img2", 0.5, { opacity:0 }, { opacity:1 });
  t2.fromTo(".info2", 1,{x:"+1000"} , {x:0})

  new ScrollMagic.Scene({
    triggerElement: ".page2",
    triggerHook: 0.5,
    reverse: false,
  })
    .setTween(t2)
    .addTo(controller);

}

animation();