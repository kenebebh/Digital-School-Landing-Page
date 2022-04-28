const toggleButton = document.querySelector(".toggle__button");
const navbarContainer = document.querySelector(".nav__list");

toggleButton.addEventListener("click", () => {
  navbarContainer.classList.toggle("active");
});

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
});
