
const iconMenu = document.querySelector('.header__burger');//анимация бургера и появление меню
const navMenu = document.querySelector('.navigation_mob');
if (iconMenu) {
  iconMenu.addEventListener("click", function() {
    iconMenu.classList.toggle("_active");
    navMenu.classList.toggle("_active");
  });
};

const iconSearch = document.querySelector('.navigation__item_search');
const iconExit = document.querySelector('.search__exit');
const formSearch = document.querySelector('.navigation__form');
if (iconSearch) {
  iconSearch.addEventListener("click", function() {
    formSearch.classList.add("_active");
  });
};
if (iconExit) {
  iconExit.addEventListener("click", function() {
    formSearch.classList.remove("_active");
  });
};

//организация плавного скрола по клике на объекте меню к соответствующей области страницы, скрывание меню при клике на пункт меню
const menuLinks = document.querySelectorAll('.navigation__item');
if(menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target; // целевой объект на который кликнули
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){ //проверка, заполнен ли дата атрибут, и существование объекта ссылки
      const gotoBlock = document.querySelector(menuLink.dataset.goto); // получаем сам этот объект
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight; //в переменную получаем кол-во пикселей для скрола к выбранному месту

      window.scrollTo({ //сам скролл
        top: gotoBlockValue,
        behavior: "smooth"
      })
      e.preventDefault(); //отключение перехода по ссылке
    }

    if(iconMenu.classList.contains('_active')) {
      iconMenu.classList.remove("_active");
      navMenu.classList.remove("_active");
    };
  }
};

new Swiper('.swiper-container', {  //инициализация и настройки слайдера
  pagination: {                    //отображение точек навигации
    el: '.swiper-pagination',
    clickable: true,               //переключение слайдов путем клика на соответствующей точке
    dynamicBullets: true,          //точки имеют различный диаметр в зависимости от текущего слайда
  },

  mousewheel: {                    //управление колесиком мыши
    sensitivity: 1,                //чувствительность
    eventsTarget: ".image-slider"  //только при наведении на слайдер
  },
  watchOverflow: true,             //отключение функционала, если слайдов меньше чем нужно

  loop: true,                     //бесконечная лента слайдов

  autoplay: {                     //автопрокрутка
    delay: 2000,                  //время задержки
    disableOnInteraction: false,  //возобновление автопрокрутки после ручного управления слайдером
  },

  speed: 800,                     //скорость прокрутки (по умолчанию 300)

  effect: 'fade'                 //эффект слайдера для плавного проявления следующего слайда (по умолчанию 'slide'-прокрутка)
});

document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){//цикл, пробегающийся по кнопкам с классом tabs-nav__btn
  tabsBtn.addEventListener('click', function(e){                      //добавление функционала на событие click по кнопке
  const path = e.currentTarget.dataset.path; //e.currentTarget выделяет конкретный нажатый элемент, запись dataset.path позволяет получить значения атрибута data-path
  document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){  // в цикле перебираются все кнопки с классом .tabs-nav__btn
  btn.classList.remove('tabs-nav__btn--active')});                    //удаляются активные классы с кнопок
  e.currentTarget.classList.add('tabs-nav__btn--active');             //добавляется активный класс нажатой кнопке
  document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){// в цикле перебираются все элементы с классом .tabs-item
  tabsBtn.classList.remove('tabs-item--active')});                   // и у всех у них удаляются классы активности tabs-item--active
  document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active'); //`[data-target="${path}"]`- шаблонная строка с обратными кавычками
  });
});

$(".questions__list").accordion(); //инициализация слайдера "аккордеон"

new JustValidate('.block-form__container', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength:10
    },
    mail: {
      required: true,
      email: true
    },
    message: {
      required: true
    }
  }
}
);
