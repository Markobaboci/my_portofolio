import "@hotwired/turbo-rails";
import "bootstrap";
import "controllers";
import "@popperjs/core";
import "particles.js";

document.addEventListener("turbo:load", () => {
  particlesJS.load("particles-js", "/assets/particles.json", function() {
    console.log("Particles.js config loaded!");
  });
});
