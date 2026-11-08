
document.addEventListener("DOMContentLoaded", () => {

    // 1. TYPING ANIMATION

    const typedMessage = document.getElementById("typed-message");
    const birthdayText = "HAPPY BDAY, SAMYAM!";

    let letterIndex = 0;

    function typeBirthdayMessage() {
        if (!typedMessage || letterIndex >= birthdayText.length) return;

        typedMessage.textContent += birthdayText.charAt(letterIndex);
        letterIndex++;

        setTimeout(typeBirthdayMessage, 95);
    }

    setTimeout(typeBirthdayMessage, 700);


    // 2. HIDDEN BIRTHDAY MESSAGE

    const reminderButton = document.getElementById("reminder-button");
    const reminderMessage = document.getElementById("reminder-message");

    reminderButton?.addEventListener("click", () => {

        const isVisible = reminderMessage.classList.toggle("show");

        reminderButton.innerHTML = isVisible
            ? 'A reminder for you <span>↗</span>'
            : 'One little reminder <span>↗</span>';

    });


    // 3. TWO-STOREY CAKE ANIMATION

    const cake = document.getElementById("birthday-cake");
    const cakeButton = document.getElementById("cake-button");
    const cakeCaption = document.getElementById("cake-caption");

    let cakeBuilt = false;

    cakeButton?.addEventListener("click", () => {

        if (cakeBuilt) {
            cake.classList.remove("building");

            // Restart the animation
            void cake.offsetWidth;
        }

        cakeBuilt = true;

        cake.classList.add("building");

        cakeButton.textContent = "Build it again ✦";

        cakeCaption.textContent =
            "One little layer at a time. Happy Birthday, Samyam!";

        launchConfetti();

    });


    // 4. CONFETTI EFFECT

    function launchConfetti() {

        const colours = [
            "#c7a5ff",
            "#f7d6ff",
            "#ffd58a",
            "#a9d8ff",
            "#ffffff"
        ];

        const amount = 65;

        for (let i = 0; i < amount; i++) {

            const piece = document.createElement("span");

            const size = Math.random() * 7 + 4;

            piece.style.position = "fixed";
            piece.style.left = `${Math.random() * 100}vw`;
            piece.style.top = "-14px";

            piece.style.width = `${size}px`;
            piece.style.height = `${size * 1.45}px`;

            piece.style.background =
                colours[Math.floor(Math.random() * colours.length)];

            piece.style.borderRadius =
                Math.random() > 0.5 ? "50%" : "2px";

            piece.style.zIndex = "20";
            piece.style.pointerEvents = "none";

            document.body.appendChild(piece);

            const duration = Math.random() * 1800 + 1800;
            const drift = (Math.random() - 0.5) * 220;
            const spin = Math.random() * 720;

            const animation = piece.animate(
                [
                    {
                        transform: "translate3d(0, 0, 0) rotate(0deg)",
                        opacity: 1
                    },
                    {
                        transform: `translate3d(${drift}px, 105vh, 0) rotate(${spin}deg)`,
                        opacity: 0.1
                    }
                ],
                {
                    duration: duration,
                    easing: "cubic-bezier(.2,.65,.35,1)"
                }
            );

            animation.onfinish = () => piece.remove();

        }

    }

});
const birthdayMessage = document.getElementById("birthday-message");

const candles = document.querySelectorAll(".cake-candle");

candles.forEach((candle) => {
    candle.style.cursor = "pointer";

    candle.addEventListener("click", () => {
        birthdayMessage.classList.remove("show");
        void birthdayMessage.offsetWidth;
        birthdayMessage.classList.add("show");

        cake.classList.add("building");
        cakeButton.textContent = "Celebrate again ✦";
        cakeCaption.textContent = "SURPRISE! HAPPY BIRTHDAY, SAMYAM! 🎂";

        launchConfetti();
    });
});