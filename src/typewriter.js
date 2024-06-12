export function typewriterAnimation(elementId, callback = null) {
    class Typewriter {
        constructor(element, callback = null) {
            this.element = element;
            this.text = element.getAttribute('love-text') === 'true' ? element.innerText || element.textContent : '';
            this.speed = parseInt(element.getAttribute('text-speed')) || 100;
            this.fontFamily = element.getAttribute('text-font-family') || 'Courier New';
            this.fontSize = element.getAttribute('text-font-size') || '16px';
            this.color = element.getAttribute('text-color') || '#000000';
            this.callback = callback;
            this.index = 0;
            this.setupElement();
            this.type();
        }

        setupElement() {
            this.element.innerHTML = '';
            this.element.style.fontFamily = this.fontFamily;
            this.element.style.fontSize = this.fontSize;
            this.element.style.color = this.color;
        }

        type() {
            if (this.index < this.text.length) {
                this.element.innerHTML += this.text.charAt(this.index);
                this.index++;
                setTimeout(() => this.type(), this.speed);
            } else {
                if (this.callback) this.callback();
            }
        }
    }

    function initializeTypewriter(elementId, callback = null) {
        const element = document.getElementById(elementId);
        if (element) {
            new Typewriter(element, callback);
        } else {
            console.error(`Element with id "${elementId}" not found.`);
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        initializeTypewriter(elementId, callback);
    });
}

// Example usage
typewriterAnimation('typewriter', () => console.log('Typing animation completed!'));
