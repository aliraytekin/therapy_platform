import { Controller } from "@hotwired/stimulus"
import Litepicker from "litepicker"
import dayjs from "dayjs"

// Connects to data-controller="datetime-picker"
export default class extends Controller {
  static values = { disabled: Array }

  connect() {
    console.log("Disabled slots (raw):", this.disabledValue)

    const disabledRanges = this.disabledValue.map(({ from, to }) => [
      dayjs(from).toDate(),
      dayjs(to).toDate()
    ])

    this.picker = new Litepicker({
      element: this.element,
      singleMode: true,
      allowRepick: true,
      format: "YYYY-MM-DD HH:mm",
      autoApply: true,
      showTime: true,
      time24hr: true,
      disableDates: disabledRanges
    })
  }
}
