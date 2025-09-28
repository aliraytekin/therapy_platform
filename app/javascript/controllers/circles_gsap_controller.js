import { Controller } from "@hotwired/stimulus"
import gsap from "gsap"


// Connects to data-controller="circles-gsap"
export default class extends Controller {
  connect() {
    console.log("conncet")

    const circles = gsap.utils.toArray(".circle")

    this.animations = []

    circles.forEach((circle) => {
      const anim = gsap.to(circle, {
        y: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 1.5 + Math.random()
      })

      this.animations.push({ element: circle, anim })
    })
  }

  onHover(event) {
    const circle = event.currentTarget
    const animObj = this.animations.find(a => a.element === circle)
    animObj?.anim.pause()

    gsap.to(circle, { scale: 1.2, duration: 0.3, ease: "elastic.out(1,0.4)" })
    this.element.style.backgroundColor = circle.dataset.color
  }

  onLeave(event) {
    const circle = event.currentTarget
    const animObj = this.animations.find(a => a.element === circle)
    animObj?.anim.resume()

    gsap.to(circle, { scale: 1, duration: 0.3, ease: "power1.out" })
    this.element.style.backgroundColor = ""
  }
}
