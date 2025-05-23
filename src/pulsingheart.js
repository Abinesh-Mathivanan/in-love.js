export function pulsingHeartAnimation(elementId, startDelay = 1000, stopDelay = 5000) {
    const heart = document.getElementById(elementId);

    function startPulse() {
        heart.classList.add('pulse');
    }

    function stopPulse() {
        heart.classList.remove('pulse');
    }

    setTimeout(startPulse, startDelay);
    setTimeout(stopPulse, stopDelay);
}

document.addEventListener('DOMContentLoaded', () => {
    pulsingHeartAnimation('pulsingheart');
});
