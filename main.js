
// function to show the side menu
function showSideMenu() {
    var sideMenu = document.querySelector('.side-menu');
    sideMenu.style.display = 'flex';
}

// function to hide the side menu
function hideMenu() {
    var sideMenu = document.querySelector('.side-menu');
    sideMenu.style.display = 'none';
}


//function to animate the elements while loading the page 
function animations() {
    const tl = gsap.timeline()

tl.to(".inner", {
    y: "-100%",
    duration: 1,
    delay: 1,
    ease: "circ.easeInOut",
})

tl.to("#loader",{
    height: 0,
    duration: 0.5,
    ease: "circ.easeInOut",
})

tl.from(".topBottom", {
    y: -30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
    ease: "circ.easeInOut",
})

tl.from(".bottomTop", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
    ease: "circ.easeInOut",
})
}

animations()