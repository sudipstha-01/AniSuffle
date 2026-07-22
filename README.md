# AniSuffle

In this section I will be giving the overview of my entire project ,I will try to keep things simple.

So my project **"AniSuffle"** is a webpage where you can get random Anime/Manga recommendations.

But there is way more things I worked on , please let me explain.(I will explain them below)

---

#  Features

## Generate Random Anime/Manga

I have integrated **4 APIs** (**Jikan, Anilist, Kitsu And MangaDex**) . From which it is capable of fetching Anime/ Manga recommendations .

* Jikan
* Anilist
* Kitsu
* MangaDex

Jikan , Anilist , Kitsu all can fetch Both Manga and Anime while MangaDex is capable of fetching only Mangas info.

All of them work helping each other , lemme explain ,

Assume you are trying to fetch anime , then first the request will be sent to Jikan and if the limit has exceeded or due to any reason the API refuses to return any anime , then the request will be automatically be handed to Anilist and if it fails as well then it will be handed to Kitsu , but thats very unlikely that all of them will refuse , (Not impossible but..... ummm very unlikely to happen , if it does then it will show error , and you can simply fix it by just waiting ) ( •̀ ω •́ )✧

---

## Authentication (Login/SignUP)

I will make it clear that Loging in or signing in is **NOT COMPULSORY** , it doesnt hold hold you back from using any feature other than accessing the saved list on other devices ,

And if you are a reviewer(or anyone reading this is welcome) who wants to check the authentication system but dont want to use your personal details then you can use temporary email (though they wont load the theme correctly,) but will load the required code properly . **MAKE SURE TO USE UNIQUE USERNAME IN SIGNUP PAGE**

Just in case if someone doesnt know how to do it , I have also uploaded a video doing it on my devlog #12 . 

---

## LocalStorage to save your anime/manga

I have used localStorage to store the anime/manga info when you are not signed in.

---

## Database (to save your anime/manga)

When you sign in your saves will be directly saved in the database ,

also if you have saved any manga / anime in localstorage and later you sign in then your saves will be automatically sent to the database and your localStorage will be emptyed (i mean only this site's info, and i had to do it in order to avoid duplication)

---

## Genre selection

When getting random recommendations (or while suffling) you can get recommendations on the basis of your genre selection .

But there is a little things i want to make clear,

when you select comedy you are likely to get comedy almost all the time , but some APIs keep the name differently (not for all genre but for some of them ),

lemme give you an example :

If you select genre as space then you might get the related recommendation but with another genre name like umm.. space opera , or umm other planet or shipboard or something like that if available or it would display any random so that you wont have to wait long , as some of the genre has very less number of anime / manga .

(╯▽╰ )

---

## YouTube Embedded

(for trailers, no need to open new tab as it's embedded within the site) .

You should try this out =) .

But The trailer button will be available only on those anime/manga if any of those 4 API have the link of trailer stored , otherwise the Watch Trailer button will not appear.

---

## Switch Between Anime & Manga

Also you can switch between manga and anime tab.

---

## High rated first feature

(recommends anime / manga higher than 7 stars only)

---

## Save Anime/Manga

Stores in localStorage if not signed in.

Stores in database if signed in.

---

## Double Click = Save

I was inspired from the social media app , and i integrated it here.

If you double tap on the poster image , the anime / manga will be saved =)

(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧

---

## External links

You will get external links of both Anime / Manga with each Suffle ,

### For Anime its

* Crunchyroll
* Netflix
* AnimeSuge
* YouTube for trailer (if available)

### For Manga its

* MangaDex
* Viz
* BookWaler

Also let me tell you how it works with an example:

If the anime/manga title is **"abc"** and you click on the crunchyroll button then the link will not be able to pinpoint the exact anime/manga but it will search in crunchyroll for **"abc"** and will return you the page and it works almost all the time (if that anime/manga is availble in that particular site. Its the same for other external link like netflix ,Viz and other as well.

---

## Theme

And yes the theme i tried using is **Glassmorphism** and the intro username doesnt need to be unique , but while loging in the username needs to be =).

---

## CREDITS

SMTP : https://www.brevo.com/  <br>
NETFLIX HOVER: https://www.educrush.in/projects/netflix-button-animation  <br>
APIS: <br>
jikanBaseUrl = https://api.jikan.moe/v4 <br>
anilistUrl = https://graphql.anilist.co <br>
mangadexUrl = https://api.mangadex.org <br>
kitsuUrl = https://kitsu.io/api/edge <br>
Glassmorphism design: https://hype4.academy/tools/glassmorphism-generator <br>
SVG : https://animejs.com/documentation/svg/createdrawable <br>
Mute Btn (when hover trailer is on) : https://uiverse.io/catraco/dry-robin-61 <br>
CheckBox Animation (On hover trailer) : https://uiverse.io/00Kubi/hot-dragonfly-56 <br>
Card hover effect(by Mark Miro) : https://freefrontend.com/javascript-cards/ <br> 
---

## ( •̀ ω •́ )✧

I guess I covered everything ,


---

# Thank you so much for reading.
I really really really really really really hope you will enjoy this project . 
Thank you so so so much.

