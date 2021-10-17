const btn = document.querySelector(".mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
//   menu.classList.add("transition", "ease", "duration-400");
  menu.classList.toggle("hidden");
});
