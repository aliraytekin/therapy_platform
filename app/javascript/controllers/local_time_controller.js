import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="local-time"
export default class extends Controller {
  static values = {
    start: String,
    end: String
  }

  connect() {
    const start = new Date(this.startValue)
    const end   = new Date(this.endValue)

    const dateOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }

    const timeOptions = { hour: '2-digit', minute: '2-digit' }

    this.element.innerHTML =
      `${start.toLocaleString([], dateOptions)} → ${end.toLocaleTimeString([], timeOptions)}`
  }
}
