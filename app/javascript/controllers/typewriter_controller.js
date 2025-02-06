import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = { texts: Array };

  connect() {
    if (!this.textsValue || this.textsValue.length === 0) {
      console.error("No texts provided for typewriter effect");
      return;
    }

    this.index = 0;
    this.charIndex = 0;
    this.isDeleting = false;

    this.type();
  }

  type() {
    const currentText = this.textsValue[this.index];
    const visibleText = currentText.substring(0, this.charIndex);

    this.element.textContent = visibleText;

    if (this.charIndex === currentText.length) {
      // Stop typing once the full text is typed
      return;
    } else {
      this.charIndex += 1; // Increment charIndex to type the next character
      setTimeout(() => this.type(), 100); // Adjust typing speed as needed
    }
  }
}
