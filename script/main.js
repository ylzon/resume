window.onscroll = function () {
    let scrollY = window.scrollY
    if (scrollY > 0) {
        topNavBar.classList.add('sticky')
    } else {
        topNavBar.classList.remove('sticky')
    }
}

let liTags = document.getElementsByClassName('subMenuTigger')

for (let i=0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function(event) {
        event.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function(event) {
        event.currentTarget.classList.remove('active')
    }
}


let aTags = document.querySelectorAll('.menu > li > a')

for (let i=0; i < aTags.length; i++) {
    aTags[i].onclick = function(event) {
        event.preventDefault()
        let a = event.currentTarget
        let href = a.getAttribute('href')
        let elememt = document.querySelector(href)
        let top = elememt.offsetTop
        console.log(top);
        
        window.scrollTo(0, top - 80)
    }
}
