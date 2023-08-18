

// import {mainImgHandler} from './/scroll'

const dots = document.querySelectorAll('.prod_dots--dot');
const prodContent = document.querySelector('.prod_content');

const showImg = document.querySelector('.prod_show--img ')

const ImgHandler = () => {
  dots.forEach(function (swap) {
    swap.addEventListener('mouseenter', function () {
      let img = swap
      showImg.innerHTML = img.innerHTML
    })
  })
}
ImgHandler()