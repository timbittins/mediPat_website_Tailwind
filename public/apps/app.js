const mobileMenuFunction = () => {
  const mobileBtn = document.querySelector(".mobile-menu-button");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileHam = document.querySelector(".mobile-menu-ham");
  const mobileCross = document.querySelector(".mobile-menu-cross");

  mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("translate-x-full");
    mobileBtn.classList.toggle("rotate-180");
    mobileHam.classList.toggle("scale-0");
    mobileCross.classList.toggle("scale-0");
    console.log("mobilemenu active");
  });
};

const mobileSubmenuFunction = () => {
  const mobileSubmenuBtn = document.querySelector(".mobile-sub-menu-button");
  const mobileSubmenuBtnArrow = document.querySelector(
    ".mobile-sub-menu-button svg"
  );
  const mobileSubmenu = document.querySelector(".mobile-sub-menu");

  mobileSubmenuBtn.addEventListener("click", () => {
    mobileSubmenu.classList.toggle("hidden");
    mobileSubmenu.classList.toggle("flex");
    mobileSubmenuBtnArrow.classList.toggle("rotate-180");
    console.log("submenu active");
  });
};

const lgSubmenuFunction = () => {
  const lgSubmenuBtn = document.querySelector(".lg-sub-menu-button");
  const lgSubmenuBtnArrow = document.querySelector(".lg-sub-menu-button svg");
  const lgSubmenu = document.querySelector(".lg-sub-menu");

  lgSubmenuBtn.addEventListener("mouseover", () => {
    lgSubmenu.classList.remove("lg:hidden");
    lgSubmenuBtnArrow.classList.add("rotate-180");
    console.log("submenu active");
  });

  lgSubmenuBtn.addEventListener("mouseleave", () => {
    lgSubmenu.classList.add("lg:hidden");
    lgSubmenuBtnArrow.classList.remove("rotate-180");
    console.log("submenu inactive");
  });
};

function highlightCurrentPage() {
  const currentPageName = () => {
    const currentPagePath = window.location.pathname;
    const currentPageName = currentPagePath.split("/").pop().split(".").shift();
    return currentPageName;
  }
  const menuLinkList = [...document.querySelectorAll("a")];

  menuLinkList.forEach((menuLink) => {
    if (menuLink.id === currentPageName()) {
      menuLink.classList.add("text-blue-500", "border-b-4", "border-blue-500");
    }
  });
}

mobileMenuFunction();
mobileSubmenuFunction();
lgSubmenuFunction();
highlightCurrentPage();
