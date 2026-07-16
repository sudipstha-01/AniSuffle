//getting the element from html
const screenBody = document.getElementById("screen-body");
const animeTab = document.getElementById("anime-tab-btn");
const mangaTab = document.getElementById("manga-tab-btn");
const animeGenresBox = document.getElementById("anime-genres-box");
const mangaGenresBox = document.getElementById("manga-genres-box");
const animeGenreBtn = document.getElementById("anime-genre-btn");
const mangaGenreBtn = document.getElementById("manga-genre-btn");
const animeGenrePopup = document.getElementById("anime-genre-list");
const mangaGenrePopup = document.getElementById("manga-genre-list");
const animeText = document.getElementById("anime-information");
const mangaText = document.getElementById("manga-information");
const animeBestRatedCheckbox = document.getElementById("anime-best-rated-checkbox");
//I dont hate long variabel letsss gooo \0-0/. Do you ?
const mangaBestRatedCheckbox = document.getElementById("manga-best-rated-checkbox");
const recommendBtn = document.getElementById("search-for-anime-btn");
const posterImg = document.getElementById("poster-img");
const posterPlaceholder = document.getElementById("poster-placeholder");
const ANIME_LOGO_SVG = '<svg viewBox="0 0 304 112" aria-hidden="true"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path class="logo-line" d="M59 90V56.136C58.66 46.48 51.225 39 42 39c-9.389 0-17 7.611-17 17s7.611 17 17 17h8.5v17H42C23.222 90 8 74.778 8 56s15.222-34 34-34c18.61 0 33.433 14.994 34 33.875V90H59z" /><polyline class="logo-line" points="59 22.035 59 90 76 90 76 22 59 22" /><path class="logo-line" d="M59 90V55.74C59.567 36.993 74.39 22 93 22c18.778 0 34 15.222 34 34v34h-17V56c0-9.389-7.611-17-17-17-9.225 0-16.66 7.48-17 17.136V90H59z" /><polyline class="logo-line" points="127 22.055 127 90 144 90 144 22 127 22" /><path class="logo-line" d="M127 90V55.74C127.567 36.993 142.39 22 161 22c18.778 0 34 15.222 34 34v34h-17V56c0-9.389-7.611-17-17-17-9.225 0-16.66 7.48-17 17.136V90h-17z" /><path class="logo-line" d="M118.5 22a8.5 8.5 0 1 1-8.477 9.067v-1.134c.283-4.42 3.966-7.933 8.477-7.933z" /><path class="logo-line" d="M144 73c-9.389 0-17-7.611-17-17v-8.5h-17V56c0 18.778 15.222 34 34 34V73z" /><path class="logo-line" d="M178 90V55.74C178.567 36.993 193.39 22 212 22c18.778 0 34 15.222 34 34v34h-17V56c0-9.389-7.611-17-17-17-9.225 0-16.66 7.48-17 17.136V90h-17z" /><path class="logo-line" d="M263 73c-9.389 0-17-7.611-17-17s7.611-17 17-17c9.18 0 16.58 7.4 17 17h-17v17h34V55.875C296.433 36.994 281.61 22 263 22c-18.778 0-34 15.222-34 34s15.222 34 34 34V73z" /><path class="logo-line" d="M288.477 73A8.5 8.5 0 1 1 280 82.067v-1.134c.295-4.42 3.967-7.933 8.477-7.933z" /></g></svg>';
const MANGA_LOGO_SVG = '<svg viewBox="0 0 451 140" aria-hidden="true"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><g transform="translate(10,0)"><path class="logo-line" d="M0 90V55.74C0.567 36.993 15.39 22 34 22c18.778 0 34 15.222 34 34v34h-17V56c0-9.389-7.611-17-17-17-9.225 0-16.66 7.48-17 17.136V90H0z" /><path class="logo-line" d="M51 90V55.74C51.567 36.993 66.39 22 85 22c18.778 0 34 15.222 34 34v34h-17V56c0-9.389-7.611-17-17-17-9.225 0-16.66 7.48-17 17.136V90h-17z" /></g><g transform="translate(139,0)"><path class="logo-line" d="M51 90V56.136C50.66 46.48 43.225 39 34 39c-9.389 0-17 7.611-17 17s7.611 17 17 17h8.5v17H34C15.222 90 0 74.778 0 56s15.222-34 34-34c18.61 0 33.433 14.994 34 33.875V90H51z" /><polyline class="logo-line" points="51 22.035 51 90 68 90 68 22 51 22" /></g><g transform="translate(217,0)"><path class="logo-line" d="M0 90V55.74C0.567 36.993 15.39 22 34 22c18.778 0 34 15.222 34 34v34h-17V56c0-9.389-7.611-17-17-17-9.225 0-16.66 7.48-17 17.136V90H0z" /><polyline class="logo-line" points="51 22.055 51 90 68 90 68 22 51 22" /></g><g transform="translate(312,0)"><path class="logo-line" d="M51 90V56.136C50.66 46.48 43.225 39 34 39c-9.389 0-17 7.611-17 17s7.611 17 17 17h8.5v17H34C15.222 90 0 74.778 0 56s15.222-34 34-34c18.61 0 33.433 14.994 34 33.875V90H51z" /><polyline class="logo-line" points="51 22.035 51 90 44 118 61 118 68 90 68 22 51 22" /></g><g transform="translate(373,0)"><path class="logo-line" d="M51 90V56.136C50.66 46.48 43.225 39 34 39c-9.389 0-17 7.611-17 17s7.611 17 17 17h8.5v17H34C15.222 90 0 74.778 0 56s15.222-34 34-34c18.61 0 33.433 14.994 34 33.875V90H51z" /><polyline class="logo-line" points="51 22.035 51 90 68 90 68 22 51 22" /></g></g></svg>';
// const sourceBadge = document.getElementById("source-badge");
const imageCardBox = document.getElementById("image-card-box");
const cardShine = document.getElementById("card-shine");
const posterBg = document.getElementById("poster-bg");
const trailerBox = document.getElementById("trailer-box");
const trailerFrame = document.getElementById("trailer-frame");
const closeTrailerBtn = document.getElementById("close-trailer-btn");
const backBtn = document.getElementById("back-btn");
const forwardBtn = document.getElementById("forward-btn");
const moreMenuBtn = document.getElementById("more-menu-btn");
const moreMenuDropdown = document.getElementById("more-menu-dropdown");
// these are all the elements for the login/signup/save/my-list stuff
const myListBtn = document.getElementById("my-list-btn");
const usernameDisplay = document.getElementById("username-display");
const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");
const logoutBtn = document.getElementById("logout-btn");
const authModalOverlay = document.getElementById("auth-modal-overlay");
const authModalClose = document.getElementById("auth-modal-close");
const loginFormWrap = document.getElementById("login-form-wrap");
const signupFormWrap = document.getElementById("signup-form-wrap");
const loginIdentifier = document.getElementById("login-identifier");
const loginPassword = document.getElementById("login-password");
const loginSubmitBtn = document.getElementById("login-submit-btn");
const loginError = document.getElementById("login-error");
const signupUsername = document.getElementById("signup-username");
const signupEmail = document.getElementById("signup-email");
const signupPassword = document.getElementById("signup-password");
const signupSubmitBtn = document.getElementById("signup-submit-btn");
const signupError = document.getElementById("signup-error");
const showSignupLink = document.getElementById("show-signup-link");
const showLoginLink = document.getElementById("show-login-link");
const savedListModalOverlay = document.getElementById("saved-list-modal-overlay");
const savedListClose = document.getElementById("saved-list-close");
const savedListGrid = document.getElementById("saved-list-grid");
const savedListEmpty = document.getElementById("saved-list-empty");
const loginPasswordToggle = document.getElementById("login-password-toggle");
const signupPasswordToggle = document.getElementById("signup-password-toggle");
const savedAnimeTabBtn = document.getElementById("saved-anime-tab-btn");
const savedMangaTabBtn = document.getElementById("saved-manga-tab-btn");
var savedListActiveType = "anime";
//plannign to fetch anime/manga info from them
var jikanBaseUrl = "https://api.jikan.moe/v4";
var anilistUrl = "https://graphql.anilist.co";
var mangadexUrl = "https://api.mangadex.org";
var kitsuUrl = "https://kitsu.io/api/edge";


function addNetflixScanBars(btn) {
    var old = btn.querySelectorAll(".scan-bar");
    for (var j = 0; j < old.length; j++) {
        old[j].remove();
    }
    var count = 40;
    var barWidthPct = 100 / count + 0.6;
    for (var i = 0; i < count; i++) {
        var span = document.createElement("span");
        if (i % 2 === 1) {
            span.className = "scan-bar scan-even";
        } else {
            span.className = "scan-bar";
        }
        span.style.left = (i * (100 / count)) + "%";
        span.style.width = barWidthPct + "%";
        span.style.transitionDelay = (Math.random() * 1) + "s";
        btn.appendChild(span);
    }
}

