# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin "flatpickr" # @4.6.13
pin "@eonasdan/tempus-dominus", to: "@eonasdan--tempus-dominus.js" # @6.10.4
pin "@popperjs/core", to: "@popperjs--core.js" # @2.11.8
pin "bubbles", to: "bubbles.js"
