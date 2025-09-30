document.addEventListener("DOMContentLoaded", function() {
  const showMoreBtn = document.querySelector('.show-more-btn');
  const uslItems = document.querySelectorAll('.uslflex .uslitem');
  const initialVisibleCount = 8; // Количество видимых элементов по умолчанию

  // Скрываем элементы после initialVisibleCount
  uslItems.forEach((item, index) => {
    if (index >= initialVisibleCount) {
      item.style.display = 'none';
    }
  });

  showMoreBtn.addEventListener('click', function() {
    // Показываем скрытые элементы
    uslItems.forEach((item, index) => {
      if (index >= initialVisibleCount) {
        item.style.display = 'block';
      }
    });
    
    // Скрываем кнопку после показа всех элементов
    showMoreBtn.style.display = 'none';
  });
});

//$('.seo__btn').on('click', function () {
 // $(this).toggleClass('active');
  //$('.seo-text').toggleClass('active');
//});

function initScrollAnimation() {
  ScrollReveal().reveal(document.querySelectorAll(".js-slide-opac"), {
    delay: 0,
    duration: 700,
    scale: 0.9,
    interval: 0,
    reset: false,
    mobile: false,
    opacity: 0,
    viewOffset: {
      bottom: 100,
      top: 100,
    },
  });
  ScrollReveal().reveal(document.querySelectorAll(".js-slide-bot"), {
    delay: 0,
    distance: "40px",
    duration: 400,
    origin: "bottom",
    reset: false,
    mobile: false,
    viewOffset: {
      bottom: 100,
      top: 100,
    },
  });
  ScrollReveal().reveal(document.querySelectorAll(".js-slide-left"), {
    delay: 0,
    distance: "100px",
    duration: 1000,
    origin: "left",
    reset: false,
    mobile: false,
    viewOffset: {
      bottom: 100,
      top: 100,
    },
  });
}
initScrollAnimation();

let jsMainSlider = new Swiper(".js-swipeport", {
  autoHeight: false,
  loop: true,
  observer: true,
  spaceBetween: 5,
  slidesPerView: 6,
  navigation: false,
  pagination: false,
  freeMode: {
    enabled: true,
  },
  autoplay: {
    delay: -10,
    disableOnInteraction: true,
  },
  speed: 20000,
  breakpoints: {
    320: {
			  slidesPerView: 2,
			  spaceBetween: 25,
			},
			480: {
			  slidesPerView: 3,
			  spaceBetween: 15,
			},
			640: {
			  slidesPerView: 3,
			  spaceBetween: 20,
			},
			768: {
			  slidesPerView: 4,
			  spaceBetween: 20,
			},
			
			990: {
			  slidesPerView: 4,
			  spaceBetween: 20,
			},
			1170: {
      spaceBetween: 35,
    },
  },
});

let jsMainSlider2 = new Swiper(".js-swipeotzivi", {
  autoHeight: false,
  loop: true,
  observer: true,
  spaceBetween: 5,
  slidesPerView: 6,
  navigation: false,
  pagination: false,
  freeMode: {
    enabled: true,
  },
  autoplay: {
    delay: -10,
    disableOnInteraction: true,
  },
  speed: 20000,
  breakpoints: {
    320: {
			  slidesPerView: 2,
			  spaceBetween: 25,
			},
			480: {
			  slidesPerView: 3,
			  spaceBetween: 15,
			},
			640: {
			  slidesPerView: 3,
			  spaceBetween: 20,
			},
			768: {
			  slidesPerView: 4,
			  spaceBetween: 20,
			},
			
			992: {
			  slidesPerView: 4,
			  spaceBetween: 20,
			},
			992: {
      spaceBetween: 35,
    },
  },
});
