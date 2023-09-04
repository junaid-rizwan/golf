gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1

    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        Trigger:"#main",
        scroller:"body",
        start:" top -25%",
        end:"top -70%",
        scrub:2

    }

})

var cursor=document.querySelector("#cursor");
document.addEventListener("mousemove",function(dets){
    cursor.style.left=dets.x+30+"px";
    cursor.style.top=dets.y+30+"px";

})

var h4=document.querySelectorAll("#nav h4");
h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cursor.style.scale=3;
        cursor.style.border="0.5px solid #fff";
        cursor.style.backgroundColor="transparent";
    })
    /elem.addEventListener("mouseleave",function(){
        cursor.style.scale=1;
        // cursor.style.border="0.5px solid #fff";
        cursor.style.backgroundColor="yellowgreen";
    })
     
})
gsap.from("#about-us img,#about",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",end:"top 58%",
        scrub:3
    }
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 45%",
        scrub:4
    }
})
