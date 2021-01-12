var hotelSlider = new Swiper('.hotel-slider', {
  loop: true,
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  spaceBetween: 90
});

var reviewsSlider = new Swiper('.reviews-slider', {
  loop: true,
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  spaceBetween: 90
});
var menuButton = document.querySelector('.menu-button'),
    modalOverlay = document.querySelector('.modal__overlay'),
    modalDialog = document.querySelector('.modal__dialog'),
    closeBtn = document.querySelector('.modal__close'),
    modalButton = document.querySelectorAll('[data-toggle=modal]');
function openModal() {
  modalOverlay.classList.add('modal__overlay_active');
  modalDialog.classList.add('modal__dialog_active');
  document.querySelector('body').style.overflowY="hidden";
}

function closeModal(){
  event.preventDefault();
  modalOverlay.classList.remove('modal__overlay_active');
  modalDialog.classList.remove('modal__dialog_active');
  document.querySelector('body').style.overflowY="scroll";
}

function keyPress(event) {
  if (event.keyCode == 27){
    modalOverlay.classList.remove('modal__overlay_active');
    modalDialog.classList.remove('modal__dialog_active');
    document.querySelector('body').style.overflowY="scroll";
  }
}

for(i=0;i<modalButton.length;i++){
  modalButton[i].addEventListener('click', openModal);
}
closeBtn.addEventListener('click', closeModal);
document.addEventListener('keydown', keyPress);

menuButton.addEventListener('click', function(){
  document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom--visible');
  $("body").toggleClass("hidden")
});
$('.form').each(function(){
  $(this).validate({
  errorClass: "invalid",
  messages: {
    name: {
      required: "Please specify your name",
      minlength: "Min count of symbols - 2"
    },
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com"
    },
    phone:{
      required: 'Please specify your phone number'
    }
  }
  });
});
$('.input__phone').each(function(){
  $(this).mask('+7 (000) 000-00-00');
});
