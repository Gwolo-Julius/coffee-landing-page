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


