import { Controller } from "@hotwired/stimulus";
import flatpickr from "flatpickr";

export default class extends Controller {
  static values = { disabled: Array }

  connect() {
    console.log("disabled", this.disabledValue)
    flatpickr(this.element, {
      enableTime: true,
      minDate: "today",
      dateFormat: "Y-m-d H:i",
      time_24hr: false,
    });
  }
}
