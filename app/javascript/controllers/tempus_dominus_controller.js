import { Controller } from "@hotwired/stimulus";
import { TempusDominus, DateTime } from "@eonasdan/tempus-dominus";

export default class extends Controller {
  static values = { disabledSlots: Array }

  connect() {
    const disabledRanges = this.disabledSlotsValue.map(({ from, to }) => ({
      from: new DateTime(from),
      to:   new DateTime(to)
    }));

    console.log("TD disabled ranges:", disabledRanges);

    this.picker = new TempusDominus(this.element, {
      useCurrent: false,
      display: {
        components: { calendar: true, clock: true, hours: true, minutes: true }
      },
      restrictions: {
        disabledTimeIntervals: disabledRanges
      },
      localization: { format: "yyyy-MM-dd HH:mm" }
    });
  }
}
