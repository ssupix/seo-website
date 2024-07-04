// RUNNING TEXT LINE
// animates elements with the class .running ul li
gsap.to(".running-line ul li", {
    // set the animation duration to 6 seconds
    duration: 4,
    // moves the elements horizontally by -102%
    x: "-105%",
    // linear easing
    ease: "linear",
    // makes the animation repeat infinitely
    repeat: -1
});

gsap.registerPlugin(ScrollTrigger)

ScrollTrigger.create({
	trigger:"section.hero",
	start:"top top",
	end:"bottom bottom",
	pin:".hero-banner"
})

ScrollTrigger.create({
	trigger:"fold-2",
	start:"top top",
	end:"bottom bottom",
	pin:".football"
})