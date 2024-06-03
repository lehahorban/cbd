function popapMenu() {
  const btn = document.querySelector(".nav-link-btn");
  const menu = document.querySelector(".popap");

  menu.style.display = "none";
  btn.addEventListener("click", () => {
    if (menu.style.display !== "flex") {
      menu.style.display = "flex";
    } else {
      menu.style.display = "none";
    }
  });
}
popapMenu();
