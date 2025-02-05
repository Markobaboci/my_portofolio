require("@hotwired/turbo-rails");
import "bootstrap";
import "controllers";
import "@popperjs/core";
import "particles.js";
import "controllers/typewriter_controller";

document.addEventListener("turbo:load", () => {
  particlesJS.load("particles-js", "/assets/particles.json", function() {
    console.log("Particles.js config loaded!");
  });
});
