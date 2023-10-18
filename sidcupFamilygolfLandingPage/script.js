gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start:"top -9%",
        end:"top -10%",
        scrub:1
    }

})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -30%",
        end:"top -90%",
        scrub:2
    }
})

