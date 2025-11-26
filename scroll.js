const counters = document.querySelectorAll(".Box h2");
let started = false;

function startCount(el) {
  let target = el.innerText.replace(/[^0-9]/g, ""); 
  let count = 0;
  let speed = 20;

  let interval = setInterval(() => {
    count++;
    el.innerText = count + el.innerText.replace(/[0-9]/g, "");
    if (count >= target) clearInterval(interval);
  }, speed);
}

window.addEventListener("scroll", () => {
  const section = document.querySelector(".Table1");
  const position = section.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (position < screenHeight - 100 && !started) {
    counters.forEach((counter) => startCount(counter));
    started = true;
  }
});
