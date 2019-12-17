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