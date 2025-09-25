import { Controller } from "@hotwired/stimulus"
import gsap from "gsap"

// Connects to data-controller="gsap"
export default class extends Controller {
  connect() {
    gsap.to(this.element.querySelector(".wave1"), {
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      attr: { d: "M0,140Q360,200 720,140T1440,140L1440,320L0,320Z" }
    })

    gsap.to(this.element.querySelector(".wave2"), {
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      attr: {
        d: "M0,180Q360,240 720,180T1440,180L1440,320L0,320Z"
      }
    })

    gsap.to(this.element.querySelector(".wave3"), {
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      attr: {
        d: "M0,200Q360,260 720,200T1440,200L1440,320L0,320Z"
      }
    })
  }
}