function platformIcon(kind) {
    var icons = {
        youtube: '<svg class="btn-logo" viewBox="0 0 24 24" width="16" height="16"><rect x="1" y="4" width="22" height="16" rx="5" fill="#FF0000"/><path d="M10 8.5 L17 12 L10 15.5 Z" fill="#FFFFFF"/></svg>',
        crunchyroll: '<svg class="btn-logo" viewBox="0 0 24 24" width="16" height="16"><circle cx="12" cy="12" r="11" fill="#F47521"/><circle cx="12" cy="12" r="5" fill="none" stroke="#FFFFFF" stroke-width="2"/></svg>',
        netflix: '<svg class="btn-logo" viewBox="0 0 24 24" width="16" height="16"><rect x="1" y="1" width="22" height="22" rx="4" fill="#E50914"/><path d="M8 4 L8 20 L11 20 L11 11 L15 20 L18 20 L18 4 L15 4 L15 13 L11 4 Z" fill="#FFFFFF"/></svg>',
        hulu: '<svg class="btn-logo" viewBox="0 0 24 24" width="16" height="16"><rect x="1" y="1" width="22" height="22" rx="5" fill="#1CE783"/><text x="12" y="17" font-size="13" font-weight="900" font-family="Arial, sans-serif" text-anchor="middle" fill="#0b0b0b">h</text></svg>',
        mangadex: '<svg class="btn-logo" viewBox="0 0 24 24" width="16" height="16"><rect x="1" y="1" width="22" height="22" rx="5" fill="#FF6740"/><path d="M6 6 h12 v3 h-12 z M6 11 h12 v3 h-12 z M6 16 h8 v3 h-8 z" fill="#FFFFFF"/></svg>',
        viz: '<svg class="btn-logo" viewBox="0 0 24 24" width="16" height="16"><rect x="1" y="1" width="22" height="22" rx="5" fill="#00ADB5"/><text x="12" y="17" font-size="12" font-weight="900" font-family="Arial, sans-serif" text-anchor="middle" fill="#FFFFFF">V</text></svg>',
        bookwalker: '<svg class="btn-logo" viewBox="0 0 24 24" width="16" height="16"><rect x="1" y="1" width="22" height="22" rx="5" fill="#9B59D9"/><path d="M12 6 C 9 5, 5 5, 5 6 V17 C 8 16.3, 10 16.3, 12 17 C 14 16.3, 16 16.3, 19 17 V6 C 19 5, 15 5, 12 6 Z" fill="none" stroke="#FFFFFF" stroke-width="1.4"/><line x1="12" y1="6" x2="12" y2="17" stroke="#FFFFFF" stroke-width="1.2"/></svg>'
    };
    return icons[kind] || "";
}

// the slide animation
setTimeout(function () {
    screenBody.classList.add("slide-in");
}, 1000);


(function () {
    var maxTilt = 16;
    var hoverScale = 1.035;
    var pressScale = 0.94;
    var currentRX = 0;
    var currentRY = 0;
    var currentScale = 1;
    var settleTimer = null;
    var cardArrived = false;
    setTimeout(function () {
        imageCardBox.style.pointerEvents = "auto";
    }, 1200);

    function trailerIsOpen() {
        return trailerBox.classList.contains("show");
    }
    imageCardBox.addEventListener("transitionend", function (e) {
        if (e.propertyName === "transform") {
            cardArrived = true;
        }
    })
    function paint() {
        imageCardBox.style.transform =
            "translateX(0) perspective(1400px) rotateX(" + currentRX.toFixed(2) + "deg) rotateY(" +
            currentRY.toFixed(2) + "deg) scale(" + currentScale.toFixed(3) + ")";

        var shadowX = (currentRY / maxTilt) * 22;
        var shadowY = 18 - (currentRX / maxTilt) * 22;
        imageCardBox.style.boxShadow =
            "0 8px 32px 0 rgba(0, 0, 0, 0.2), 0 0 30px 6px rgba(255, 255, 255, 0.849), " +
            shadowX.toFixed(1) + "px " + shadowY.toFixed(1) + "px 34px rgba(0, 0, 0, 0.35)";
    }
    imageCardBox.addEventListener("mouseenter", function () {
        clearTimeout(settleTimer);
        imageCardBox.classList.remove("returning");
        imageCardBox.classList.add("entering");
        settleTimer = setTimeout(function () {
            imageCardBox.classList.remove("entering");
        }, 400)
    });
    imageCardBox.addEventListener("mousemove", function (e) {
        if (trailerIsOpen() || !cardArrived) {
            return;
        }
        clearTimeout(settleTimer);
        var rect = imageCardBox.getBoundingClientRect();
        var px = (e.clientX - rect.left) / rect.width;
        var py = (e.clientY - rect.top) / rect.height;
        px = Math.min(1, Math.max(0, px));
        py = Math.min(1, Math.max(0, py));

        currentRY = (px - 0.5) * maxTilt * 2;
        currentRX = -(py - 0.5) * maxTilt * 2;
        currentScale = hoverScale;

        imageCardBox.style.setProperty("--mx", (px * 100) + "%");
        imageCardBox.style.setProperty("--my", (py * 100) + "%");
        imageCardBox.classList.remove("returning");
        imageCardBox.classList.add("tilting");
        paint();
    });

    imageCardBox.addEventListener("mouseleave", function () {
        currentRX = 0;
        currentRY = 0;
        currentScale = 1;
        imageCardBox.classList.remove("tilting");
        imageCardBox.classList.add("returning");
        paint();
        clearTimeout(settleTimer);
        settleTimer = setTimeout(function () {
            imageCardBox.classList.remove("returning");
        }, 700);
    });

    imageCardBox.addEventListener("click", function (e) {
        if (trailerIsOpen() || !cardArrived) {
            return;
        }
        var rect = imageCardBox.getBoundingClientRect();

        var ripple = document.createElement("span");
        ripple.className = "card-ripple";
        ripple.style.left = (e.clientX - rect.left) + "px";
        ripple.style.top = (e.clientY - rect.top) + "px";
        imageCardBox.appendChild(ripple);
        ripple.addEventListener("animationend", function () {
            ripple.remove();
        });

        clearTimeout(settleTimer);
        imageCardBox.classList.remove("returning");
        currentScale = pressScale;
        paint();
        settleTimer = setTimeout(function () {
            imageCardBox.classList.add("returning");
            currentScale = hoverScale;
            paint();
            settleTimer = setTimeout(function () {
                imageCardBox.classList.remove("returning");
            }, 650);
        }, 110);
    });

    // double click the poster = save (like double-tapping a post on social media)
    imageCardBox.addEventListener("dblclick", function (e) {
        if (trailerIsOpen() || !cardArrived) {
            return;
        }
        if (window.getSelection) {
            window.getSelection().removeAllRanges();
        }

        var currentHist = currentHistory();
        var shown = currentHist.list[currentHist.index];
        if (!shown || !shown.url) {
            return; // nothing loaded yet, nothing to save
        }
        var kind = currentKind();
        var saveBtn = currentInfoBox().querySelector("#saveItemBtn");
        var wasSaved = !!(saveBtn && saveBtn.classList.contains("is-saved"));

        spawnStarBurst(e.clientX, e.clientY);

        // just like double-tapping a post, this only ever saves =)
        // it never un-saves, so no one accidentally kicks something off their list
        if (!wasSaved && saveBtn) {
            handleSaveClick(shown, kind, saveBtn);
        }
    });

    //i like stars
    var starLayer = document.getElementById("star-burst-layer");
    if (!starLayer) {
        starLayer = document.createElement("div");
        starLayer.id = "star-burst-layer";
        document.body.appendChild(starLayer);
    }

    function spawnOneStar(className, x, y, extraSetup) {
        var star = document.createElement("span");
        star.className = className;
        star.textContent = "★";
        star.style.left = x + "px";
        star.style.top = y + "px";
        if (extraSetup) {
            extraSetup(star);
        }
        starLayer.appendChild(star);

        star.addEventListener("animationend", function () {
            star.remove();
        });
        setTimeout(function () {
            if (star.parentNode) {
                star.remove();
            }
        }, 2200);
    }

    function spawnStarBurst(x, y) {
        spawnOneStar("save-star-pop", x, y);

        // little stars rising up and outward from the exact spot clicked
        var sparkleCount = 6;
        for (var i = 0; i < sparkleCount; i++) {
            (function (i) {
                var spread = -70 + (140 / (sparkleCount - 1)) * i + (Math.random() * 12 - 6);
                var angle = -90 + spread;
                var distance = 140 + Math.random() * 100;
                var rad = angle * Math.PI / 180;
                var sx = (Math.cos(rad) * distance).toFixed(1) + "px";
                var sy = (Math.sin(rad) * distance).toFixed(1) + "px";
                spawnOneStar("save-star-sparkle", x, y, function (sparkle) {
                    sparkle.style.setProperty("--sx", sx);
                    sparkle.style.setProperty("--sy", sy);
                    sparkle.style.animationDelay = (i * 0.02) + "s";
                });
            })(i);
        }
    }
})();
animeGenreBtn.addEventListener("click", function () {
    animeGenrePopup.classList.toggle("popup-is-open");
})
//doing the same for manga as welllll
mangaGenreBtn.addEventListener("click", function () {
    mangaGenrePopup.classList.toggle("popup-is-open")
})
//when someone clicks the anime tab, show anime stuff and hide the manga stuff
animeTab.addEventListener("click", function () {
    animeTab.classList.add("active-tab");
    mangaTab.classList.remove("active-tab");
    animeGenresBox.style.display = "flex";
    mangaGenresBox.style.display = "none";
    animeText.style.display = "block";
    mangaText.style.display = "none";
    animeGenrePopup.classList.remove("popup-is-open");
    mangaGenrePopup.classList.remove("popup-is-open");
    resetCard();
});
mangaTab.addEventListener("click", function () {
    mangaTab.classList.add("active-tab");
    animeTab.classList.remove("active-tab");
    mangaGenresBox.style.display = "flex";
    animeGenresBox.style.display = "none";
    mangaText.style.display = "block";
    animeText.style.display = "none";
    animeGenrePopup.classList.remove("popup-is-open");
    mangaGenrePopup.classList.remove("popup-is-open")
    resetCard();
})
//checking which tab is open rn  and also gives back a listtt of the genres someone checked
function getPickedGenres() {
    let whichPopup;
    if (animeTab.classList.contains("active-tab")) {
        whichPopup = animeGenrePopup;
    } else {
        whichPopup = mangaGenrePopup;
    }
    const checkedOnes = whichPopup.querySelectorAll("input[type='checkbox']:checked");
    const pickedGenres = [];
    checkedOnes.forEach(function (box) {
        pickedGenres.push(box.value);
    });
    return pickedGenres;
}
document.addEventListener("click", function (event) {
    const clickedInsideAnime = animeGenreBtn.contains(event.target) || animeGenrePopup.contains(event.target);
    const clickedInsideManga = mangaGenreBtn.contains(event.target) || mangaGenrePopup.contains(event.target);
    if (!clickedInsideAnime) {
        animeGenrePopup.classList.remove("popup-is-open");
    }
    if (!clickedInsideManga) {
        mangaGenrePopup.classList.remove("popup-is-open");
    }
})

