window.addEventListener('load', function () {

    var left = document.querySelector('.left')
    var right = document.querySelector('.right')
    var card = document.querySelectorAll('.carousel-page .cards')
    var img = document.querySelectorAll('.carousel-page .cards ')
    var text = document.querySelectorAll('.carousel-page .body-text ')
    var img =  document.querySelectorAll('.carousel-page img')
    console.log(img)

    var size = card.length
    var i = 0;
    right.onclick = function () {
        text[i].style.top = `420px`;
        text[i].style.left = `-55px`;
        img[i].style.cssText = `
        filter: blur(5px)
        `
        card[i].style.cssText = ` z-index:1 `
        i++
        if (i === size) {
            i = 0
        }
        text[i].style.transition = `all 500ms`;
        img[i].style.cssText = `
    filter: blur(0px)
        `
        text[i].style.color = `red`;
        text[i].style.top = `144px`;
        text[i].style.left = `-5px`;
        card[i].style.cssText = `
        transition: 800ms;
        z-index:111;
        box-shadow: 20px 20px 10px #bc2e3a, -20px -20px 10px #bc2e3a;
        `
    }
   left.onclick = function () {
        text[i].style.top = `420px`;
        text[i].style.left = `-55px`;
        card[i].style.cssText = ` z-index:1 `
        if (i === 0) {
            i = size
        }
        i--
        text[i].style.transition = `all 500ms`;
        text[i].style.color = `red`;
        text[i].style.top = `144px`;
        text[i].style.left = `-5px`;
        card[i].style.cssText = `
        transition: 800ms;
        z-index:111;
        box-shadow: 20px 20px 10px #bc2e3a, -20px -20px 10px #bc2e3a;
        `
    }
})


