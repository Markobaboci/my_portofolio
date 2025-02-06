import "@hotwired/turbo-rails"
import "bootstrap"
import "@popperjs/core"
import "particles.js"
import "controllers"
import "controllers/typewriter_controller"

document.addEventListener("turbo:load", () => {
  try {
    particlesJS.load("particles-js", "/assets/particles.json", function() {
      console.log("Particles.js config loaded!");
    });
  } catch (error) {
    console.error("Error loading particles.js:", error);
  }
});
