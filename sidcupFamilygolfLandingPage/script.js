let crsr = document.querySelector("#curser")
let blur = document.querySelector("#curser-blur")

document.addEventListener("mousemove",(dets)=>{
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    blur.style.left=dets.x - 200 +"px"
    blur.style.top=dets.y - 200 +"px"
})



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
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

