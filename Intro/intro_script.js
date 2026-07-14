import { animate, stagger, svg, utils } from 'https://esm.sh/animejs';

const gate = document.getElementById("username-gate");
const usernameInput = document.getElementById("intro-username-input");
const continueBtn = document.getElementById("intro-continue-btn");
const introOverlay = document.getElementById("intro-overlay");
const blobField = document.getElementById("liquid-blob-field");
const kineticIntro = document.getElementById("kinetic-intro");
const kineticStage = document.getElementById("kinetic-text-stage");
const kineticCaption = document.getElementById("kinetic-caption");
const shineBar = document.getElementById("kinetic-shine-bar");

function wait(ms) {
    return new Promise(function (resolve) { setTimeout(resolve, ms); });
}

(function startMorphBlobLoop() {
    var polys = document.querySelectorAll("#intro-morph-blob-wrap polygon");
    if (polys.length < 2) return;
    var path1 = polys[0];
    var path2 = polys[1];

    function isOdd(n) { return n % 2; }

    function morphPoints() {
        var total = utils.random(4, 64);
        var r1 = utils.random(4, 56);
        var r2 = 56;
        var l = total;
        if (isOdd(total)) {
            l = total + 1;
        }
        var points = "";
        for (var i = 0; i < l; i++) {
            var r = r2;
            if (isOdd(i)) {
                r = r1;
            }
            var a = (2 * Math.PI * i / l) - Math.PI / 2;
            var x = 152 + utils.round(r * Math.cos(a), 0);
            var y = 56 + utils.round(r * Math.sin(a), 0);
            points += x + "," + y + " ";
        }
        return points;
    }

    function loopMorph() {
        utils.set(path2, { points: morphPoints() });
        animate(path1, {
            points: svg.morphTo(path2),
            ease: "inOutCirc",
            duration: 1500,
            onComplete: loopMorph
        });
    }
    loopMorph();
})();

function splitToLetters(text, extraClass) {
    kineticStage.innerHTML = "";
    for (var i = 0; i < text.length; i++) {
        var ch = text[i];
        var span = document.createElement("span");
        span.className = "kinetic-letter";
        if (extraClass) {
            span.className = "kinetic-letter " + extraClass;
        }
        span.textContent = ch;
        if (ch === " ") {
            span.textContent = "\u00A0";
        }
        kineticStage.appendChild(span);
    }
    return kineticStage.querySelectorAll(".kinetic-letter");
}

function revealLine(text, extraClass) {
    return new Promise(function (resolve) {
        var letters = splitToLetters(text, extraClass);
        animate(letters, {
            opacity: [0, 1],
            scale: [1.7, 1],
            filter: ["blur(20px)", "blur(0px)"],
            translateY: [50, 0],
            rotateX: [70, 0],
            delay: stagger(45),
            duration: 850,
            ease: "outExpo",
            onComplete: resolve
        });
    });
}

function hideLine() {
    return new Promise(function (resolve) {
        var letters = kineticStage.querySelectorAll(".kinetic-letter");
        if (!letters.length) { resolve(); return; }
        animate(letters, {
            opacity: [1, 0],
            scale: [1, 0.45],
            filter: ["blur(0px)", "blur(22px)"],
            translateY: [0, -34],
            delay: stagger(18),
            duration: 500,
            ease: "inExpo",
            onComplete: resolve
        });
    });
}

function showCaption(text) {
    return new Promise(function (resolve) {
        kineticCaption.textContent = text;
        animate(kineticCaption, {
            opacity: [0, 1],
            translateY: [10, 0],
            duration: 400,
            ease: "outQuad",
            onComplete: resolve
        });
    });
}

function hideCaption() {
    return new Promise(function (resolve) {
        animate(kineticCaption, {
            opacity: [1, 0],
            duration: 300,
            ease: "inQuad",
            onComplete: resolve
        });
    });
}

function sweepShine() {
    shineBar.classList.remove("sweep");
    void shineBar.offsetWidth;
    shineBar.classList.add("sweep");
}

async function playKineticIntro(username) {
    kineticIntro.classList.add("show");

    await showCaption("getting things ready");
    await revealLine("Welcome");
    await wait(750);
    await hideLine();
    await hideCaption();

    await revealLine(username);
    await wait(850);
    await hideLine();

    await showCaption("to a world of");
    await revealLine("Anime & Manga");
    await wait(700);
    await hideLine();
    await hideCaption();

    blobField.classList.add("intense");
    await revealLine("AniSuffle", "shimmer");
    sweepShine();
    await wait(1300);

    await drainAway();
}

function drainAway() {
    return new Promise(function (resolve) {
        introOverlay.classList.add("drain-out");
        setTimeout(function () {
            introOverlay.classList.add("hidden-done");
            resolve();
        }, 1150);
    });
}

function startIntro() {
    var raw = usernameInput.value.trim();
    var name = "Otaku";
    if (raw.length) {
        name = raw;
    }
    try { localStorage.setItem("aniSuffleGuestName", name); } catch (e) { /* ignore-_- */ }

    gate.classList.add("gate-liquify-out");
    setTimeout(function () {
        gate.remove();
        playKineticIntro(name);
    }, 650);
}

continueBtn.addEventListener("click", startIntro);
usernameInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") startIntro();
});

var seenBefore = null;
try { seenBefore = localStorage.getItem("aniSuffleGuestName"); } catch (e) { /* ignore */ }

if (seenBefore) {
    introOverlay.classList.add("hidden-done");
} else {
    setTimeout(function () { usernameInput.focus(); }, 400);
}
