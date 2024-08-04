function bottomArrow() {
  var addclass = document.getElementById("arrow");
  addclass.classList.toggle("toggle-add");

  //   var addclass = document.getElementById("arrow");
  //   addclass.classList.toggle("toggle-add");
}

// scrollToTopButton

function scrolltoptopFunc() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
window.onscroll = function () {
  buttonshowonScroll();
};
function buttonshowonScroll() {
  var button = document.getElementById("scrollbutton");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

// onscrolladdclassfunc

window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;

  // Define the scroll position where you want to add/remove the class
  var scrollThreshold = 200; // Change this value as per your requirement

  var element = document.querySelector(".navbar-nav");

  if (scrollPosition > scrollThreshold) {
    element.classList.add("add-header-bg");
  } else {
    element.classList.remove("add-header-bg");
  }
});

AOS.init();

document.addEventListener("DOMContentLoaded", (event) => {
  let count = 0;

  const incrementButton = document.getElementById("incrementButton");
  const valueDisplay = document.getElementById("valueDisplay");

  incrementButton.addEventListener("click", () => {
    count++;
    valueDisplay.textContent = count;
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
