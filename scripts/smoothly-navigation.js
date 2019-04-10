// 点击导航平滑滚动到对应位置
!function () {
  const view = document.querySelector('.menu');
  const controller = {
    view: null,
    aTags: null,
    animate: function (time) {
      window.requestAnimationFrame(this.animate.bind(this));
      TWEEN.update(time);
    },
    initAnimation: function() {
      window.requestAnimationFrame(this.animate.bind(this));
    },
    scrollToElement: function(element) {
      const top = element.offsetTop
      const currentTop = window.scrollY;
      const targetTop = top - window.innerHeight / 2 + 100;
      const s = targetTop - currentTop;
      const t = Math.abs((s / 100) * 200);
      // @tween.js实现
      const coords = { x: currentTop };
      new TWEEN.Tween(coords)
        .to({ x: targetTop }, t > 600 ? 600 : t)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(function () {
          window.scrollTo(0, coords.x)
        })
        .start();
    },
    bindEvents: function() {
      for (let i = 0; i < this.aTags.length; i++) {
        this.aTags[i].onclick = (e) => {
          e.preventDefault();
          const element = document.querySelector(e.currentTarget.getAttribute('href'));
          this.scrollToElement(element);
        }
      };
    },
    init: function (view) {
      this.view = view;
      this.aTags = this.view.querySelectorAll('li > a');
      this.initAnimation();
      this.bindEvents();
    },
  }

  controller.init(view);
}.call();
