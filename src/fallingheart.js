export function startFallingHearts() {
    const heartEmojiMap = {
        red: '❤️',
        pink: '💗',
        purple: '💜',
        orange: '🧡',
        yellow: '💛',
        black: '🖤',
        white: '🤍',
        blue: '💙',
        green: '💚'
    };

    function createHeart() {
        const container = document.getElementById('fallinghearts');
        if (!container) {
            return;
        }

        const heartColor = container.getAttribute('heart-color');
        const heartEmoji = heartEmojiMap[heartColor] || '❤️';

        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerText = heartEmoji;

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    if (document.getElementById('fallinghearts')) {
        setInterval(createHeart, 300);
    }
}

// Start the falling hearts animation
startFallingHearts();
