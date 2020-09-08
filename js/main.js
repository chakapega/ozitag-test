const menuItemElementTwo = document.querySelector(".menu__item-element-two");
const menuItemElementFour = document.querySelector(".menu__item-element-four");
const subMenuElementTwo = document.querySelector(".sub-menu-element-two");
const subMenuElementFour = document.querySelector(".sub-menu-element-four");
const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileMenuButtonIcon = document.querySelector(
  ".mobile-menu-button__icon"
);
const mobileMenuButtonIconClose = document.querySelector(
  ".mobile-menu-button__icon-close"
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
const subMenuElementTwoButtonElementFour = document.querySelector(
  ".sub-menu-element-two__button-element-four"
);
const subMenuElementTwoItemElementFour = document.querySelector(
  ".sub-menu-element-two__item-element-four"
);
const subSubMenuElementTwo = document.querySelector(
  ".sub-sub-menu-element-two"
);
const subSubMenuElementFour = document.querySelector(
  ".sub-sub-menu-element-four"
);
let isTouchDevice = false;

const sensorDeviceDefinition = () => {
  const { innerWidth } = window;

  return "ontouchstart" in window || +innerWidth < 768;
};

const subMenuElementTwoToggle = () => {
  menuButtonElementTwo.classList.toggle("menu__button-element-two_reversed");
  subMenuElementTwo.classList.toggle("sub-menu-element-two_hidden");
};

const subMenuElementFourToggle = () => {
  menuButtonElementFour.classList.toggle("menu__button-element-four_reversed");
  subMenuElementFour.classList.toggle("sub-menu-element-four_hidden");
};

const subSubMenuElementTwoToggle = () => {
  subMenuElementTwoButtonElementTwo.classList.toggle(
    "sub-menu-element-two__button-element-two_reversed"
  );
  subSubMenuElementTwo.classList.toggle("sub-sub-menu-element-two_hidden");
};

const subSubMenuElementFourToggle = () => {
  subMenuElementTwoButtonElementFour.classList.toggle(
    "sub-menu-element-two__button-element-four_reversed"
  );
  subSubMenuElementFour.classList.toggle("sub-sub-menu-element-four_hidden");
};

window.onload = () => {
  isTouchDevice = sensorDeviceDefinition();
};

menuItemElementTwo.addEventListener("mouseenter", () => {
  if (!isTouchDevice)
    subMenuElementTwo.classList.remove("sub-menu-element-two_hidden");
});

menuItemElementTwo.addEventListener("mouseleave", () => {
  if (!isTouchDevice)
    subMenuElementTwo.classList.add("sub-menu-element-two_hidden");
});

menuItemElementFour.addEventListener("mouseenter", () => {
  if (!isTouchDevice)
    subMenuElementFour.classList.remove("sub-menu-element-four_hidden");
});

menuItemElementFour.addEventListener("mouseleave", () => {
  if (!isTouchDevice)
    subMenuElementFour.classList.add("sub-menu-element-four_hidden");
});

mobileMenuButton.addEventListener("click", () => {
  mobileMenuButtonIcon.classList.toggle("mobile-menu-button__icon_hidden");
  mobileMenuButtonIconClose.classList.toggle(
    "mobile-menu-button__icon-close_hidden"
  );
  menu.classList.toggle("menu_open");
});

menuButtonElementTwo.addEventListener("click", () => {
  if (!subMenuElementFour.classList.contains("sub-menu-element-four_hidden"))
    subMenuElementFourToggle();

  subMenuElementTwoToggle();
});

menuButtonElementFour.addEventListener("click", () => {
  if (!subMenuElementTwo.classList.contains("sub-menu-element-two_hidden"))
    subMenuElementTwoToggle();

  subMenuElementFourToggle();
});

subMenuElementTwoButtonElementTwo.addEventListener("click", () => {
  if (
    !subSubMenuElementFour.classList.contains(
      "sub-sub-menu-element-four_hidden"
    )
  )
    subSubMenuElementFourToggle();

  subSubMenuElementTwoToggle();
});

subMenuElementTwoButtonElementFour.addEventListener("click", () => {
  if (
    !subSubMenuElementTwo.classList.contains("sub-sub-menu-element-two_hidden")
  )
    subSubMenuElementTwoToggle();

  subSubMenuElementFourToggle();
});
