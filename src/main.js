// Images stuck Annimation

//   let tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".lfttop3",
//       pin: true,
//       start: "35% 50%",
//       markers: false,
//       end: "85% 50%",
//       scrub: 1,
//     },
//   });

// gsap.registerPlugin(ScrollTrigger);

let lenis;

if (window.innerWidth > 768) {
  // Only enable on desktop
  lenis = new Lenis({
    duration: 1.2,
    smooth: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
