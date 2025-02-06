require("@hotwired/turbo-rails");
require("bootstrap");
require("controllers");
require("@popperjs/core");
require("particles.js");
require("controllers/typewriter_controller");

document.addEventListener("turbo:load", () => {
  particlesJS.load("particles-js", "/assets/particles.json", function() {
    console.log("Particles.js config loaded!");
  });
});
