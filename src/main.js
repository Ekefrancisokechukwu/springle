



// const cursor = document.querySelector('.cursor')
// const follow = document.querySelector('.follow')


// let xp = 0;
// let yp = 0;

//  document.querySelector('.section-about').addEventListener('mousemove', (e) => {
//   let posX = e.pageX;
//   let posY = e.pageY;

//   cursor.setAttribute('style', `top:${e.pageY}px; left:${e.pageX}px;`)

//   setTimeout(() => {
//     xp = posX;
//     yp = posY;

//     follow.setAttribute('style', `top:${yp}px; left: ${xp}px`)
//   }, 100)
// });




const heroSlider = document.querySelector('.hero')
const heroSliderItems = document.querySelectorAll('.hero_container')

let currentImageIndex = 0;
const maxImageIndex = heroSliderItems.length - 1;

function showNextImage() {
  heroSliderItems[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex === maxImageIndex) ? 0 : currentImageIndex + 1;
  heroSliderItems[currentImageIndex].classList.add('active');
}

setInterval(showNextImage, 7000);


// // ///////  
/// like 
let likee = document.querySelector('.likee');

likee.addEventListener('click', function () {
  this.classList.toggle('like')

})


const footerInfo = document.querySelectorAll('.footer_info--head');
let textBox = document.querySelectorAll('.footer_info--box');

function footerhandler() {
  for(let x = 0; x < footerInfo.length;x++){

    footerInfo[x].addEventListener('click',function (ev) {
        
      
      // if(ev.target.tagName != 'svg') return
      let text = this.nextElementSibling;
      
     if(text.style.maxHeight) {
      text.style.maxHeight = null;
     }else{
      text.style.maxHeight = text.scrollHeight + 'px';
    }
     this.lastElementChild.classList.toggle('active')
    
    })
  }
    
}

    
footerhandler()

document.querySelector('.scroll').addEventListener('click', () => {
  window.scrollTo(0, 10)
})

let footYear = document.getElementById('footYear');
let fY = new Date().getFullYear()
footYear.innerHTML = fY