import { Controller } from "@hotwired/stimulus"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default class extends Controller {
  connect() {
    const slides = document.querySelector(".slides")
    const contents = gsap.utils.toArray(".content")
    const container = document.querySelector("#therapy_type")

    const mainAnim = gsap.to(slides, {
      xPercent: -100 * (contents.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".pin-spacer",
        pin: ".pin-spacer",
        pinSpacing: false,
        scrub: 1,
        end: () => "+=" + container.offsetWidth,
      }
    })

    contents.forEach(content => {
      const img = content.querySelector(".content-right")

      gsap.fromTo(img,
        { filter: "blur(8px)", opacity: 0.6 },
        {
          filter: "blur(0px)",
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: content,
            containerAnimation: mainAnim,
            start: "30% center",
            horizontal: true,
            toggleActions: "play reverse play reverse"
          }
        })
    })

    contents.forEach(content => {
      const img = content.querySelector(".content-right")

      gsap.to(img, {
        scale: 1.02,
        duration: 2,
        yoyo: true,
        repeat: 1,
        ease: "sine.inOut",
        paused: true,
        scrollTrigger: {
          trigger: content,
          containerAnimation: mainAnim,
          start: "30% center",
          toggleActions: "play none none reverse"
        }
      })
    })

    contents.forEach((content, i) => {
      if (i === 0) return;

      const text = content.querySelector(".content-left")

      gsap.from(text, {
        x: -50,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: content,
          containerAnimation: mainAnim,
          start: "left 60%",
          toggleActions: "play none none reverse"
        }
      });
    })
  }
}
