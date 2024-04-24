import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

window.onload = function () {
  gsap.registerPlugin(ScrollTrigger);
  const heroIcon = document.querySelector("._animate-hero-icon");
  const slideUpText = document.querySelectorAll("._animate-text-slide-up");
  const slideInRightDelayed = document.querySelectorAll(".gsap-slide-in-right-delay");
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

  slideInRightDelayed.forEach((item, index) =>
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
      },
      x: 100,
      opacity: 0,
      duration: 1.5,
      delay: 0.25 * index,
      transition: "ease",
      ease: "power.in",
    })
  );
};