moreMenuBtn.addEventListener("click", function () {
    moreMenuDropdown.classList.toggle("show");
})

document.addEventListener("click", function (event) {
    const clickedInsideMenu = moreMenuBtn.contains(event.target) || moreMenuDropdown.contains(event.target);
    if (!clickedInsideMenu) {
        moreMenuDropdown.classList.remove("show");
    }
})
myListBtn.addEventListener("click", function () { moreMenuDropdown.classList.remove("show"); });
logoutBtn.addEventListener("click", function () { moreMenuDropdown.classList.remove("show"); });
//if you really want the high rated .. then here you go
function bestRatedChecked() {
    if (animeTab.classList.contains("active-tab")) {
        return animeBestRatedCheckbox.checked;
    } else {
        return mangaBestRatedCheckbox.checked;
    }
}
var jikanGenreId = {
    "Action": 1,
    "Adventure": 2, "Cars": 3, "Comedy": 4, "Dementia": 5,
    "Demons": 6, "Drama": 8, "Ecchi": 9, "Fantasy": 10, "Game": 11,
    "Harem": 35, "Historical": 13, "Horror": 14, "Isekai": 62, "Josei": 43,
    "Kids": 15, "Magic": 16, "Martial Arts": 17, "Mecha": 18, "Military": 38,
    "Music": 19, "Mystery": 7, "Parody": 20, "Police": 39, "Psychological": 40,
    "Romance": 22, "Samurai": 21, "School": 23, "Sci-Fi": 24, "Seinen": 42,
    "Shoujo": 25, "Shoujo Ai": 26, "Shounen": 27, "Shounen Ai": 28,
    "Slice of Life": 36, "Space": 29, "Sports": 30, "Super Power": 31,
    "Supernatural": 37, "Thriller": 41, "Vampire": 32
};
var anilistGenreList = ["Action", "Adventure", "Comedy", "Drama", "Ecchi", "Fantasy",
    "Horror", "Mecha", "Music", "Mystery", "Psychological", "Romance", "Sci-Fi",
    "Slice of Life", "Sports", "Supernatural", "Thriller"];

function genreWorksOnAnilist(name) {
    for (var i = 0; i < anilistGenreList.length; i++) {
        if (anilistGenreList[i] === name) {
            return true;
        }
    }
    return false;
}
function kitsuGenreSlug(name) {
    return name.toLowerCase().split(" ").join("-");
}
//mangadex is abit weird
var mangadexTagId = {
    "Action": "391b0423-d847-456f-aff0-8b0cfc03066b",
    "Adventure": "87cc87cd-a395-47af-b27a-93258283bbc6",
    "Comedy": "4d32cc48-9f00-4cca-9b5a-a839f0764984",
    "Drama": "b9af3a63-f058-46de-a9a0-e0c13906197a",
    "Fantasy": "cdc58593-87dd-415e-bbc0-2ec27bf404cc",
    "Historical": "33771934-028e-4cb3-8744-691e866a923e",
    "Horror": "cdad7e68-1419-41dd-bdce-27753074a640",
    "Isekai": "ace04997-f6bd-436e-b261-779182193d3d",
    "Magic": "a1f53773-c69a-4ce5-8cab-fffcd90b1565",
    "Mecha": "50880a9d-5440-4732-9afb-f9de459ba599",
    "Military": "ae259a97-6b23-4ba7-be31-561e4d5d99f8",
    "Music": "f42fbf9e-188a-447b-9fdc-f19dc1e4d685",
    "Mystery": "ee968100-4191-4968-93d3-f82d72be7e46",
    "Psychological": "3b60b75c-a2d7-4860-ab56-05f391bb889c",
    "Romance": "423e2eae-a7a2-4a8b-ac03-a8351462d71d",
    "Sci-Fi": "256c8bd9-4904-4360-bf4f-508a76d67183",
    "Slice of Life": "e5301a23-ebd9-49dd-a0cb-2add944c7fe9",
    "Sports": "69964a64-2f90-4d33-beeb-f3ed2875eb4c",
    "Supernatural": "eabc5b4c-6aff-42f3-b657-3e90cbd00b75",
    "Thriller": "07251805-a27e-4d59-b488-f0bfbec15168"
};
//Now I convert these genres into words and i use looop for that
function getGenreIds(genreNames) {
    var ids = [];
    for (var i = 0; i < genreNames.length; i++) {
        var id = jikanGenreId[genreNames[i]];
        if (id) {
            ids.push(id);
        }
    }
    return ids.join(",");
}
//picking a random anime/manga out of a list
function pickRandom(list) {
    var index = Math.floor(Math.random() * list.length);
    return list[index];
}
function addZero(num) {
    if (!num) return "";
    if (num < 10) {
        return "0" + num;
    }
    return "" + num;
}
// cleaning the anilist mess , -_- (thanks gemini for this)
function removeTags(text) {
    if (!text) {
        return "";
    }
    var cleaned = text.split("<br>").join(" ").split("<br/>").join(" ");
    return cleaned.replace(/<[^>]*>/g, "");
}
//cutting the long text
function cutShort(text, maxLength) {
    if (!text) {
        return "";
    }
    if (text.length <= maxLength) {
        return text;
    }
    return text.slice(0, maxLength) + "...";
}
function makeSafe(text) {
    if (text === null || text === undefined) {
        return "";
    }
    return String(text).split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quot;");
}
async function getFromJikan(kind, genreList, bestRated) {
    var ids = getGenreIds(genreList);
    if (genreList.length > 0 && ids === "") {
        throw new Error("no matching genre on jikan");
    }
    var page = Math.floor(Math.random() * 15) + 1;
    var url = jikanBaseUrl + "/" + kind + "?limit=25&page=" + page;
    if (ids !== "") {
        url += "&genres=" + ids;
    }
    if (bestRated) {
        url += "&order_by=score&sort=desc&min_score=7";
    }
    var res = await fetch(url);
    if (!res.ok) {
        throw new Error("jikan request failed");
    }
    var json = await res.json();
    var list = json.data;
    if ((!list || list.length === 0) && page !== 1) {
        var fallbackUrl = url.replace("&page=" + page, "&page=1");
        var res2 = await fetch(fallbackUrl);
        if (res2.ok) {
            json = await res2.json();
            list = json.data;
        }
    }
    if (!list || list.length === 0) {
        throw new Error("jikan gave nothing back =(");
    }
    var item;
    if (bestRated) {
        item = pickRandom(list.slice(0, 15));
    } else {
        item = pickRandom(list);
    }
    var genreNames = [];
    if (item.genres) {
        for (var i = 0; i < item.genres.length; i++) {
            genreNames.push(item.genres[i].name);
        }
    }
    if (item.themes) {
        for (var i = 0; i < item.themes.length; i++) {
            genreNames.push(item.themes[i].name);
        }
    }
    if (item.explicit_genres) {
        for (var i = 0; i < item.explicit_genres.length; i++) {
            genreNames.push(item.explicit_genres[i].name);
        }
    }
    if (item.demographics) {
        for (var i = 0; i < item.demographics.length; i++) {
            genreNames.push(item.demographics[i].name);
        }
    }
    var dateText = null;
    if (kind === "anime" && item.aired) {
        dateText = item.aired.string;
    }
    if (kind === "manga" && item.published) {
        dateText = item.published.string;
    }
    var trailerUrl = null;
    if (item.trailer && item.trailer.youtube_id) {
        trailerUrl = "https://www.youtube.com/embed/" + item.trailer.youtube_id;
    }
    var scoreText = null;
    if (item.score) {
        scoreText = item.score.toFixed(1);
    }
    var posterUrl = null;
    if (item.images && item.images.jpg) {
        posterUrl = item.images.jpg.large_image_url;
    }
    return {
        title: item.title_english || item.title,
        titleNative: item.title_japanese || null,
        score: scoreText,
        poster: posterUrl,
        trailer: trailerUrl,
        genres: genreNames,
        date: dateText,
        synopsis: item.synopsis,
        status: item.status,
        url: item.url,
        source: "Jikan"
    }; 
}
//inviting anilist info to my site
async function getFromAnilist(kind, genreList, bestRated) {
    for (var i = 0; i < genreList.length; i++) {
        if (!genreWorksOnAnilist(genreList[i])) {
            throw new Error("genre not on anilist");
        }
    }
    var sortType = "POPULARITY_DESC";
    if (bestRated) {
        sortType = "SCORE_DESC";
    }
    var anilistPage = Math.floor(Math.random() * 15) + 1;
    var query = "query($type:MediaType,$genres:[String],$minScore:Int,$page:Int){ Page(page:$page,perPage:25){ media(type:$type genre_in:$genres averageScore_greater:$minScore sort:" + sortType + "){ title{ romaji english native } averageScore coverImage{ large } genres startDate{ year month day } description(asHtml:false) status siteUrl trailer{ id site } } } }";
    var genresParam = null;
    if (genreList.length > 0) {
        genresParam = genreList;
    }
    var minScoreParam = null;
    if (bestRated) {
        minScoreParam = 69;
    }
    var variables = {
        type: kind,
        genres: genresParam,
        minScore: minScoreParam,
        page: anilistPage
    };
    var res = await fetch(anilistUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: query, variables: variables })
    });
    if (!res.ok) {
        throw new Error("anilist request failed");
    }
    var json = await res.json();
    var list = null;
    if (json.data && json.data.Page) {
        list = json.data.Page.media;
    }
    if (!list || list.length === 0) {
        throw new Error("anilist gave nothing back");
    }
    var item;
    if (bestRated) {
        item = pickRandom(list.slice(0, 15));
    } else {
        item = pickRandom(list);
    }
    var dateText = null;
    if (item.startDate && item.startDate.year) {
        dateText = item.startDate.year + "-" + addZero(item.startDate.month) + "-" + addZero(item.startDate.day);
    }
    var title = item.title.romaji;
    if (item.title.english) {
        title = item.title.english;
    }
    var trailerUrl = null;
    if (item.trailer && item.trailer.site === "youtube" && item.trailer.id) {
        trailerUrl = "https://www.youtube.com/embed/" + item.trailer.id;
    }
    var scoreText = null;
    if (item.averageScore) {
        scoreText = (item.averageScore / 10).toFixed(1);
    }
    var posterUrl = null;
    if (item.coverImage) {
        posterUrl = item.coverImage.large;
    }
    return {
        title: title,
        titleNative: item.title.native || null,
        score: scoreText,
        poster: posterUrl,
        trailer: trailerUrl,
        genres: item.genres || [],
        date: dateText,
        synopsis: removeTags(item.description),
        status: item.status,
        url: item.siteUrl,
        source: "AniList"
    };
}

