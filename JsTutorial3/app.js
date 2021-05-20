function animation() {
    var controller = new ScrollMagic.Controller();
  
    const t1 = gsap.timeline({ defaults: { ease: Expo.InOut } });
  
    t1.fromTo(
      ".navbar h1",
      2,
      { y: -200, opacity: 0 },
      { y: 0, opacity: 1, scale:(1.5)},
      
    );
    t1.fromTo(
      ".info1 img",
      2,
      { x:+200 ,opacity: 0,},
      { x:0, opacity: 1 } ,
    );
    t1.fromTo(".info1 p", 2, {x:-1100 }, { x:0, }, "-=2");

  
    const t2 = gsap.timeline({ defaults: { ease: Expo.InOut } });
  
    t2.fromTo(".info2 img", 2, { x: "-1000", opacity: 0 }, { x: 0, opacity: 1 });
    t2.fromTo(".info2 p", 2, { x:"+1000",opacity:0 }, { x:0,opacity:1 }, "-=2");
  
    new ScrollMagic.Scene({
      triggerElement: ".info2",
      triggerHook: 0.6,
      reverse: false,
    })
      .setTween(t2)
      .addTo(controller);
  
  }
  
  animation();