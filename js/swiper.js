const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 4000,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // щоб жмакнути на кружочок
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1170: {
      slidesPerView: 3,
    },
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});
