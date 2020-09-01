const menuItemElementTwo = document.querySelector(".menu__item-element-two");
const menuItemElementFour = document.querySelector(".menu__item-element-four");
const subMenuElementTwo = document.querySelector(".sub-menu-element-two");
const subMenuElementFour = document.querySelector(".sub-menu-element-four");
const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileMenuButtonIcon = document.querySelector(".mobile-menu-button-icon");
const mobileMenuButtonIconClose = document.querySelector(
  ".mobile-menu-button-icon-close"
);

menuItemElementTwo.addEventListener("mouseenter", () => {
  subMenuElementTwo.classList.remove("sub-menu-element-two_hidden");
});

menuItemElementTwo.addEventListener("mouseleave", () => {
  subMenuElementTwo.classList.add("sub-menu-element-two_hidden");
});

menuItemElementFour.addEventListener("mouseenter", () => {
  subMenuElementFour.classList.remove("sub-menu-element-four_hidden");
});

menuItemElementFour.addEventListener("mouseleave", () => {
  subMenuElementFour.classList.add("sub-menu-element-four_hidden");
});

mobileMenuButton.addEventListener("click", () => {
  mobileMenuButtonIcon.classList.toggle("mobile-menu-button-icon_hidden");
  mobileMenuButtonIconClose.classList.toggle(
    "mobile-menu-button-icon-close_hidden"
  );
});
