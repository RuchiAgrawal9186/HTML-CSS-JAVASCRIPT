let rect = document.querySelector("#center")

rect.addEventListener("mousemove",(details)=>{
    let reactLocation = rect.getBoundingClientRect() 
    let insideRectVal = details.clientX - reactLocation.left  // find location of that reactngle


    if(insideRectVal < reactLocation.width/2)
    {
        let redcolor = gsap.utils.mapRange(0,reactLocation.width/2,255,0,insideRectVal)
        gsap.to(rect,{
            backgroundColor:`rgb(${redcolor},0,0)`,
            ease:Power4,
        })
    }
    else
    {
        let bluecolor = gsap.utils.mapRange(reactLocation.width/2,reactLocation.width,255,0,insideRectVal)
        gsap.to(rect,{
            backgroundColor:`rgb(,0,0,${bluecolor})`,
            ease:Power4,
        })
    }

})

rect.addEventListener("mouseleave",()=>{
    gsap.to(rect,{
        backgroundColor:`white`,
    })
})

