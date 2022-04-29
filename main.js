const toggleButton = document.querySelector(".toggle__button");
const navbarContainer = document.querySelector(".nav__container");

toggleButton.addEventListener("click", () => {
  navbarContainer.classList.toggle("active");
});

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
});
