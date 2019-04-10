// 初始化轮播图
!function() {
  const view = document.querySelector('#slides');
  const controller = {
    view: null,
    swiper: null,
    swiperOptions: {
      loop: true,
      preloadImages: false,
      lazy: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      },
    },
    init: function(view) {
      this.view = view;
      this.initSwiper();
    },
    initSwiper: function() {
      this.swiper = new Swiper(
        this.view.querySelector('.swiper-container'), 
        this.swiperOptions,
      );
    }
  }
  controller.init(view)
}.call();