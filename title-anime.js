import { animate, svg, stagger } from 'https://esm.sh/animejs';

const animeModeLogo = document.getElementById("anime-mode-logo");
const animeTab = document.getElementById("anime-tab-btn");
const mangaTab = document.getElementById("manga-tab-btn");

function playLogoDrawIn() {
    animeModeLogo.classList.add("logo-visible");
    animate(svg.createDrawable("#anime-mode-logo .logo-line"), {
        draw: ["0 0", "0 1", "1 1"],
        ease: "inOutQuad",
        duration: 2000,
        delay: stagger(100),
        loop: true
    });
}

function hideLogo() {
    animeModeLogo.classList.remove("logo-visible");
}

animeTab.addEventListener("click", playLogoDrawIn);
mangaTab.addEventListener("click", hideLogo);

playLogoDrawIn();