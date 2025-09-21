import { Controller } from "@hotwired/stimulus";
import { TempusDominus } from "@eonasdan/tempus-dominus";

export default class extends Controller {
  static values = { disabledHours: Array }

  connect() {
    new TempusDominus(this.element, {
      useCurrent: false,
      display: {
        components: {
          calendar: true,
          clock: true,
          hours: true,
          minutes: true,
        }
      },
      restrictions: {
        disabledHours: this.disabledHoursValue
      },
      localization: {
        format: 'yyyy-MM-dd HH:mm'
      }
    });
  }
}
