
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

// function to stop scrolling when the page is loading
function stopScroll() {
    document.body.style.overflow = 'hidden';
}

// function to start scrolling when the page is loaded
function startScroll() {
    document.body.style.overflow = 'visible';
}

//function to animate the elements while loading the page 
function animations() {
    stopScroll();       // stop scrolling when the page is loading by calling the stopScroll function
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
    onComplete: startScroll,        //calls the startScroll function to start scrolling
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