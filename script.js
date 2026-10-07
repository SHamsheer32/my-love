/* =====================================
   ELEMENTS
===================================== */

const opening =
  document.getElementById("opening");

const website =
  document.getElementById("website");

const openButton =
  document.getElementById("openButton");

const music =
  document.getElementById("music");

const musicButton =
  document.getElementById("musicButton");

const surpriseButton =
  document.getElementById("surpriseButton");

const finalSection =
  document.getElementById("final");

const hearts =
  document.getElementById("hearts");



/* =====================================
   OPEN SURPRISE
===================================== */

openButton.addEventListener(
  "click",
  function () {

    opening.classList.add("hide");

    website.classList.add("show");

    createHearts();

    playMusic();

  }
);



/* =====================================
   MUSIC
===================================== */

let musicPlaying = false;


function playMusic() {

  music.play()
    .then(function () {

      musicPlaying = true;

      musicButton.innerHTML = "🔊";

    })

    .catch(function () {

      musicPlaying = false;

      musicButton.innerHTML = "🎵";

    });

}


musicButton.addEventListener(
  "click",
  function () {

    if (musicPlaying) {

      music.pause();

      musicPlaying = false;

      musicButton.innerHTML = "🎵";

    }

    else {

      music.play();

      musicPlaying = true;

      musicButton.innerHTML = "🔊";

    }

  }
);



/* =====================================
   FLOATING HEARTS
===================================== */

function createHearts() {

  for (
    let i = 0;
    i < 40;
    i++
  ) {

    const heart =
      document.createElement("span");


    heart.innerHTML =
      Math.random() > 0.5
        ? "❤️"
        : "💗";


    heart.style.left =
      Math.random() * 100 + "%";


    heart.style.fontSize =
      (15 + Math.random() * 30)
      + "px";


    heart.style.animationDuration =
      (5 + Math.random() * 7)
      + "s";


    heart.style.animationDelay =
      Math.random() * 8
      + "s";


    hearts.appendChild(heart);

  }

}



/* =====================================
   FINAL SURPRISE
===================================== */

surpriseButton.addEventListener(
  "click",
  function () {

    finalSection.classList.add("show");

    finalSection.scrollIntoView({
      behavior: "smooth"
    });

    heartExplosion();

  }
);



/* =====================================
   HEART EXPLOSION
===================================== */

function heartExplosion() {

  for (
    let i = 0;
    i < 70;
    i++
  ) {

    const heart =
      document.createElement("div");


    heart.innerHTML =
      Math.random() > .5
        ? "❤️"
        : "💖";


    heart.style.position =
      "fixed";


    heart.style.left =
      "50%";


    heart.style.top =
      "50%";


    heart.style.zIndex =
      "2000";


    heart.style.fontSize =
      (15 + Math.random() * 30)
      + "px";


    heart.style.pointerEvents =
      "none";


    document.body.appendChild(
      heart
    );


    const angle =
      Math.random() *
      Math.PI *
      2;


    const distance =
      200 +
      Math.random() * 500;


    const x =
      Math.cos(angle) *
      distance;


    const y =
      Math.sin(angle) *
      distance;


    heart.animate(

      [

        {
          transform:
            "translate(-50%, -50%) scale(0)",

          opacity: 1

        },

        {

          transform:
            `translate(
              calc(-50% + ${x}px),
              calc(-50% + ${y}px)
            ) scale(1.5)`,

          opacity: 0

        }

      ],

      {

        duration:
          1500 +
          Math.random() * 1500,

        easing:
          "ease-out"

      }

    );


    setTimeout(
      function () {
        heart.remove();
      },
      3200
    );

  }

}