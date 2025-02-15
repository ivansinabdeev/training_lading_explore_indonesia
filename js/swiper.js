let swiper = new Swiper(".swiper", {
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    370: {
      slidesPerView: 1.2,
    },
    768: {
      slidesPerView: 2.6,
    },
    1240: {
      slidesPerView: 4.2,
    },
  },
  autoplay: {
    delay: 4000,
  },
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
