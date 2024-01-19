function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    bubble.style.left = Math.random() * 100 + "vw";
    bubble.style.animationDuration = Math.random() * 2 + 3 + 's';

    bubble.innerHTML = "🔵";
    document.body.appendChild(bubble);
    setTimeout(() => {
        bubble.remove();
    }, 5000);
}
setInterval(createBubble, 500);