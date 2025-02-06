# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin "bootstrap", to: "https://ga.jspm.io/npm:bootstrap@5.2.3/dist/js/bootstrap.esm.js"
pin "@popperjs/core", to: "https://ga.jspm.io/npm:@popperjs/core@2.11.6/lib/index.js"
pin "particles.js", to: "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
pin_all_from "app/javascript/controllers", under: "controllers"
# Explicitly pin the typewriter controller
pin "controllers/typewriter_controller", preload: true
