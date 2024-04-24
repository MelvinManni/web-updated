import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

window.onload = function () {
  gsap.registerPlugin(ScrollTrigger);
  const heroIcon = document.querySelector("._animate-hero-icon");
  const slideUpText = document.querySelectorAll("._animate-text-slide-up");
  const bounceInItems = document.querySelectorAll(".gsap-bounce-in");
  const slideInLeft = document.querySelectorAll(".gsap-slide-in-left");
  const slideInRight = document.querySelectorAll(".gsap-slide-in-right");
  const fadeIn = document.querySelectorAll(".gsap-fade-in");
  if (heroIcon) {
    gsap.from(heroIcon, {
      scrollTrigger: {
        trigger: heroIcon,
      },
      y: -25,
      opacity: 0,
      duration: 1,
      ease: "power.in",
    });
  }

  if (slideUpText) {
    slideUpText.forEach((e) =>
      gsap.from(e, {
        scrollTrigger: {
          trigger: e,
        },
        y: 10,
        opacity: 0,
        delay: 0.5,
        duration: 1,
        transition: "ease",
        ease: "power.in",
      })
    );
  }

  fadeIn.forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
      },
      opacity: 0,
      delay: 0.15 * index,
      duration: 1,
      transition: "ease",
      ease: "power.in",
    });
  });

  slideInRight.forEach((item) =>
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
      },
      x: 45,
      opacity: 0,
      duration: 1,
      transition: "ease",
      ease: "power.in",
    })
  );

  slideInLeft.forEach((item) =>
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
      },
      x: -45,
      opacity: 0,
      duration: 1,
      transition: "ease",
      ease: "power.in",
    })
  );


  bounceInItems.forEach((item) => animateInBounce(item));

  function animateInBounce(element: Element) {
    gsap.set(element, { y: "100%", opacity: 0 }); // Initial position and opacity

    // ScrollTrigger for triggering animation when element is visible
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      once: true, // Adjust as needed
      onEnter: () => {
        gsap.to(element, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          onComplete: () => {
            // Bounce animation
            gsap.to(element, {
              y: "-=20px",
              yoyo: true,
              repeat: 2,
              duration: 0.5,
              ease: "power2.inOut",
            });
          },
        });
      },
      // onEnterBack: () => {
      //   gsap.to(element, {
      //     y: "100%",
      //     opacity: 0,
      //     duration: 1,
      //     ease: "power3.in",
      //   });
      // },
    });
  }
};
