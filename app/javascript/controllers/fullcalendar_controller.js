import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.calendar = new FullCalendar.Calendar(this.element, {
      initialView: "timeGridWeek",
      selectable: true,
      editable: true,
      events: "/availabilities.json",
      select: this.createAvailability.bind(this),
      eventClick: this.deleteAvailability.bind(this)
    })
    this.calendar.render()
  }

  disconnect() {
    this.calendar?.destroy()
  }

  async createAvailability(info) {
  console.log("Creating availability with:", info)

  const payload = {
    availability: {
      start_time: info.startStr,
      end_time: info.endStr
    }
  }

  console.log("Payload being sent:", payload)

  const response = await fetch("/availabilities", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": document.querySelector("meta[name=csrf-token]").content
    },
    body: JSON.stringify(payload)
  })

  console.log("Response status:", response.status)

  if (response.ok) {
    const data = await response.json()
    console.log("Saved availability:", data)
    this.calendar.refetchEvents()
  } else {
    const errorText = await response.text()
    console.error("Failed to save availability:", errorText)
    alert("Failed to save availability")
  }
}


  async deleteAvailability(clickInfo) {
    if (!confirm("Delete this availability?")) return

    const id = clickInfo.event.id
    const response = await fetch(`/availabilities/${id}`, {
      method: "DELETE",
      headers: {
        "X-CSRF-Token": document.querySelector("meta[name=csrf-token]").content
      }
    })

    if (response.ok) {
      clickInfo.event.remove()
    } else {
      alert("Failed to delete availability")
    }
  }
}
