$(document).ready(function () {
  new WOW().init();
  /* $(window).scroll(function(){
      $('.card__image ').addClass('card__animation', $(this).scrollTop() > 3000);
  }); */
  var modal = $('.modal'),
      modalDialog = $('.modal__dialog'),
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close');
      modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
      });
      closeBtn.on('click', function () {
        modal.toggleClass('modal--visible');
      });
      $(document).keyup(function (event) {
        if(event.which == '27') {
          modal.toggleClass('modal--visible');
        };
      });
      $(document).on('click', function (event) {
        if (modal.is(event.target)) {
          modal.toggleClass('modal--visible');
        };
      });
      $(window).scroll(function () {
        if($(this).scrollTop() > 1000) {
          $('.button-up'). fadeIn();
        } else {
          $('.button-up').fadeOut();
        }
      });
      $('#button-up').on('click', function (event) {
        event.preventDefault;
        $('html, body').animate({scrollTop:0},'300');
      });
  var projectSwiper = new Swiper('.projects-swiper-container', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.projects-swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.projects-swiper-button-next',
      prevEl: '.projects-swiper-button-prev',
    },
  });
        
  var next = $('.projects-swiper-button-next');
  var prev = $('.projects-swiper-button-prev');
  var bullets = $('.projects-swiper-pagination');
        
      next.css('left', prev.width() + bullets.width() + 45)
      bullets.css('left', prev.width() + 25)

  var stepsSwiper = new Swiper('.steps__swiper-container', {
    // Optional parameters
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.steps__swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.steps__swiper-button-next',
      prevEl: '.steps__swiper-button-prev',
    },
  });
        
  var next2 = $('.steps__swiper-button-next');
  var prev2 = $('.steps__swiper-button-prev');
  var bullets2 = $('.steps__swiper-pagination');

  next2.css('left', prev2.width() + bullets2.width() + 40)
  bullets2.css('left', prev2.width() + 23)
        
    $('.steps__tabs-item').on('click', function () {
      $('.steps__tabs-item').removeClass('active');
      $(this).addClass('active');
      const event = $(this).data('index');
      stepsSwiper[0].slideTo(event);
      stepsSwiper[1].slideTo(event);
    })
        
    stepsSwiper[0].on('slideChange', (function () {
      let event = stepsSwiper[0].activeIndex - 1;
      if (event === 6) {event=0};
      $('.steps__tabs-item').removeClass('active');
      $('.steps__tabs-item').eq(event).addClass('active');
    }))

  //Валидация формы
  function validateForm(form){
    $(form).validate({
      errorClass: "invalid",
      rules: {
        // simple rule, converted to {required:true}
        policyCheckbox: "required",
        userName: {
          required: true,
          minlength: 2,
          maxlength: 10
        },
        userPhone: "required",
        userQuetion: {
          required: true,
          minlength: 20,
          maxlength: 400
        },
        // compound rule
        userEmail: {
          required: true,
          email: true
        }
      },
      errorElement: "div",
      messages: {
        userName: {
          required: "Имя обязательно",
          minlength: "Имя не короче двух букв"
        },
        policyCheckbox: "Подтвердите согланисе на обработку данных",
        userPhone: "Телефон обязателен",
        userQuetion: {
          required: "Вопрос обязателен",
          minlength: "Вопрос слишком короткий",
          maxlength: "Слишком длинный вопрос"
        },
        userEmail: {
          required: "Обязательно укажите email",
          email: "Введите в формате name@domain.com"
        }
      }
    });
  }
  validateForm('.modal__form');
  validateForm('.control__form');
  validateForm('.footer__form');

  $('[type=tel]').mask('+7 (000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});

  //Создание карт
  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [47.244734, 39.723227],
            zoom: 18
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Наш офис',
            balloonContent: 'второй этаж'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map-marker.png',
            // Размеры метки.
            iconImageSize: [32, 32],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

    myMap.geoObjects
        .add(myPlacemark)
        myMap.behaviors
        // Отключаем часть включенных по умолчанию поведений:
        //  - drag - перемещение карты при нажатой левой кнопки мыши;
        //  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
        .disable(['scrollZoom', 'rightMouseButtonMagnifier'])
        // Включаем линейку.
        .enable('ruler');
});

});