//inviting kitsu to my site
async function getFromKitsu(kind, genreList, bestRated) {
    var slugs = [];
    for (var i = 0; i < genreList.length; i++) {
        slugs.push(kitsuGenreSlug(genreList[i]));
    }
    var offset = Math.floor(Math.random() * 300);
    var url = kitsuUrl + "/" + kind + "?page[limit]=20&page[offset]=" + offset + "&include=categories";
    if (bestRated) {
        url += "&sort=-averageRating";
    } else {
        url += "&sort=-userCount";
    }
    if (slugs.length > 0) {
        url += "&filter[categories]=" + slugs.join(",");
    }
    var res = await fetch(url, { headers: { "Accept": "application/vnd.api+json" } });
    if (!res.ok) {
        throw new Error("Kitsu request failed");
    }
    var json = await res.json();
    var list = json.data;
    if ((!list || list.length === 0) && offset !== 0) {
        var fallbackUrl = url.replace("page[offset]=" + offset, "page[offset]=0");
        var res2 = await fetch(fallbackUrl, { headers: { "Accept": "application/vnd.api+json" } });
        if (res2.ok) {
            json = await res2.json();
            list = json.data;
        }
    }
    if (!list || list.length === 0) {
        throw new Error("kitsu gave nothing back =(");
    }
    var item;
    if (bestRated) {
        item = pickRandom(list.slice(0, 12));
    } else {
        item = pickRandom(list);
    }
    var attr = item.attributes;
    //figuring out the genre names for the  "included" part of the response
    var genreIds = [];
    if (item.relationships && item.relationships.categories && item.relationships.categories.data) {
        for (var i = 0; i < item.relationships.categories.data.length; i++) {
            genreIds.push(item.relationships.categories.data[i].id);
        }
    }
    var genreNames = [];
    var included = json.included || [];
    for (var i = 0; i < included.length; i++) {
        if (included[i].type === "categories" && genreIds.indexOf(included[i].id) > -1) {
            genreNames.push(included[i].attributes.title);
        }
    }
    var title = attr.canonicalTitle;
    if (attr.titles && attr.titles.en) {
        title = attr.titles.en;
    }

    var titleNative = null;
    if (attr.titles) {
        titleNative = attr.titles.ja_jp || attr.titles.ja || null;
    }
    var trailerUrl = null;
    if (attr.youtubeVideoId) {
        trailerUrl = "https://www.youtube.com/embed/" + attr.youtubeVideoId;
    }
    var scoreText = null;
    if (attr.averageRating) {
        scoreText = (attr.averageRating / 10).toFixed(1);
    }
    var posterUrl = null;
    if (attr.posterImage) {
        posterUrl = attr.posterImage.large || attr.posterImage.original;
    }
    return {
        title: title,
        titleNative: titleNative,
        score: scoreText,
        poster: posterUrl,
        trailer: trailerUrl,
        genres: genreNames,
        date: attr.startDate,
        synopsis: attr.synopsis,
        status: attr.status,
        url: "https://kitsu.io/" + kind + "/" + attr.slug,
        source: "Kitsu"
    };
}
//getting stuff from mangadex 
async function getMangadexRating(id) {
    try {
        var res = await fetch(mangadexUrl + "/statistics/manga/" + id);
        if (!res.ok) {
            return null;
        }
        var json = await res.json();
        var stat = json.statistics[id];
        var value = stat.rating.bayesian || stat.rating.average;
        if (value) {
            return Number(value).toFixed(1);
        }
        return null;
    } catch (e) {
        return null;
    }
}
async function getFromMangadex(genreList, bestRated) {
    var tagIds = [];
    for (var i = 0; i < genreList.length; i++) {
        var id = mangadexTagId[genreList[i]];
        if (id) {
            tagIds.push(id);
        }
    }
    if (genreList.length > 0 && tagIds.length !== genreList.length) {
        throw new Error("genre not supported on mangadex =(");
    }
    var url = mangadexUrl + "/manga/random?includes[]=cover_art&contentRating[]=safe&contentRating[]=suggestive";
    for (var i = 0; i < tagIds.length; i++) {
        url += "&includedTags[]=" + tagIds[i];
    }
    var tries = 1;
    if (bestRated) {
        tries = 5;
    }
    var lastGood = null;
    for (var t = 0; t < tries; t++) {
        var res = await fetch(url);
        if (!res.ok) {
            throw new Error("mangadex request failed");
        }
        var json = await res.json();
        var item = json.data;
        if (!item) {
            throw new Error("mangadex gave nothing back");
        }
        var attr = item.attributes;
        var titleObj = attr.title || {};
        var title = titleObj.en;
        if (!title) {
            for (var key in titleObj) {
                title = titleObj[key];
                break;
            }
        }
        var titleNative = titleObj.ja || titleObj["ja-ro"] || null;
        var poster = null;
        for (var r = 0; r < item.relationships.length; r++) {
            if (item.relationships[r].type === "cover_art") {
                var fileName = null;
                if (item.relationships[r].attributes) {
                    fileName = item.relationships[r].attributes.fileName;
                }
                if (fileName) {
                    poster = "https://uploads.mangadex.org/covers/" + item.id + "/" + fileName + ".512.jpg";
                }
            }
        }
        var genreNames = [];
        var tags = attr.tags || [];
        for (var g = 0; g < tags.length; g++) {
            if (tags[g].attributes && tags[g].attributes.group === "genre") {
                genreNames.push(tags[g].attributes.name.en);
            }
        }
        var descObj = attr.description || {};
        var desc = descObj.en;
        if (!desc) {
            for (var key2 in descObj) {
                desc = descObj[key2];
                break;
            }
        }
        var rating = await getMangadexRating(item.id);
        var yearText = null;
        if (attr.year) {
            yearText = String(attr.year);
        }
        var data = {
            title: title,
            titleNative: titleNative,
            score: rating,
            poster: poster,
            genres: genreNames,
            date: yearText,
            synopsis: desc,
            status: attr.status,
            url: "https://mangadex.org/title/" + item.id,
            source: "MangaDex"
        };
        lastGood = data;
        if (!bestRated) {
            return data;
        }
        if (rating && Number(rating) >= 7) {
            return data;
        }
        //otherwise the loop just tries again with a fresh random pull -_-
    }
    return lastGood;
}
//unity , now all of them work together (one by one though) =)
async function backfillTrailer(title, kind) {
    try {
        var anilistKind = "MANGA";
        if (kind === "anime") {
            anilistKind = "ANIME";
        }
        var query = "query($search:String,$type:MediaType){ Media(search:$search,type:$type){ trailer{ id site } } }";
        var variables = { search: title, type: anilistKind };
        var res = await fetch(anilistUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: query, variables: variables })
        });
        if (!res.ok) {
            return null;
        }
        var json = await res.json();
        var media = null;
        if (json.data) {
            media = json.data.Media;
        }
        if (media && media.trailer && media.trailer.site === "youtube" && media.trailer.id) {
            return "https://www.youtube.com/embed/" + media.trailer.id;
        }
        return null;
    } catch (e) {
        //not a big deal if this fails, we just wont have a trailer button
        return null;
    }
}
async function getRandomPick(kind, genreList, bestRated) {
    var result = null;
    try {
        result = await getFromJikan(kind, genreList, bestRated);
    } catch (e) {
        console.log("jikan didnt work, trying anilist now and the reaons is:", e.message);
    }
    if (!result) {
        try {
            var anilistKind = "MANGA";
            if (kind === "anime") {
                anilistKind = "ANIME";
            }
            result = await getFromAnilist(anilistKind, genreList, bestRated);
        } catch (e) {
            console.log("anilist didnt work , now i try kitsu. and the reason is : ", e.message);
        }
    }
    if (!result) {
        try {
            result = await getFromKitsu(kind, genreList, bestRated);
        } catch (e) {
            console.log("kitsu didnt work too, reason : ", e.message);
        }
    }
    if (!result && kind === "manga") {
        try {
            result = await getFromMangadex(genreList, bestRated);
        } catch (e) {
            console.log("mangadex didnt work either. reason: ", e.message);
        }
    }
    if (result && !result.trailer) {
        result.trailer = await backfillTrailer(result.title, kind);
    }
    return result;
}
//lets work with the poster now...
var defaultRatio = 14 / 9;
var lastRatio = defaultRatio;
var posterRatio = defaultRatio;
var trailerRatio = 16 / 9;

