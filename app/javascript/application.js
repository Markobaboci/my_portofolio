// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "bootstrap"

import "@popperjs/core"

import "particles.js";

document.addEventListener("turbo:load", () => {
  particlesJS.load("particles-js", "/assets/particles.json", function() {
    console.log("Particles.js config loaded!");
  });
});
