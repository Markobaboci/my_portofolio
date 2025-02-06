import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = {
    texts: { type: Array, default: [] }
  };

  connect() {
    console.log("Typewriter controller connected");
    console.log("Texts:", this.textsValue);

    if (!this.hasTextsValue || this.textsValue.length === 0) {
      console.error("No texts provided for typewriter effect");
      return;
    }

    this.index = 0;
    this.charIndex = 0;
    this.isDeleting = false;

    // Ensure we're starting with a clean slate
    if (this.element) {
      this.element.textContent = "";
      this.type();
    }
  }

  type() {
    try {
      const currentText = this.textsValue[this.index];
      if (!currentText) {
        console.error("Invalid text at index", this.index);
        return;
      }

      const visibleText = currentText.substring(0, this.charIndex);

      if (this.element) {
        this.element.textContent = visibleText;

        if (this.charIndex === currentText.length) {
          return;
        } else {
          this.charIndex += 1;
          requestAnimationFrame(() => setTimeout(() => this.type(), 100));
        }
      }
    } catch (error) {
      console.error("Typewriter error:", error);
    }
  }
}