function hideTrailer() {
    trailerBox.classList.remove("show");
    trailerFrame.src = "";
    resizeCard(posterRatio);
}
closeTrailerBtn.addEventListener("click", hideTrailer);

function resizeCard(ratio) {
    if (!ratio || ratio <= 0) {
        ratio = defaultRatio;
    }
    lastRatio = ratio;
    var gap = 50;
    var infoMinWidth = 260;
    var maxHeight = screenBody.clientHeight;
    if (!maxHeight) {
        maxHeight = window.innerHeight * 0.6;
    }
    var maxWidth = screenBody.clientWidth - gap - infoMinWidth;
    if (maxWidth < 200) {
        maxWidth = 220;
    }
    var width = maxHeight * ratio;
    var height = maxHeight;
    if (width > maxWidth) {
        width = maxWidth;
        height = width / ratio;
    }
    if (width < 180) {
        width = 180;
    }
    if (height < 180) {
        height = 180;
    }
    imageCardBox.style.width = width + "px";
    imageCardBox.style.height = height + "px";
}
var resizeTimer;
window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
        resizeCard(lastRatio);
    }, 150);
});
function showPoster(data, kind) {
    posterImg.onload = null;
    posterImg.onerror = null;
    if (data && data.poster) {
        posterImg.onload = function () {
            posterImg.classList.add("loaded");
            if (posterImg.naturalWidth && posterImg.naturalHeight) {
                posterRatio = posterImg.naturalWidth / posterImg.naturalHeight;
                resizeCard(posterRatio);
            }
            posterBg.style.backgroundImage = 'url("' + data.poster + '")';
            posterBg.classList.add("show");
        };
        posterImg.onerror = function () {
            posterImg.classList.remove("loaded");
            if (kind === "anime") {
                posterPlaceholder.innerHTML = ANIME_LOGO_SVG;
            } else {
                posterPlaceholder.innerHTML = MANGA_LOGO_SVG;
            }
            posterBg.classList.remove("show");
            posterRatio = defaultRatio;
            resizeCard(defaultRatio);
        };
        posterImg.src = data.poster;
        posterImg.alt = data.title + " poster";
    } else {
        posterImg.classList.remove("loaded");
        posterImg.src = "";
        if (kind === "anime") {
            posterPlaceholder.innerHTML = ANIME_LOGO_SVG;
        } else {
            posterPlaceholder.innerHTML = MANGA_LOGO_SVG;
        }
        posterBg.classList.remove("show");
        posterRatio = defaultRatio;
        resizeCard(defaultRatio);
    }
}
function resetCard() {
    imageCardBox.classList.remove("is-loading");
    // sourceBadge.classList.remove("show");
    trailerBox.classList.remove("show");
    trailerFrame.src = "";
    var kind = "manga";
    if (animeTab.classList.contains("active-tab")) {
        kind = "anime";
    }
    var hist = pickHistory[kind];
    if (hist && hist.index >= 0 && hist.list[hist.index]) {
        showPoster(hist.list[hist.index], kind);
    } else {
        showPoster(null, kind);
    }
    syncNavButtons();
}
function currentInfoBox() {
    if (animeTab.classList.contains("active-tab")) {
        return animeText;
    }
    return mangaText;
}
function startLoading(kind) {
    imageCardBox.classList.add("is-loading");
    posterImg.classList.remove("loaded");
    // sourceBadge.classList.remove("show");
    trailerBox.classList.remove("show");
    trailerFrame.src = "";
    resizeCard(defaultRatio);
    var msg = "Hold on buddy, Searching an anime for you...";
    if (kind === "manga") {
        msg = "Hold on buddy, Searching a manga for you....";
    }
    currentInfoBox().innerHTML = `<p class="loading-msg">` + msg + '</p>';
}
function showFail() {
    imageCardBox.classList.remove("is-loading");
    posterImg.onload = null;
    posterImg.onerror = null;
    posterPlaceholder.textContent = "😵";
    posterBg.classList.remove("show");
    posterRatio = defaultRatio;
    resizeCard(defaultRatio);
    currentInfoBox().innerHTML = '<h2 class="info-title error-title">No pick this time</h2>' +
        '<p class="error-msg">All four sources were unreachable, rate-limited, or had nothing matching those genres. Give it another try.</p>' +
        '<button class="retry-btn" id="retryBtn">Try again</button>';
    document.getElementById("retryBtn").addEventListener("click", pull);
}
function displayPick(data, kind) {
    imageCardBox.classList.remove("is-loading");
    showPoster(data, kind);
    var metaHtml = "";
    if (data.score) {
        metaHtml += '<span class="meta-pill rating">★ ' + makeSafe(data.score) + '/10</span>';
    }
    if (data.date) {
        var dateStr = String(data.date);
        var looksIso = /^\d{4}-\d{2}-\d{2}/.test(dateStr);
        if (looksIso) {
            dateStr = dateStr.slice(0, 10);
        }
        metaHtml += '<span class="meta-pill">' + makeSafe(dateStr) + '</span>';
    }
    if (data.status) {
        metaHtml += '<span class ="meta-pill">' + makeSafe(data.status) + '</span>';
    }
    var genreHtml = "";
    var shownGenres = [];
    if (data.genres) {
        shownGenres = data.genres.slice(0, 6);
    }
    for (var i = 0; i < shownGenres.length; i++) {
        genreHtml += '<span class="genre-tag">' + makeSafe(shownGenres[i]) + '</span>';
    }
    var synopsisText = "No synopsis available for this pick.";
    if (data.synopsis) {
        synopsisText = cutShort(removeTags(data.synopsis), 420);
    }
    var noteHtml = "";
    if (data.belowSeven) {
        noteHtml = '<p class = "info-note">Could not find one above 7★ after a few tries, this was the closest match.</p>';
    }
    var linkHtml = "";
    if (data.url) {
        linkHtml = '<a class="info-link" href="' + data.url + '" target="_blank" rel="noopener">View source -></a>';
    }
    var trailerBtnHtml = "";
    if (data.trailer) {
        trailerBtnHtml = '<button class="trailer-btn" id="watchTrailerBtn">' + platformIcon("youtube") + '<span class="btn-label">Watch Trailer</span></button>';
    }
    var watchLinkHtml = "";
    var watchLinkHtml2 = "";
    var watchLinkHtml3 = "";
    var searchQuery = encodeURIComponent(data.title);

    if (kind === "anime") {
        watchLinkHtml = '<button class="watch-btn crunchyroll-btn" id="watchNowBtn1" data-url="https://www.crunchyroll.com/search?q=' + searchQuery + '">' + platformIcon("crunchyroll") + '<span class="btn-label">Crunchyroll</span></button>';
        watchLinkHtml2 = '<button class="watch-btn netflix-btn" id="watchNowBtn2" data-url="https://www.netflix.com/search?q=' + searchQuery + '">' + platformIcon("netflix") + '<span class="btn-label">Netflix</span></button>';
        watchLinkHtml3 = '<button class="watch-btn hulu-btn" id="watchNowBtn3" data-url="https://animesuge.cz/filter?keyword=' + searchQuery + '">' + '<span class="btn-label">▶<span class="hulu-letter">A</span>nimeSuge</span></button>';
    } else {
        watchLinkHtml = '<button class="watch-btn mangadex-btn" id="watchNowBtn1" data-url="https://mangadex.org/search?q=' + searchQuery + '">' + platformIcon("mangadex") + '<span class="btn-label">MangaDex</span></button>';
        watchLinkHtml2 = '<button class="watch-btn viz-btn" id="watchNowBtn2" data-url="https://www.viz.com/search?word=' + searchQuery + '">' + platformIcon("viz") + '<span class="btn-label">Viz</span></button>';
        watchLinkHtml3 = '<button class="watch-btn bookwalker-btn" id="watchNowBtn3" data-url="https://global.bookwalker.jp/search/?word=' + searchQuery + '">' + platformIcon("bookwalker") + '<span class="btn-label">BookWalker</span></button>';
    }
    var subtitleHtml = "";
    if (data.titleNative && data.titleNative !== data.title) {
        subtitleHtml = '<p class="info-subtitle">' + makeSafe(data.titleNative) + '</p>';
    }

    var saveBtnHtml = "";
    if (data.url) {
        saveBtnHtml = '<button class="save-btn" id="saveItemBtn">☆<span class="btn-label">Save</span></button>';
    }
    var activeBox = currentInfoBox();
    activeBox.innerHTML = '<h2 class="info-title">' + makeSafe(data.title) + '</h2>' +
        subtitleHtml +
        '<div class="info-meta">' + metaHtml + '</div>' +
        '<div class="info-genres">' + genreHtml + '</div>' +
        '<p class="info-synopsis">' + makeSafe(synopsisText) + '</p>' +
        noteHtml +
        trailerBtnHtml +
        watchLinkHtml +
        watchLinkHtml2 +
        watchLinkHtml3 +
        saveBtnHtml +
        linkHtml;
    var watchBtn1 = activeBox.querySelector("#watchNowBtn1");
    if (watchBtn1) {
        watchBtn1.addEventListener("click", function () {
            window.open(watchBtn1.dataset.url, "_blank");
        });
    }
    var watchBtn2 = activeBox.querySelector("#watchNowBtn2");
    if (watchBtn2) {
        watchBtn2.addEventListener("click", function () {
            window.open(watchBtn2.dataset.url, "_blank");
        });
        if (watchBtn2.classList.contains("netflix-btn")) {
            addNetflixScanBars(watchBtn2);
        }
    }
    var watchBtn3 = activeBox.querySelector("#watchNowBtn3");
    if (watchBtn3) {
        watchBtn3.addEventListener("click", function () {
            window.open(watchBtn3.dataset.url, "_blank");
        });
    }
    if (data.trailer) {
        activeBox.querySelector("#watchTrailerBtn").addEventListener("click", function () {
            trailerFrame.src = data.trailer + "?autoplay=1";
            trailerBox.classList.add("show");
            resizeCard(defaultRatio);
        });
    }
    var saveBtn = activeBox.querySelector("#saveItemBtn");
    if (saveBtn) {
        saveBtn.addEventListener("click", function () {
            handleSaveClick(data, kind, saveBtn);
        });
        syncSaveBtn(data, saveBtn);
    }
}
//for the history, backward and forward feature, now you can do back and forth \0-0/
var pickHistory = {
    anime: { list: [], index: -1 },
    manga: { list: [], index: -1 }
};
var seenTitles = {
    anime: [],
    manga: []
};
function currentKind() {
    if (mangaTab.classList.contains("active-tab")) {
        return "manga";
    }
    return "anime";
}
function currentHistory() {
    return pickHistory[currentKind()];
}
function syncNavButtons() {
    var hist = currentHistory();
    backBtn.disabled = hist.index <= 0;
    forwardBtn.disabled = hist.index >= hist.list.length - 1;
}
function addToHistory(result) {
    var hist = currentHistory();
    hist.list = hist.list.slice(0, hist.index + 1);
    hist.list.push(result);
    hist.index = hist.list.length - 1;
    syncNavButtons();
}
function goBack() {
    var hist = currentHistory();
    if (hist.index > 0) {
        hist.index--;
        displayPick(hist.list[hist.index], currentKind());
    }
    syncNavButtons();
}
function goForward() {
    var hist = currentHistory();
    if (hist.index < hist.list.length - 1) {
        hist.index++;
        displayPick(hist.list[hist.index], currentKind());
    }
    syncNavButtons();
}
backBtn.addEventListener("click", goBack);
forwardBtn.addEventListener("click", goForward);
function pickOneGenre(genreList) {
    if (genreList.length === 0) {
        return [];
    }
    return [pickRandom(genreList)];
}
async function pull() {
    var kind = "anime";
    if (mangaTab.classList.contains("active-tab")) {
        kind = "manga";
    }
    var genreList = getPickedGenres();
    var genreForThisPull = pickOneGenre(genreList);
    var bestRated = bestRatedChecked();
    recommendBtn.disabled = true;
    recommendBtn.innerText = "searching....";
    startLoading(kind);
    var result = null;
    var howManyTries = 6;
    var fallbackPick = null;
    for (var i = 0; i < howManyTries; i++) {
        var pick = await getRandomPick(kind, genreForThisPull, bestRated);
        if (!pick) continue;
        fallbackPick = pick;
        var wasSeen = seenTitles[kind].indexOf(pick.title) !== -1;
        if (!wasSeen) {
            result = pick;
        }
        if (!bestRated && result) {
            break;
        }
        if (bestRated && result && result.score && Number(result.score) >= 7) {
            break;
        }
    }
    if (!result) {
        result = fallbackPick;
    }
    if (result) {
        seenTitles[kind].push(result.title);
        if (bestRated && (!result.score || Number(result.score) < 7)) {
            result.belowSeven = true;
        }
        if (kind === currentKind()) {
            displayPick(result, kind);
            addToHistory(result);
        }
    } else {
        if (kind === currentKind()) {
            showFail();
        }
    }
    recommendBtn.disabled = false;
    recommendBtn.innerText = "Recommend Me";
}
recommendBtn.addEventListener("click", pull);
recommendBtn.addEventListener("click", function () {
    var clickSound = new Audio("SFX/click.mp3");
    clickSound.play();
});
resizeCard(defaultRatio);
syncNavButtons();

