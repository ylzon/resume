// 添加offset类
!function () {
  const specialTags = document.querySelectorAll('[data-x]');

  findClosestAndRemoveOffset()

  window.addEventListener('scroll', () => {
    findClosestAndRemoveOffset()
  });

  function findClosestAndRemoveOffset() {
    // 滚动到对应位置的元素显示，且导航栏响应高亮 
    let minIndex = 0;
    const seeHeight = window.innerHeight;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    specialTags.forEach((item, index) => {
      const current = Math.abs(item.offsetTop - window.scrollY);
      const min = Math.abs(specialTags[minIndex].offsetTop - window.scrollY);
      specialTags[index].classList.remove('active')
      if (specialTags[index].offsetTop < seeHeight + scrollTop - 400) {
        minIndex = index;
      }
    })
    const currentSection = specialTags[minIndex]
    currentSection.classList.remove('offset')
    // currentSection.classList.add('animate')
    currentSection.classList.add('active')
    const aTag = document.querySelector(`a[href="#${currentSection.id}"]`);
    const liTag = aTag.parentNode;
    for (let i = 0; i < liTag.parentNode.children.length; i++) {
      liTag.parentNode.children[i].classList.remove('highlight');
    }
    liTag.classList.add('highlight')
  }
}.call();