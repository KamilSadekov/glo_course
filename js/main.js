document.addEventListener("DOMContentLoaded", function (event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  };

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  document.body.addEventListener('click', (event) => {
    let target = event.target;
    if (target.matches('.modal__close') || target.matches('#popup-window')) {
      switchModal();
    }
  });

  document.addEventListener('keyup', (event) => {
    if (event.code === 'Escape') {
      modal.classList.remove('modal--visible');
    }
  });
});

$(document).ready(function () {
  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 37 + bullets.width() + 37)
  bullets.css('left', prev.width() + 37)

  new WOW().init();

  // валидация формы modal__form
  $('.modal__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: "required",
      // правило объект (блок)
      userEmail: {
        required: true,
        email: true
      }
    },  // сообщения
    messages: {
      userName: {
        required: "Введите ваше имя",
        minlength: "Имя не короче 2 букв",
      },
      userPhone: "Введите ваш номер телефона",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email в формате: name@domain.com"
      }
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          alert('Форма отправлена, мы свяжемся с вами, через 10 минут');
          $(form)[0].reset();
          modal.classList.remove('modal--visible');
        }
      });
    }

  });



  // валидация формы control__form
  $('.control__form').validate({
    errorClass: "invalid",
    errorElement: "div",

    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: "required"
    },
     // сообщения
    messages: {
      userName: {
        required: "Введите ваше имя",
        minlength: "Имя не короче 2 букв",
      },
      userPhone: "Введите ваш номер телефона"
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера: ' + response);
          alert('Форма отправлена, мы свяжемся с вами, через 10 минут');
          $(form)[0].reset();
        }
      });
    }
  });


  //валидация формы footer__form
  $('.footer__form').validate({
    errorClass: "invalid",
    errorElement: "div",

    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: "required",
      userQuestion: "required"
      // правило объект (блок)
    },  // сообщения
    messages: {
      userName: {
        required: "Введите ваше имя",
        minlength: "Имя не короче 2 букв",
      },
      userPhone: "Введите ваш номер телефона",
      userQuestion: "Задайте ваш вопрос"      
    },
    submitHandler: function(form) {
      $.ajax({ 
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера: ' + response);
          alert('Форма отправлена, мы свяжемся с вами, через 10 минут');
          $(form)[0].reset();
        }
      });
    }
  });
});
  // маска для телефона
  $(document).ready(function () {
    $('[type=tel]').mask('+7 (000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
  });