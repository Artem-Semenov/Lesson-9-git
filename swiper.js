
//Для картинок в слайдере - класс "swiper-lazy" и выносим путь в атрибут дата-срц
//И добавляем див с классом "swiper-lazy-loader"
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal", //vertical..
  loop: true,
  speed: 500,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets: true,
    // type: 'fraction'
    // type: 'progressbar'
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  /* scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },  */

  //to off touch on PC
  simulateTouch: true,
  //Чувствительность свайпа
  touchRatio: 1,
  // Угол срабатывания свайпа/перетаксивания
  touchAgnel: 45,
  // Курсор перетаскивания
  grabCursor: true,
  //Переключение при клике на следующий слайд
  slideToClickedSlide: true,

  keyboard: {
    enabled: true,

    onlyInViewport: true,
    pageUpDown: true,
  },

  /* mousewheel: {
  sensitivity: 1,
}, */
  //Высота слайдера подстраивается под разную высоту блоков
  autoHeight: true,

  slidesPerView: 1,

  // Отключает слайдер если слайдов меньше чем необходимо для работы слайдера
  watchOverFlow: true,

  //Отступы между сладами

  spaceBetween: 30,
  //Количество пролистываемых слайдов
  slidesPerGroup: 1,

  //Активный слайд по центру - если у нас несколько слайдов в кадре
  //centeredSlides: true,

  //Номер первого слайда начального
  initialSlide: 0,

  //Слайдер в 2 ряда
  slidesPerColumn: 2,

  //Настройка для бесконечного слайдера и автоматического значения слайдс пер вью
  //loopedSlides: 3,

  //Свободный режим
  //freeMode: true,

  /* autoplay: {
delay: 2000,
stopOnLastSlide: false,
disableOnInteraction: false,
}, */

  effect: "slide",
  //  'coverflow',
  //'cube',
  //'flip',
  //'fade',

  /* fadeEffect: {
  //параллельная смена прозрачности
  crossFade: true,
}
 */
  /* flipEffect: {
  //Тень
  slideShadows: true,
  //Показ только активного слайда
  limitRotation: true,
} */
  /* cobeEffect: {
  slideShadows: true,
  shadow: true,
  shadowEffect: 20,
  shadowScale: 0.94
} */
  /* coverflowEffect: {
rotate: 30,
stretch: 80,
slideShadows: true,
}, */ //Adaptive - mobile first, можно указывать в соотношении сторон
  /* breakpoints: {
  320: {
    slidesPerView: 1,
  },
  480: {
    slidesPerView: 2
  },
  992: {
    slidesPerView: 3,
  },
}, */
  //Отключает предзагрузку картинок - для лейзи лоада
  preloadImages: false,

  lazy: {
    //Подгружать на старте переключения слайда
    loadOnTransitionStart: false,
    //Подгружать предыдущую и следующую картинки
    loadPrevNext: false,
  },
  //Слежка за ввидимымми слайдами
  watchSlidesProgress: true,
  //Добавление класса виидмым слайдам - нужно когда слайдс ер вью больше 1
  watchSlidesVisibility: true,

  //class 'swiper-zoom-container' для контейнера с картинкой, чтобы ее можно было увеличить
  zoom: {
    maxRatio: 5,
    minRatio: 1,
  },
  //Маленький слайдер под основным - для визуализации активных слайдов
  /* thumbs: {
  swiper: {
    el: 'mini-swiper',
    sliderPerView: 5,
  }
}, */

  nested: true, //Добавляем дочернему слайдеру для корректной работы пагинации если у нас слайдер в слайдере

  //Если слайдер изначально скрыт, а потом появляется при переключении на какой-то таб, следует добавить
  //следующие свойства для корректной работы

  //автоматически обновит слайдер при изменении элементов слайдера
  observer: true,

  observeParents: true,

  observeSliderChildren: true,

  //Возможность формировать контент слайдов динамически
  /*  */

  //Accessability

  ally: {
    enabled: true,
    previousSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
    firstSlideMessage: "This is first slide",
    lastSlideMessage: "This is the last side",
    paginationButtonMessage: "Go to slide {{index}}",
    notofocationClass: "swiper-notification",
    containerMessage: "",
    containerRoleDescription: "",
    itemRoleDescriptionMessage: "",
    //etc
  },
});

//Если нужно склеить 2 слайдера или если контент слайдера разделяется каким-то элементом -
//создаем 2 слайдера и передаем их управление друг другу, склеиваем
// myTextSlider.controller.control = myImageSlider
// myImageSlider.controller.control = myTextSlider
