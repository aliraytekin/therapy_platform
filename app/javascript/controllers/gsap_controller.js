import { Controller } from "@hotwired/stimulus"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default class extends Controller {
  static targets = ["slides"]

  connect() {
    const contents = gsap.utils.toArray(".content")
    const container = document.querySelector("#therapy_type")

    gsap.to(this.slidesTarget, {
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
  }
}
