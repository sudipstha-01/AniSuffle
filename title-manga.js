import { animate, svg, stagger } from 'https://esm.sh/animejs';

const mangaModeLogo = document.getElementById("manga-mode-logo");
const animeTab = document.getElementById("anime-tab-btn");
const mangaTab = document.getElementById("manga-tab-btn");

function playLogoDrawIn() {
    mangaModeLogo.classList.add("logo-visible");
    animate(svg.createDrawable("#manga-mode-logo .logo-line"), {
        draw: ["0 0", "0 1", "1 1"],
        ease: "inOutQuad",
        duration: 2000,
        delay: stagger(100),
        loop: true
    });
}

function hideLogo() {
    mangaModeLogo.classList.remove("logo-visible");
}

mangaTab.addEventListener("click", playLogoDrawIn);
animeTab.addEventListener("click", hideLogo);