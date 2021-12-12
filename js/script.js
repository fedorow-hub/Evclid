
  const iconMenu = document.querySelector('.header__burger');
if (iconMenu) {
  iconMenu.addEventListener("click", function() {
    iconMenu.classList.toggle("_active");
  });
};

$(".questions__list").accordion({
  heightStile: "content"
});

