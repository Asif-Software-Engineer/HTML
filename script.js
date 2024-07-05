const swiper = new Swiper('.slider-wrapper', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPreview: 1
        },
        620: {
            slidesPreview: 2
        },
        1024: {
            slidesPreview: 3
        }
    }
  });