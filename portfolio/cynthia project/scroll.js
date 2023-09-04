let main = document.querySelector(".main")
let circle = document.querySelector(".mousecircle")
function mouseMove(Xscale, Yscale) {
    window.addEventListener("mousemove", (details) => {
        circle.style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(${Xscale}, ${Yscale})`
    })
}
mouseMove()
const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
});

function anim() {
    let tl = gsap.timeline();
    tl.from(".nav", {
        y: -20,
        duration: .5,
        ease: Expo.easeInOut,
        opacity: 0
    })
    tl.to(".boundingelem", {
        y: 0,
        duration: 1.4,
        stagger: .5,
    })
    tl.from(".footer", {
        y: -10,
        stagger: .5,
        opacity: 0,
        ease: Expo.easeInOut,
    })
}
anim()

let timeout;

function circleflat() {
    // clearTimeout(timeout)
    let Xscale = 1;
    let Yscale = 1;
    let Xprev = 0;
    let Yprev = 0;
    window.addEventListener("mousemove", (details) => {
        Xscale = gsap.utils.clamp(.8, 1.2, details.clientX - Xprev)
        Yscale = gsap.utils.clamp(.8, 1.2, details.clientY - Yprev)
        Xprev = details.clientX;
        Yprev = details.clientY;
        mouseMove(Xscale, Yscale)
        // timeout= setTimeout(()=>{
        //     circle.style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(1,1)`
        // }, 100)
    })
}
circleflat()