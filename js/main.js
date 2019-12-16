document.addEventListener("DOMContentLoaded", function(event) { 
    const modal = document.querySelector('.modal');
    const modalButton = document.querySelectorAll('[data-toggle=modal]');
    const btnClose = document.querySelector('.modal__close');

    const closeModal = document.querySelector('modal--close');

    const switchModal = () => {
        modal.classList.toggle('modal--visible');
    }
    modalButton.forEach(element => {
        element.addEventListener('click', switchModal);
    });
     
    btnClose.addEventListener('click', switchModal);

    
    

  }); 