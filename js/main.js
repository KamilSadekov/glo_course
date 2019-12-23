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

  
  $('.modal__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    
    rules: {
      
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: "required",
      
      userEmail: {
        required: true,
        email: true
      }
    },  
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
    }
  });



  
  $('.control__form').validate({
    errorClass: "invalid",
    errorElement: "div",

    rules: {
      
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: "required"
    },
     
    messages: {
      userName: {
        required: "Введите ваше имя",
        minlength: "Имя не короче 2 букв",
      },
      userPhone: "Введите ваш номер телефона"
    },
    
  });


  
  $('.footer__form').validate({
    errorClass: "invalid",
    errorElement: "div",

    rules: {
      
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: "required",
      userQuestion: "required"
      
    },
    messages: {
      userName: {
        required: "Введите ваше имя",
        minlength: "Имя не короче 2 букв",
      },
      userPhone: "Введите ваш номер телефона",
      userQuestion: "Задайте ваш вопрос"      
    }
  });

});




  $(document).ready(function () {
    $('[type=tel]').mask('+7 (000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
});