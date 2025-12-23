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

// Load Out

const LoaderApp = document.querySelector('.body1');
const MainContent = document.querySelector('.the-main');

setTimeout(() => {
  LoaderApp.style.display = 'none';
  MainContent.style.opacity = '1';
}, 2500); // 2.5 seconds