import { Controller } from "@hotwired/stimulus";
import flatpickr from "flatpickr";

export default class extends Controller {
  static values = { enabled: Array }

  connect() {
    flatpickr(this.element, {
      enableTime: true,
      minDate: "today",
      dateFormat: "Y-m-d H:i",
      enable: this.enabledValue
    });
  }
}
