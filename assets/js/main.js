const closeBtn = document.querySelector(".close");
const navMenu = document.querySelector(".nav");
const hamBtn = document.querySelector(".hambuger");
const navLinks = document.querySelectorAll(".nav__link");

const openMenu = () => {
  navMenu.style.left = "0";
};
const closeMenu = () => {
  navMenu.style.left = "-100%";
};

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});
closeBtn.addEventListener("click", closeMenu);
hamBtn.addEventListener("click", openMenu);

/* @@@@@@@@@@ Swiper JS Library Code @@@@@@@@@@@@ */

const swiper = new Swiper(".review__container", {
  // Optional parameters
  // direction: "horizontal",
  loop: true,
  spaceBetween: 30,
  grabCursor: true,
  slidesPreView: "auto",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    800: {
      slidePreView: 3,
    },
    1024: {
      spaceBetween: 50,
    },
  },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});
// Navigation arrows

//   // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });
