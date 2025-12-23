const circle = document.querySelector('.circle');
const dots = circle.getAttribute('dots');

let points = "";
const rotate = 360 / dots;

/* set rotation variable once */
circle.style.setProperty('--rot', `${rotate}deg`);

for (let i = 0; i < dots; i++) {
  points += `<div class="point" style="--i:${i}"></div>`;
}

circle.innerHTML = points;


// It's for Loader //

const LoaderApp = document.querySelector('.body1');
const MainContent = document.querySelector('.the-main');

/* Loader duration */
const LOADER_TIME = 2500;

setTimeout(() => {

  /* Fade loader out */
  LoaderApp.style.opacity = '0';

  setTimeout(() => {
    LoaderApp.style.display = 'none';

    /* Show main content */
    MainContent.style.visibility = 'visible';
    MainContent.style.opacity = '1';

    /* 🔥 Start AOS exactly now */
    AOS.refreshHard();

    /* Trigger AOS manually */
    document.dispatchEvent(new Event('aos:ready'));

  }, 600); // matches CSS transition

}, LOADER_TIME);