var currentUser = null;
const verifyFormWrap = document.getElementById("verify-form-wrap");
const verifyCodeInput = document.getElementById("verify-code-input");
const verifySubmitBtn = document.getElementById("verify-submit-btn");
const verifyError = document.getElementById("verify-error");
const resendCodeLink = document.getElementById("resend-code-link");
var LOCAL_SAVED_KEY = "anisuffle_guest_saved";

function loadLocalSaves() {
    try {
        var raw = localStorage.getItem(LOCAL_SAVED_KEY);
        var parsed = [];
        if (raw) {
            parsed = JSON.parse(raw);
        }
        if (Array.isArray(parsed)) {
            return parsed;
        }
        return [];
    } catch (e) {
        return [];
    }
}
function writeLocalSaves(items) {
    try {
        localStorage.setItem(LOCAL_SAVED_KEY, JSON.stringify(items));
    } catch (e) {
        //storage full or disabled (private browsing etc), nothing we can do about it -_-, hopefully you dont reach this point -_-
        console.log("couldnt write to localStorage, reason: ", e.message);
    }
}
function localSaveIndex(items, source, externalId) {
    for (var i = 0; i < items.length; i++) {
        if (items[i].source === source && items[i].external_id === externalId) {
            return i;
        }
    }
    return -1;
}
function savedLocally(source, externalId) {
    return localSaveIndex(loadLocalSaves(), source, externalId) !== -1;
}
function flipLocalSave(data, kind) {
    var items = loadLocalSaves();
    var idx = localSaveIndex(items, data.source || "", data.url);
    var justSaved;
    if (idx !== -1) {
        items.splice(idx, 1);
        justSaved = false;
    } else {
        var genresText = null;
        if (data.genres) {
            genresText = data.genres.join(",");
        }
        items.unshift({
            item_type: kind,
            source: data.source || "",
            external_id: data.url,
            title: data.title,
            image_url: data.poster || null,
            rating: data.score || null,
            status_label: data.status || null,
            genres: genresText,
            synopsis: data.synopsis || null,
            trailer_url: data.trailer || null,
            saved_at: new Date().toISOString()
        });
        justSaved = true;
    }
    writeLocalSaves(items);
    return justSaved;
}
function deleteLocalSave(source, externalId) {
    var items = loadLocalSaves();
    var idx = localSaveIndex(items, source, externalId);
    if (idx !== -1) {
        items.splice(idx, 1);
        writeLocalSaves(items);
    }
}

