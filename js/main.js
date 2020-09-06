const menuItemElementTwo = document.querySelector(".menu__item-element-two");
const menuItemElementFour = document.querySelector(".menu__item-element-four");
const subMenuElementTwo = document.querySelector(".sub-menu-element-two");
const subMenuElementFour = document.querySelector(".sub-menu-element-four");
const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileMenuButtonIcon = document.querySelector(".mobile-menu-button-icon");
const mobileMenuButtonIconClose = document.querySelector(
  ".mobile-menu-button-icon-close"
);
const menuButtonElementTwo = document.querySelector(
  ".menu__button-element-two"
);
const menuButtonElementFour = document.querySelector(
  ".menu__button-element-four"
);
const menu = document.querySelector(".menu");
let isTouchDevice = false;

const sensorDeviceDefinition = () => {
  return "ontouchstart" in window;
};

window.onload = () => {
  isTouchDevice = sensorDeviceDefinition();
};

menuItemElementTwo.addEventListener("mouseenter", () => {
  if (!isTouchDevice) {
    subMenuElementTwo.classList.remove("sub-menu-element-two_hidden");
  }
});

menuItemElementTwo.addEventListener("mouseleave", () => {
  if (!isTouchDevice) {
    subMenuElementTwo.classList.add("sub-menu-element-two_hidden");
  }
});

menuItemElementFour.addEventListener("mouseenter", () => {
  if (!isTouchDevice) {
    subMenuElementFour.classList.remove("sub-menu-element-four_hidden");
  }
});

menuItemElementFour.addEventListener("mouseleave", () => {
  if (!isTouchDevice) {
    subMenuElementFour.classList.add("sub-menu-element-four_hidden");
  }
});

mobileMenuButton.addEventListener("click", () => {
  mobileMenuButtonIcon.classList.toggle("mobile-menu-button-icon_hidden");
  mobileMenuButtonIconClose.classList.toggle(
    "mobile-menu-button-icon-close_hidden"
  );

  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
});

menuButtonElementTwo.addEventListener("click", () => {
  if (
    subMenuElementTwo.style.display === "none" ||
    subMenuElementTwo.style.display === ""
  ) {
    subMenuElementTwo.style.display = "flex";
    menuItemElementTwo.style.height = "292px";
  } else {
    subMenuElementTwo.style.display = "none";
    menuItemElementTwo.style.height = "42px";
  }
});

menuButtonElementFour.addEventListener("click", () => {
  if (
    subMenuElementFour.style.display === "none" ||
    subMenuElementFour.style.display === ""
  ) {
    subMenuElementFour.style.display = "flex";
    menuItemElementFour.style.height = "102px";
  } else {
    subMenuElementFour.style.display = "none";
    menuItemElementFour.style.height = "42px";
  }
});
