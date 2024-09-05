const btnPrev = document.querySelector(".prevBtn");
const btnNext = document.querySelector(".nextBtn");
const imgs = document.querySelectorAll(".slide");

imgs.forEach((img, index) => {
  img.style.left = `${index * 100}%`;
});

let counter = 0;

btnNext.addEventListener("click", function () {
  counter++;
  carousel();
});
btnPrev.addEventListener("click", function () {
  counter--;
  carousel();
});

function carousel() {
  if (counter === imgs.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = imgs.length - 1;
  }

  imgs.forEach((img) => {
    img.style.transform = `translateX(-${counter * 100}%)`;
  });
}