function paintSaveBtn(btn, isSaved) {
    if (!btn) {
        return;
    }
    btn.classList.toggle("is-saved", isSaved);
    var star = "☆";
    var label = "Save";
    if (isSaved) {
        star = "★";
        label = "Saved";
    }
    btn.innerHTML = star + '<span class="btn-label">' + label + '</span>';
}

function syncSaveBtn(data, btn) {
    if (!currentUser || !currentUser.verified) {
        paintSaveBtn(btn, savedLocally(data.source || "", data.url));
        return;
    }
    fetch("Backend/check_saved.php?source=" + encodeURIComponent(data.source || "") + "&external_id=" + encodeURIComponent(data.url))
        .then(function (res) { return res.json(); })
        .then(function (json) {
            paintSaveBtn(btn, !!json.saved);
        })
        .catch(function () {
            paintSaveBtn(btn, false);
        });
}

function handleSaveClick(data, kind, btn) {
    if (!currentUser || !currentUser.verified) {
        var justSaved = flipLocalSave(data, kind);
        paintSaveBtn(btn, justSaved);
        return;
    }
    var savedAlready = btn.classList.contains("is-saved");
    var endpoint = "Backend/save_item.php";
    if (savedAlready) {
        endpoint = "Backend/unsave_item.php";
    }
    var genresText = null;
    if (data.genres) {
        genresText = data.genres.join(",");
    }
    var payload = {
        item_type: kind,
        source: data.source || "",
        external_id: data.url,
        title: data.title,
        image_url: data.poster || null,
        rating: data.score || null,
        status_label: data.status || null,
        genres: genresText,
        synopsis: data.synopsis || null,
        trailer_url: data.trailer || null
    };
    btn.disabled = true;
    fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })
        .then(function (res) { return res.json(); })
        .then(function (json) {
            if (json.success) {
                paintSaveBtn(btn, json.saved);
            }
        })
        .catch(function (e) {
            console.log("couldnt save/unsave, reason: ", e.message);
        })
        .finally(function () {
            btn.disabled = false;
        });
}

function setGenieStartPoint(originBtn) {
    var modalBox = authModalOverlay.querySelector(".modal-box");
    if (!originBtn) {
        modalBox.style.removeProperty("--genie-x");
        modalBox.style.removeProperty("--genie-y");
        modalBox.style.removeProperty("--genie-scale");
        modalBox.style.removeProperty("--genie-radius");
        return;
    }
    var btnBox = originBtn.getBoundingClientRect();
    var btnCenterX = btnBox.left + btnBox.width / 2;
    var btnCenterY = btnBox.top + btnBox.height / 2;

    var screenCenterX = window.innerWidth / 2;
    var screenCenterY = window.innerHeight / 2;

    var moveX = btnCenterX - screenCenterX;
    var moveY = btnCenterY - screenCenterY;

    modalBox.style.setProperty("--genie-x", moveX + "px");
    modalBox.style.setProperty("--genie-y", moveY + "px");
    modalBox.style.setProperty("--genie-scale", "0.1");
    modalBox.style.setProperty("--genie-radius", "50%");
}
//the flip animation ;)
function swapAuthForm(which) {
    loginError.textContent = "";
    signupError.textContent = "";
    var formGoingAway = signupFormWrap;
    var formComingIn = loginFormWrap;
    if (which === "signup") {
        formGoingAway = loginFormWrap;
        formComingIn = signupFormWrap;
    }

    formGoingAway.classList.add("form-flip-out");
    formGoingAway.addEventListener("animationend", function flipOutFinished() {
        formGoingAway.removeEventListener("animationend", flipOutFinished);
        formGoingAway.classList.remove("form-flip-out");
        formGoingAway.style.display = "none";
        formComingIn.style.display = "block";
        formComingIn.classList.add("form-flip-in");
        formComingIn.addEventListener("animationend", function flipInFinished() {
            formComingIn.removeEventListener("animationend", flipInFinished);
            formComingIn.classList.remove("form-flip-in");
        });
    });
}
function showAuthModal(which, originBtn) {
    loginError.textContent = "";
    signupError.textContent = "";
    verifyFormWrap.style.display = "none"; 
    if (which === "signup") {
        loginFormWrap.style.display = "none";
        signupFormWrap.style.display = "block";
    } else {
        signupFormWrap.style.display = "none";
        loginFormWrap.style.display = "block";
    }
    setGenieStartPoint(originBtn);
    moreMenuDropdown.classList.remove("show");
    authModalOverlay.classList.add("show");
}
function hideAuthModal() {
    authModalOverlay.classList.remove("show");
}
loginBtn.addEventListener("click", function () { showAuthModal("login", loginBtn); });
signupBtn.addEventListener("click", function () { showAuthModal("signup", signupBtn); });
authModalClose.addEventListener("click", hideAuthModal);
authModalOverlay.addEventListener("click", function (e) {
    if (e.target === authModalOverlay) {
        hideAuthModal();
    }
});
showSignupLink.addEventListener("click", function (e) {
    e.preventDefault();
    swapAuthForm("signup");
});
showLoginLink.addEventListener("click", function (e) {
    e.preventDefault();
    swapAuthForm("login");
});

function paintAuthUI() {
    myListBtn.style.display = "inline-flex";
    if (currentUser) {
        logoutBtn.style.display = "inline-flex";
        usernameDisplay.style.display = "inline";
        if (currentUser.verified) {
            usernameDisplay.textContent = "Hi, " + currentUser.username;
        } else {
            usernameDisplay.textContent = "";
            usernameDisplay.appendChild(document.createTextNode("Hi, " + currentUser.username + " "));
            var badge = document.createElement("a");
            badge.href = "#";
            badge.id = "unverified-badge";
            badge.textContent = "(unverified, click to verify)";
            usernameDisplay.appendChild(badge);
            badge.addEventListener("click", function (e) {
                e.preventDefault();
                loginFormWrap.style.display = "none";
                signupFormWrap.style.display = "none";
                verifyError.textContent = "";
                verifyFormWrap.style.display = "block";
                setGenieStartPoint(usernameDisplay);
                authModalOverlay.classList.add("show");
            });
        }
        loginBtn.style.display = "none";
        signupBtn.style.display = "none";
    } else {
        logoutBtn.style.display = "none";
        usernameDisplay.style.display = "none";
        loginBtn.style.display = "inline-flex";
        signupBtn.style.display = "inline-flex";
    }
    var saveBtn = currentInfoBox().querySelector("#saveItemBtn");
    if (saveBtn) {
        var currentHist = currentHistory();
        var shown = currentHist.list[currentHist.index];
        if (shown && shown.url) {
            syncSaveBtn(shown, saveBtn);
        }
    }
}

function checkSession() {
    fetch("Backend/session_check.php")
        .then(function (res) { return res.json(); })
        .then(function (json) {
            // CHANGED — added verified
            if (json.loggedIn) {
                currentUser = { username: json.username, verified: json.is_verified };
            } else {
                currentUser = null;
            }
            paintAuthUI();
        })
        .catch(function () {
            currentUser = null;
            paintAuthUI();
        });
}
//pressing enter in either login field click the login button for you =)
loginIdentifier.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        loginSubmitBtn.click();
    }
});
loginPassword.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        loginSubmitBtn.click();
    }
})
loginSubmitBtn.addEventListener("click", function () {
    loginError.textContent = "";
    var identifier = loginIdentifier.value.trim();
    var password = loginPassword.value;
    if (!identifier || !password) {
        loginError.textContent = "Please fill in both fields.";
        return;
    }
    loginSubmitBtn.disabled = true;
    fetch("Backend/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier: identifier, password: password })
    })
        .then(function (res) { return res.json(); })
        .then(function (json) {
            if (json.success) {
                currentUser = { username: json.username, verified: json.is_verified }; // CHANGED — added verified
                paintAuthUI();
                hideAuthModal();
                loginIdentifier.value = "";
                loginPassword.value = "";
                // if have guest saves sitting in localStorage and this
                // account is already verified then it will move those saves in right away¬‿¬
                if (currentUser.verified) {
                    moveLocalSavesToAccount();
                }
            } else {
                loginError.textContent = json.error || "Login failed.";
            }
        })
        .catch(function () {
            loginError.textContent = "Something went wrong. Try again.";
        })
        .finally(function () {
            loginSubmitBtn.disabled = false;
        });
});
//pressing enter in any sigup field clicks the sign up button for you =)
signupUsername.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        signupSubmitBtn.click();
    }
});
signupEmail.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        signupSubmitBtn.click();
    }
});
signupPassword.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        signupSubmitBtn.click();
    }
})
signupSubmitBtn.addEventListener("click", function () {
    signupError.textContent = "";
    var username = signupUsername.value.trim();
    var email = signupEmail.value.trim();
    var password = signupPassword.value;
    if (!username || !email || !password) {
        signupError.textContent = "Please fill in all fields.";
        return;
    }
    signupSubmitBtn.disabled = true;
    fetch("Backend/register.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, email: email, password: password })
    })
        .then(function (res) { return res.json(); })
        .then(function (json) {
            if (json.success) {
                currentUser = { username: json.username, verified: json.is_verified }; 
                paintAuthUI();
                signupUsername.value = "";
                signupEmail.value = "";
                signupPassword.value = "";
                signupFormWrap.style.display = "none";
                verifyError.textContent = "";
                verifyCodeInput.value = "";
                verifyFormWrap.style.display = "block";
            } else {
                signupError.textContent = json.error || "Sign up failed.";
            }
        })
        .catch(function () {
            signupError.textContent = "Something went wrong. Try again.";
        })
        .finally(function () {
            signupSubmitBtn.disabled = false;
        });
});


verifyCodeInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        verifySubmitBtn.click();
    }
});
verifySubmitBtn.addEventListener("click", function () {
    verifyError.textContent = "";
    var code = verifyCodeInput.value.trim();
    if (!code) {
        verifyError.textContent = "Please enter the code.";
        return;
    }
    verifySubmitBtn.disabled = true;
    fetch("Backend/verify_email.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: code })
    })
        .then(function (res) { return res.json(); })
        .then(function (json) {
            if (json.success) {
                currentUser.verified = true;
                paintAuthUI();
                hideAuthModal();
                verifyCodeInput.value = "";
                moveLocalSavesToAccount(); 
            } else {
                verifyError.textContent = json.error || "Verification failed.";
            }
        })
        .catch(function () {
            verifyError.textContent = "Something went wrong. Try again.";
        })
        .finally(function () {
            verifySubmitBtn.disabled = false;
        });
});
resendCodeLink.addEventListener("click", function (e) {
    e.preventDefault();
    verifyError.textContent = "";
    fetch("Backend/resend_code.php", { method: "POST" })
        .then(function (res) { return res.json(); })
        .then(function (json) {
            if (json.success) {
                verifyError.textContent = "New code sent, check your email.";
            } else {
                verifyError.textContent = json.error || "Couldnt resend the code.";
            }
        })
        .catch(function () {
            verifyError.textContent = "Something went wrong. Try again.";
        });
});

function moveLocalSavesToAccount() {
    var localLeft = loadLocalSaves();
    if (localLeft.length === 0) {
        return;
    }
    moveNextLocalSave(localLeft);
}
function moveNextLocalSave(localLeft) {
    if (localLeft.length === 0) {
        writeLocalSaves(localLeft);
        return;
    }
    var item = localLeft[0];
    var payload = {
        item_type: item.item_type,
        source: item.source,
        external_id: item.external_id,
        title: item.title,
        image_url: item.image_url,
        rating: item.rating,
        status_label: item.status_label,
        genres: item.genres,
        synopsis: item.synopsis,
        trailer_url: item.trailer_url
    };
    fetch("Backend/save_item.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })
        .then(function (res) { return res.json(); })
        .then(function (json) {
            if (json.success) {
                localLeft.shift();
                writeLocalSaves(localLeft);
            }
            moveNextLocalSave(localLeft);
        })
        .catch(function () {
        });
}

logoutBtn.addEventListener("click", function () {
    fetch("Backend/logout.php", { method: "POST" })
        .then(function () {
            currentUser = null;
            paintAuthUI();
        });
});
function openSavedItem(item) {
    if (item.item_type === "manga") {
        mangaTab.click();
    } else {
        animeTab.click();
    }
    var genresList = [];
    if (item.genres) {
        genresList = item.genres.split(",");
    }
    var pickData = {
        title: item.title,
        poster: item.image_url,
        score: item.rating,
        status: item.status_label,
        source: item.source,
        url: item.external_id,
        genres: genresList,
        synopsis: item.synopsis || null,
        trailer: item.trailer_url || null
    };
    displayPick(pickData, item.item_type);
    addToHistory(pickData);
    screenBody.classList.add("slide-in");
    savedListModalOverlay.classList.remove("show");
}
function buildSavedCard(item) {
    var img = '<img alt="">';
    if (item.image_url) {
        img = '<img src="' + makeSafe(item.image_url) + '" alt="">';
    }
    var ratingText = "";
    if (item.rating) {
        ratingText = "★ " + makeSafe(item.rating) + "/10";
    }
    var typeText = "Anime";
    if (item.item_type === "manga") {
        typeText = "Manga";
    }
    var ratingPart = "";
    if (ratingText) {
        ratingPart = ' · ' + ratingText;
    }
    var card = document.createElement("div");
    card.className = "saved-card";
    card.innerHTML =
        img +
        '<div class="saved-card-info">' +
        '<div>' +
        '<div class="saved-card-title">' + makeSafe(item.title) + '</div>' +
        '<div class="saved-card-meta">' + typeText + ' · ' + makeSafe(item.source) + ratingPart + '</div>' +
        '</div>' +
        '<button class="saved-card-remove">Remove</button>' +
        '</div>';
    card.style.cursor = "pointer";
    card.addEventListener("click", function () {
        openSavedItem(item);
    })
    function afterRemove() {
        card.remove();
        var saveBtn = currentInfoBox().querySelector("#saveItemBtn");
        if (saveBtn) {
            var currentHist = currentHistory();
            var shown = currentHist.list[currentHist.index];
            if (shown && shown.url === item.external_id) {
                paintSaveBtn(saveBtn, false);
            }
        }
        if (!savedListGrid.children.length) {
            savedListEmpty.style.display = "block";
        }
    }
    card.querySelector(".saved-card-remove").addEventListener("click", function (e) {
        e.stopPropagation();
        if (!currentUser || !currentUser.verified) {
            deleteLocalSave(item.source, item.external_id);
            afterRemove();
            return;
        }
        fetch("Backend/unsave_item.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ source: item.source, external_id: item.external_id })
        })
            .then(function (res) { return res.json(); })
            .then(afterRemove);
    });
    return card;
}

function loadSavedList() {
    savedListGrid.innerHTML = "";
    savedListEmpty.textContent = "You haven't saved anything yet.";
    savedListEmpty.style.display = "none";
    if (!currentUser || !currentUser.verified) {
        var localItems = loadLocalSaves().filter(function (it) {
            return it.item_type === savedListActiveType;
        });
        if (localItems.length === 0) {
            savedListEmpty.style.display = "block";
            return;
        }
        localItems.forEach(function (item) {
            savedListGrid.appendChild(buildSavedCard(item));
        });
        return;
    }
    fetch("Backend/get_saved_items.php?type=" + savedListActiveType)
        .then(function (res) { return res.json(); })
        .then(function (json) {
            if (!json.success || !json.items || json.items.length === 0) {
                savedListEmpty.style.display = "block";
                return;
            }
            json.items.forEach(function (item) {
                savedListGrid.appendChild(buildSavedCard(item));
            });
        })
        .catch(function () {
            savedListEmpty.textContent = "Couldn't load your list. Try again later.";
            savedListEmpty.style.display = "block";
        });
}

myListBtn.addEventListener("click", function () {
    savedListModalOverlay.classList.add("show");
    loadSavedList();
});
savedAnimeTabBtn.addEventListener("click", function () {
    savedListActiveType = "anime";
    savedAnimeTabBtn.classList.add("active-tab");
    savedMangaTabBtn.classList.remove("active-tab");
    loadSavedList();
});
savedMangaTabBtn.addEventListener("click", function () {
    savedListActiveType = "manga";
    savedMangaTabBtn.classList.add("active-tab");
    savedAnimeTabBtn.classList.remove("active-tab");
    loadSavedList();
})
savedListClose.addEventListener("click", function () {
    savedListModalOverlay.classList.remove("show");
});
savedListModalOverlay.addEventListener("click", function (e) {
    if (e.target === savedListModalOverlay) {
        savedListModalOverlay.classList.remove("show");
    }
});
function setupPasswordToggle(toggleBtn, passwordInput) {
    var icon = toggleBtn.querySelector(".eye-icon");
    toggleBtn.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            icon.src = "Images/Passwords/eye-close.png";
        } else {
            passwordInput.type = "password";
            icon.src = "Images/Passwords/eye-open.png";
        }
    });
}
setupPasswordToggle(loginPasswordToggle, loginPassword);
setupPasswordToggle(signupPasswordToggle, signupPassword);
checkSession();