import { Controller } from "@hotwired/stimulus";
import flatpickr from "flatpickr";

// Connects to data-controller="datepickr"
export default class extends Controller {
  static values = { disabled: Array }

  connect() {
    flatpickr(this.element, {
      enableTime: true,
      minDate: "today",
      dateFormat: "Y-m-d H:i",
      time_24hr: true,
      disable: this.disabledValue
    });
  }
}
