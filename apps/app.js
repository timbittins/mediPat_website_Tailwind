const mobileMenuFunction = () => {
  const mobileBtn = document.querySelector(".mobile-menu-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("-translate-y-full");
    console.log("mobilemenu active");
  });
};

const mobileSubmenuFunction = () => {
  const mobileSubmenuBtn = document.querySelector(".mobile-sub-menu-button");
  const mobileSubmenuBtnArrow = document.querySelector(".sub-menu-button svg");
  const mobileSubmenu = document.querySelector(".mobile-sub-menu");


  mobileSubmenuBtn.addEventListener("click", () => {
    mobileSubmenu.classList.toggle("hidden");
    mobileSubmenuBtnArrow.classList.toggle("rotate-180");
    console.log("submenu active");
  });
};

const lgSubmenuFunction = () => {
  const lgSubmenuBtn = document.querySelector(".lg-sub-menu-button");
  const lgSubmenuBtnArrow = document.querySelector(".lg-sub-menu-button svg");
  const lgSubmenu = document.querySelector(".lg-sub-menu");


  lgSubmenuBtn.addEventListener("mouseover", () => {
    lgSubmenu.classList.remove("hidden");
    lgSubmenuBtnArrow.classList.toggle("rotate-180");
    console.log("submenu active");
  });
};

mobileMenuFunction();
mobileSubmenuFunction();
lgSubmenuFunction();
