window.addEventListener("scroll", function () {
  let header = document.querySelector(".header_area");
  header.classList.toggle("sticky", window.scrollY > 400);
});

let mybutton = document.getElementById("myBtn_top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
  let maxScrollY = 400;
  let maxScrollY2 = 2000;
  let maxScrollY3 = 3350;
  let maxScrollY4 = 3950;
  for (let i = 1; i < 4; i++) {
    if (
      document.body.scrollTop > maxScrollY ||
      document.documentElement.scrollTop > maxScrollY
    ) {
      document.getElementById(`heading${i}`).style.visibility = "visible";
      document.getElementById(`heading${i}`).classList.add("my_fade_in_up_1");
    }
    maxScrollY += 1450;
  }
  if (
    document.body.scrollTop > maxScrollY2 ||
    document.documentElement.scrollTop > maxScrollY2
  ) {
    for (let i = 1; i < 4; i++) {
      document.getElementById(`product_like${i}`).style.visibility = "visible";
      document
        .getElementById(`product_like${i}`)
        .classList.add(`my_fade_in_up_${i}`);
    }
  }
  if (
    document.body.scrollTop > maxScrollY3 ||
    document.documentElement.scrollTop > maxScrollY3
  ) {
    for (let i = 1; i < 4; i++) {
      document.getElementById(`product_top${i}`).style.visibility = "visible";
      document
        .getElementById(`product_top${i}`)
        .classList.add(`my_fade_in_up_${i}`);
    }
  }
  if (
    document.body.scrollTop > maxScrollY4 ||
    document.documentElement.scrollTop > maxScrollY4
  ) {
    for (let i = 1; i < 5; i++) {
      document.getElementById(`cate_ani${i}`).style.visibility = "visible";
      document
        .getElementById(`cate_ani${i}`)
        .classList.add(`my_fade_in_up_${i}`);
    }
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
