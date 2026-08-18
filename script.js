/* =====================================
   LIMPANG PERSONAL WEBSITE
   JavaScript
===================================== */


/* =========================
   TYPEWRITER
========================= */

const words = [
    "Dreamer 🚀",
    "Hot Wheels Collector 🏎️",
    "Creative Mind 🎨",
    "Beginner Coder 💻",
    "Future Success Story 🔥"
];

const typingElement =
    document.getElementById("typing");

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeWriter() {

    const currentWord =
        words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

        if (
            characterIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeWriter,
                1400
            );

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (
                wordIndex >=
                words.length
            ) {
                wordIndex = 0;
            }
        }
    }


    setTimeout(
        typeWriter,
        deleting ? 45 : 85
    );
}


typeWriter();


/* =========================
   PARTICLES
========================= */

const particleContainer =
    document.getElementById(
        "particles"
    );


function createParticle() {

    const particle =
        document.createElement("div");

    particle.className =
        "particle";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        (5 + Math.random() * 8) + "s";

    particle.style.animationDelay =
        Math.random() * 5 + "s";

    particle.style.width =
        (1 + Math.random() * 3) + "px";

    particle.style.height =
        particle.style.width;

    particleContainer.appendChild(
        particle
    );


    setTimeout(() => {

        particle.remove();

    }, 15000);
}


for (let i = 0; i < 45; i++) {
    createParticle();
}


setInterval(
    createParticle,
    400
);


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".about-card, .interest-card, .social-card, .fact"
    );


const revealObserver =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(
                function(entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        revealObserver.unobserve(
                            entry.target
                        );
                    }
                }
            );

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(
    function(element) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(40px)";

        element.style.transition =
            "opacity .8s ease, transform .8s ease";

        revealObserver.observe(
            element
        );

    }
);


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


window.addEventListener(
    "scroll",
    function() {

        let current = "";

        sections.forEach(
            function(section) {

                const sectionTop =
                    section.offsetTop - 180;

                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    current =
                        section.getAttribute(
                            "id"
                        );
                }
            }
        );


        navLinks.forEach(
            function(link) {

                link.style.color =
                    "#aaa";

                if (
                    link.getAttribute(
                        "href"
                    ) === "#" + current
                ) {

                    link.style.color =
                        "#00aaff";
                }
            }
        );

    }
);


/* =========================
   PROFILE TILT EFFECT
========================= */

const profile =
    document.querySelector(
        ".profile-ring"
    );


document.addEventListener(
    "mousemove",
    function(event) {

        if (
            window.innerWidth < 700
        ) {
            return;
        }


        const x =
            (window.innerWidth / 2 -
            event.clientX) / 35;

        const y =
            (window.innerHeight / 2 -
            event.clientY) / 35;


        profile.style.transform =
            `rotateY(${x}deg) rotateX(${y}deg)`;
    }
);


document.addEventListener(
    "mouseleave",
    function() {

        profile.style.transform =
            "rotateY(0) rotateX(0)";

    }
);


/* =========================
   SMOOTH SOCIAL FEEDBACK
========================= */

const socialButtons =
    document.querySelectorAll(
        ".social-card"
    );


socialButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

                button.style.transform =
                    "scale(.97)";

                setTimeout(
                    function() {

                        button.style.transform =
                            "";

                    },
                    150
                );

            }
        );

    }
);


/* =========================
   CONSOLE MESSAGE
========================= */

console.log(
    "🚀 Welcome to Sailesh Subedi's website!"
);

console.log(
    "🔥 Never give up until success."
);