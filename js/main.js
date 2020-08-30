const menuItemElementTwo = document.querySelector(".menu__item-element-two");
const menuBackgroundContainer = document.querySelector(
  ".menu-background-container"
);
const subMenuElementTwo = document.querySelector(".sub-menu-element-two");

menuItemElementTwo.addEventListener("mouseenter", () => {
  subMenuElementTwo.classList.remove("sub-menu-element-two_hidden");
  menuBackgroundContainer.classList.remove("menu-background-container_hidden");
});

menuItemElementTwo.addEventListener("mouseleave", () => {
  subMenuElementTwo.classList.add("sub-menu-element-two_hidden");
  menuBackgroundContainer.classList.add("menu-background-container_hidden");
});
