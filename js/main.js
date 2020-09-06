const menuItemElementTwo = document.querySelector(".menu__item-element-two");
const menuItemElementFour = document.querySelector(".menu__item-element-four");
const subMenuElementTwo = document.querySelector(".sub-menu-element-two");
const subMenuElementFour = document.querySelector(".sub-menu-element-four");
const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileMenuButtonIcon = document.querySelector(".mobile-menu-button-icon");
const mobileMenuButtonIconClose = document.querySelector(
  ".mobile-menu-button-icon-close"
);
const menu = document.querySelector(".menu");
let isTouchDevice = false;

const setSizeMenu = (screenWidth, orientation) => {
  if (orientation === "portrait-primary" && screenWidth < 768) {
    menu.style.height = "60%";
  } else if (orientation === "landscape-primary" && screenWidth < 768) {
    menu.style.height = "70%";
  }
};

const sensorDeviceDefinition = () => {
  return "ontouchstart" in window;
};

window.onload = () => {
  const screenWidth = window.innerWidth;
  const orientation = window.screen.orientation.type;

  setSizeMenu(screenWidth, orientation);

  isTouchDevice = sensorDeviceDefinition();
};

window.addEventListener("orientationchange", () => {
  const screenWidth = window.innerWidth;
  const orientation = window.screen.orientation.type;

  setSizeMenu(screenWidth, orientation);
});

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
