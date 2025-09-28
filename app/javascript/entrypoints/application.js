// To see this message, add the following to the `<head>` section in your
// views/layouts/application.html.erb
//
//    <%= vite_client_tag %>
//    <%= vite_javascript_tag 'application' %>

// If using a TypeScript entrypoint file:
//     <%= vite_typescript_tag 'application' %>
//
// If you want to use .jsx or .tsx, add the extension:
//     <%= vite_javascript_tag 'application.jsx' %>


import { Application } from "@hotwired/stimulus"

import GsapController       from "../controllers/gsap_controller"
// import AutosubmitController from "../controllers/autosubmit_controller"
import FlatpickrController  from "../controllers/flatpickr_controller"
import LocalTimeController  from "../controllers/local_time_controller"
import FullcalendarController from "../controllers/fullcalendar_controller"
import "../bubbles"
import "../transitions"

const application = Application.start()

application.register("gsap", GsapController)
// application.register("autosubmit", AutosubmitController)
application.register("flatpickr", FlatpickrController)
application.register("local-time", LocalTimeController)
application.register("fullcalendar", FullcalendarController)
application.register("bubbles", BubblesController)

window.Stimulus = application
