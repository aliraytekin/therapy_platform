import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", "section"]

  connect() {
    this.toggle()
  }

  toggle() {
    const empty = this.inputTarget.value.trim().length === 0
    this.sectionTarget.classList.toggle("hidden", !empty)
  }
}
