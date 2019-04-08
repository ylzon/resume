// 添加offset类
const specialTags = document.querySelectorAll('[data-x]');
specialTags.forEach((item, index) => {
    specialTags[index].classList.add('offset')
})
findClosest()
// 鼠标滚动事件
window.onscroll = function () {
    // 页面滚动导航栏添加黏贴效果
    let scrollY = window.scrollY;
    if (scrollY > 0) {
        topNavBar.classList.add('sticky');
    } else {
        topNavBar.classList.remove('sticky');
    }

    findClosest()
};

// 鼠标移入移出导航栏导航添加下划线
let liTags = document.getElementsByClassName('subMenuTigger');
for (let i=0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function(event) {
        event.currentTarget.classList.add('active');
    }
    liTags[i].onmouseleave = function(event) {
        event.currentTarget.classList.remove('active');
    }
};

function findClosest () {
    // 滚动到对应位置的元素显示，且导航栏响应高亮 
    let minIndex = 0;
    const specialTags = document.querySelectorAll('[data-x]');
    const seeHeight = window.innerHeight;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    
    specialTags.forEach((item, index) => {
        const current = Math.abs(item.offsetTop - window.scrollY);
        const min = Math.abs(specialTags[minIndex].offsetTop - window.scrollY);
        specialTags[index].classList.remove('active')
        if(specialTags[index].offsetTop < seeHeight + scrollTop - 400) {
            minIndex = index;
        }
    })
    const currentSection = specialTags[minIndex]
    currentSection.classList.remove('offset')
    // currentSection.classList.add('animate')
    currentSection.classList.add('active')
    const aTag = document.querySelector(`a[href="#${currentSection.id}"]`);
    const liTag = aTag.parentNode;
    for(let i = 0; i< liTag.parentNode.children.length; i ++){
        liTag.parentNode.children[i].classList.remove('highlight');
    }
    liTag.classList.add('highlight')
}



// 点击导航平滑滚动到对应位置
let aTags = document.querySelectorAll('.menu > li > a');
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);
for (let i=0; i < aTags.length; i++) {
    aTags[i].onclick = function(event) {
        event.preventDefault();
        const top = document.querySelector(event.currentTarget.getAttribute('href')).offsetTop;
        const currentTop = window.scrollY;
        const targetTop = top - window.innerHeight / 2 + 100;
        const s = targetTop - currentTop;
        const t = Math.abs((s/100) * 200);
        // @tween.js实现
        var coords = { x: currentTop }; 
        var tween = new TWEEN.Tween(coords) 
                .to({ x: targetTop}, t > 600 ? 600 : t) 
                .easing(TWEEN.Easing.Quadratic.InOut) 
                .onUpdate(function() {
                    window.scrollTo(0, coords.x)
                })
                .start();
    }
};


