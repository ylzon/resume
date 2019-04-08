window.onscroll = function () {
    let scrollY = window.scrollY;
    if (scrollY > 0) {
        topNavBar.classList.add('sticky');
    } else {
        topNavBar.classList.remove('sticky');
    }
};

let liTags = document.getElementsByClassName('subMenuTigger');

for (let i=0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function(event) {
        event.currentTarget.classList.add('active');
    }
    liTags[i].onmouseleave = function(event) {
        event.currentTarget.classList.remove('active');
    }
};


let aTags = document.querySelectorAll('.menu > li > a');

for (let i=0; i < aTags.length; i++) {
    aTags[i].onclick = function(event) {
        event.preventDefault();
        const top = document.querySelector(event.currentTarget.getAttribute('href')).offsetTop;

        const n = 25;
        const duration = 500 / n;
        const currentTop = window.scrollY;
        const targetTop = top - 80;
        const distance = (targetTop - currentTop) / n;
        let i = 0;
        const timer = setInterval(() => {
            if (i === n) {
                window.clearInterval(timer)
                return;
            }
            i = i+1;
            window.scrollTo(0, currentTop + distance * i)
        }, duration)
        // window.scrollTo(0, top - 80);
    }
};
