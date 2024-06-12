 export function FadingMessages(containerSelector, messageSelector, repeatAttributeName, repeatSpeedAttributeName, defaultRepeatSpeed) {
    const fadingMessagesContainer = document.querySelector(containerSelector);
    const fadingMessages = fadingMessagesContainer.querySelectorAll(messageSelector);
    const repeatFade = fadingMessagesContainer.getAttribute(repeatAttributeName) === 'true';
    const repeatSpeed = parseInt(fadingMessagesContainer.getAttribute(repeatSpeedAttributeName)) || defaultRepeatSpeed;
    let currentIndex = 0;

    function showNextMessage() {
        if (currentIndex < fadingMessages.length) {
            if (currentIndex > 0) {
                fadingMessages[currentIndex - 1].classList.remove('active');
            }
            fadingMessages[currentIndex].classList.add('active');
            currentIndex++;
            setTimeout(showNextMessage, 6000);
        } else if (repeatFade) {
            fadingMessages[currentIndex - 1].classList.remove('active');
            currentIndex = 0;
            setTimeout(showNextMessage, repeatSpeed);
        } else {
            fadingMessages[currentIndex - 1].classList.remove('active');
        }
    }

    if (fadingMessages.length > 0) {
        setTimeout(showNextMessage, 600);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    FadingMessages('.fading-messages-container', '.fading-message', 'fade-repeat', 'repeat-speed', 1000);
});


