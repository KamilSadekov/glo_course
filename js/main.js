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
  });
  
  

  