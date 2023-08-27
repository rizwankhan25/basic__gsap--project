var tl = gsap.timeline();
tl.from("#nav", {
    opacity: 0,
    duration: 1,
    delay: .9
})
tl.from("#nav #h1, #nav h3, #nav h1", {
    y: -80,
    duration: .5,
    opacity: 0,
    delay: -1,
    stagger: .6
})
tl.from("#left h1", {
    x: -500,
    opacity: 0,
    duration: .9,
})
tl.from("#right img", {
    scale: .5,
    opacity:0,
    opacity: 0
})
gsap.from("#page2 .box", {
    scale:0,
    opacity:.5,
    duration: 2,
    // stagger: .3,
    scrollTrigger:{
        trigger: "#page2 .box",
        scroller: "body",
        // markers: true,
        start: "top 95%",
        end: "top 50%",
        scrub:2,
    }
})
