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
const subMenuElementTwoButtonElementTwo = document.querySelector(
  ".sub-menu-element-two__button-element-two"
);
const subMenuElementTwoItemElementTwo = document.querySelector(
  ".sub-menu-element-two__item-element-two"
);
const subSubMenuElementTwo = document.querySelector(
  ".sub-sub-menu-element-two"
);
let isTouchDevice = false;

const sensorDeviceDefinition = () => {
  return "ontouchstart" in window;
};

const subMenuElementTwoToggle = () => {
  if (
    subMenuElementTwo.style.display === "none" ||
    subMenuElementTwo.style.display === ""
  ) {
    menuButtonElementTwo.classList.toggle("menu__button-element-two_reversed");
    subMenuElementTwo.style.display = "flex";
    menuItemElementTwo.style.height = "294px";
  } else {
    menuButtonElementTwo.classList.toggle("menu__button-element-two_reversed");
    subMenuElementTwo.style.display = "none";
    menuItemElementTwo.style.height = "42px";
  }
};

const subMenuElementFourToggle = () => {
  if (
    subMenuElementFour.style.display === "none" ||
    subMenuElementFour.style.display === ""
  ) {
    menuButtonElementFour.classList.toggle(
      "menu__button-element-four_reversed"
    );
    subMenuElementFour.style.display = "flex";
    menuItemElementFour.style.height = "102px";
  } else {
    menuButtonElementFour.classList.toggle(
      "menu__button-element-four_reversed"
    );
    subMenuElementFour.style.display = "none";
    menuItemElementFour.style.height = "42px";
  }
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
  menu.classList.toggle("menu_open");
});

menuButtonElementTwo.addEventListener("click", () => {
  if (subMenuElementFour.style.display === "flex") subMenuElementFourToggle();

  subMenuElementTwoToggle();
});

menuButtonElementFour.addEventListener("click", () => {
  if (subMenuElementTwo.style.display === "flex") subMenuElementTwoToggle();

  subMenuElementFourToggle();
});

subMenuElementTwoButtonElementTwo.addEventListener("click", () => {
  if (
    subSubMenuElementTwo.style.display === "none" ||
    subSubMenuElementTwo.style.display === ""
  ) {
    subMenuElementTwoButtonElementTwo.classList.toggle(
      "sub-menu-element-two__button-element-two_reversed"
    );
    subSubMenuElementTwo.style.display = "flex";
    subMenuElementTwo.style.height = "378px";
    subMenuElementTwoItemElementTwo.style.height = "168px";
    menuItemElementTwo.style.height = "420px";
  } else {
    subMenuElementTwoButtonElementTwo.classList.toggle(
      "sub-menu-element-two__button-element-two_reversed"
    );
    subSubMenuElementTwo.style.display = "none";
    subMenuElementTwo.style.height = "252px";
    subMenuElementTwoItemElementTwo.style.height = "42px";
    menuItemElementTwo.style.height = "294px";
  }
});
