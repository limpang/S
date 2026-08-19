/* ======================================
   LIMPANG PROFESSIONAL INTERACTIONS
====================================== */


/* VIDEO */

const video = document.querySelector(".cinematic-bg");

if (video) {
    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    video.play().catch(() => {
        console.log("Autoplay waiting.");
    });
}


/* ======================================
   TYPING EFFECT
====================================== */

const typing = document.getElementById("typing");

const words = [
    "CREATOR",
    "CODER",
    "DREAMER",
    "CAR ENTHUSIAST",
    "WEB BUILDER"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeWriter() {

    if (!typing) return;

    const word = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            word.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === word.length) {

            deleting = true;

            setTimeout(typeWriter, 1400);

            return;
        }

    } else {

        typing.textContent =
            word.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) % words.length;
        }
    }

    setTimeout(
        typeWriter,
        deleting ? 50 : 90
    );
}

typeWriter();


/* ======================================
   MOBILE MENU
====================================== */

const menuBtn =
    document.getElementById("menuBtn");

const mobileMenu =
    document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

        menuBtn.textContent =
            mobileMenu.classList.contains("active")
            ? "✕"
            : "☰";
    });


    document
        .querySelectorAll(".mobile-menu a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    mobileMenu.classList.remove(
                        "active"
                    );

                    menuBtn.textContent = "☰";

                }
            );

        });
}


/* ======================================
   CURSOR LIGHT
====================================== */

const cursorGlow =
    document.getElementById("cursorGlow");

document.addEventListener(
    "mousemove",
    event => {

        if (!cursorGlow) return;

        cursorGlow.style.left =
            event.clientX + "px";

        cursorGlow.style.top =
            event.clientY + "px";
    }
);


/* ======================================
   PARTICLES
====================================== */

const particleContainer =
    document.getElementById("particles");

if (particleContainer) {

    for (let i = 0; i < 35; i++) {

        const particle =
            document.createElement("div");

        particle.className =
            "particle";

        particle.style.left =
            Math.random() * 100 + "vw";

        particle.style.animationDuration =
            (7 + Math.random() * 12) + "s";

        particle.style.animationDelay =
            (-Math.random() * 12) + "s";

        particle.style.opacity =
            Math.random() * .6;

        particleContainer.appendChild(
            particle
        );
    }
}


/* ======================================
   3D TILT CARDS
====================================== */

const cards =
    document.querySelectorAll(".tilt");

cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            if (window.innerWidth < 800)
                return;

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const rotateX =
                ((y / rect.height) - .5) * -8;

            const rotateY =
                ((x / rect.width) - .5) * 8;

            card.style.transform =
                `
                perspective(900px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-7px)
                scale(1.015)
                `;
        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform = "";

        }
    );

});


/* ======================================
   SCROLL REVEAL
====================================== */

const revealElements =
    document.querySelectorAll(
        ".section-title, .glass-card, .stats, .final-inner"
    );

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },
        {
            threshold: .15
        }
    );

revealElements.forEach(
    element => observer.observe(element)
);


/* ======================================
   SMOOTH LINK FEEDBACK
====================================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const target =
                    document.querySelector(
                        link.getAttribute("href")
                    );

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });
                }

            }
        );

    });
fetch("/api/visitor")
    .then(response => response.json())
    .then(data => {

        console.log(data.message);

        const welcome = document.createElement("div");

        welcome.innerHTML = `
            <div class="welcome-title">
                WELCOME TO
                <span>LIMPANG.</span>
            </div>
            <div class="welcome-sub">
                ${data.time}
            </div>
        `;

        welcome.className = "welcome-screen";

        document.body.appendChild(welcome);

        setTimeout(() => {
            welcome.classList.add("hide");
        }, 2500);

        setTimeout(() => {
            welcome.remove();
        }, 3300);
    })
    .catch(error => {
        console.log("Python server unavailable");
    });
/* ======================================
   PROJECT COMING SOON SYSTEM
====================================== */

const projectCards =
    document.querySelectorAll(".coming-project");

const comingOverlay =
    document.getElementById("comingOverlay");

const comingClose =
    document.getElementById("comingClose");

const comingText =
    document.getElementById("comingText");


projectCards.forEach(card => {

    card.addEventListener("click", () => {

        const projectName =
            card.dataset.project;

        comingText.textContent =
            `${projectName} is coming soon. Limpang is working on it.`;

        comingOverlay.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


function closeComingSoon() {

    comingOverlay.classList.remove("active");

    document.body.style.overflow = "";

}


comingClose.addEventListener(
    "click",
    closeComingSoon
);


/* CLICK OUTSIDE POPUP */

comingOverlay.addEventListener(
    "click",
    event => {

        if (
            event.target === comingOverlay
        ) {
            closeComingSoon();
        }

    }
);


/* ESC KEY */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {
            closeComingSoon();
        }

    }
);