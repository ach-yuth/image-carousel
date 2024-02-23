const images = document.querySelectorAll("img");
const image = document.querySelector(".image-carousel");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const buttons = document.querySelectorAll("button");

let idx = 0;

let interval = setInterval(run, 2000);

function run() {
  idx++;
  ChangeImage();
}
function ChangeImage() {
  if (idx > images.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = images.length - 1;
  }
  image.style.transform = `translateX(${-idx * 500}px)`;
}
function reset() {
  clearInterval(interval);
  interval = (run, 2000);
}
prev.addEventListener("click", () => {
  idx--;
  ChangeImage();
  reset();
});
next.addEventListener("click", () => {
  idx++;
  ChangeImage();
  reset();
});
