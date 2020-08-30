const menuItemElementTwo = document.querySelector(".menu__item-element-two");
const menuItemElementFour = document.querySelector(".menu__item-element-four");
const menuBackgroundContainer = document.querySelector(
  ".menu-background-container"
);
const subMenuElementTwo = document.querySelector(".sub-menu-element-two");
const subMenuElementFour = document.querySelector(".sub-menu-element-four");

menuItemElementTwo.addEventListener("mouseenter", () => {
  subMenuElementTwo.classList.remove("sub-menu-element-two_hidden");
  menuBackgroundContainer.classList.remove("menu-background-container_hidden");
});

menuItemElementTwo.addEventListener("mouseleave", () => {
  subMenuElementTwo.classList.add("sub-menu-element-two_hidden");
  menuBackgroundContainer.classList.add("menu-background-container_hidden");
});

menuItemElementFour.addEventListener("mouseenter", () => {
  subMenuElementFour.classList.remove("sub-menu-element-four_hidden");
  menuBackgroundContainer.classList.remove("menu-background-container_hidden");
});

menuItemElementFour.addEventListener("mouseleave", () => {
  subMenuElementFour.classList.add("sub-menu-element-four_hidden");
  menuBackgroundContainer.classList.add("menu-background-container_hidden");
});
