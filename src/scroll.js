

const header = document.querySelector('.header');
 
let prevscroll = window.pageYOffset;
window.addEventListener('scroll', () => {
  let currentScroll = window.pageYOffset;
  
  if(prevscroll > currentScroll) {
    header.style.top = "0";
  }else {
    header.style.top = "-70rem";
  }

  prevscroll = currentScroll;
})


const listReveal = document.querySelectorAll('[data-reveal]');

const itemReveal = (items) => {

  
  for(let i = 0; i < items.length; i++) {
       let percentageScroll = 100;
        const isElementsOnScreen = items[i].getBoundingClientRect().top < ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/90));



        if(isElementsOnScreen) {
          items[i].classList.add('revealed')
        }else {
          items[i].classList.remove('revealed')
        }
      
      }

}

window.addEventListener('scroll',() => {
  itemReveal(listReveal)
})

window.addEventListener('load',() => {
  itemReveal(listReveal)
})

 const  scrollProd = document.querySelectorAll('.bestSeller_content');
 const bestprevBtn  = document.querySelector('.bestscroll-prev')
 const bestnextBtn  = document.querySelector('.bestscroll-next')
 let prodContainer = document.querySelector('.bestSeller');

//  let counter = 0;
//  const maxbestIndex = scrollProd.length - 1;
 
//  function showNextImage() {
//   //  heroSliderItems[currentImageIndex].classList.remove('active');
//   counter = (counter === maxImageIndex) ? 0 : currentImageIndex + 1 ;
//    scrollProd[counter].scroll = 300;
//  }

//  bestnextBtn.addEventListener('click', () => {
//   // prodContainer.scrollLeft += 430;
//   // showNextImage(counter + 1 )
//  })

 
 function ProdHandler () {
   for(let i = 0; i < scrollProd.length;i++) {
     let itemWidth = scrollProd[i].offsetWidth;
     
       bestnextBtn.addEventListener('click', function ()  {
         prodContainer.scrollLeft += itemWidth;
       })

       bestprevBtn.addEventListener('click', () => {
        prodContainer.scrollLeft -= itemWidth;
       })
    }
 }

 ProdHandler()

//  bestnextBtn.addEventListener('click', () => {

//  }) 




// light box *******************


const lightBox = document.querySelectorAll('.lightbox');
const closeModelBtn = document.querySelectorAll('.lightbox_close');
const imgLightBox = document.querySelectorAll('.about_img');


imgLightBox.forEach(function (x) {
   x.addEventListener('click', function () {
     let p = this.nextElementSibling;
     p.style.transform = 'scale(1)'
     p.style.opacity = '1';
     document.body.style.overflow = 'hidden'
   })
})


closeModelBtn.forEach(function (x) {
  x.addEventListener('click', function () {
    let p = this.parentElement;
     p.style.transform = 'scale(0)'
    p.style.opacity = '0';
    document.body.style.overflow = ''

  })
})


// prodchange ///


const showImg = document.querySelectorAll('.dot img');
function showNextImage(i) {
  let slideImage = document.querySelectorAll('.lightbox_slide img');
  for(let e = 0; e < slideImage.length; e++) {
    slideImage[e].src = i.src
  }
 
}

showImg.forEach(function(e) {
  e.addEventListener('click',function () {
    showNextImage(this)
  })
})


// product arrival
const arrivalCarousel = document.querySelector('.arrival_wrapper');
const arrivalProd = document.querySelectorAll('.arrival_product')[0];
const arrivalBtn = document.querySelectorAll('.arrival_control-btn span');

let isDragStart = false, prevPageX, prevScrollLeft,postDiff;



const showHideBtn = () => {
   let scrollwidthMAx = arrivalCarousel.scrollWidth - arrivalCarousel.clientWidth

    if(arrivalCarousel.scrollLeft === 0) {
      arrivalBtn[0].classList.add('unactive');
    }else {
      arrivalBtn[0].classList.remove('unactive');
    }

    if(arrivalCarousel.scrollLeft == scrollwidthMAx) {
      arrivalBtn[1].classList.add('unactive');
    }else{
      arrivalBtn[1].classList.remove('unactive');
    }
 }

arrivalBtn.forEach(function (btn) {
   btn.addEventListener('click',() => {
    let firstSlideImg = arrivalProd.clientWidth + 14;

    arrivalCarousel.scrollLeft += btn.id == 'arriLeft' ? -firstSlideImg : firstSlideImg;
    showHideBtn();
   })
})


// const arrivAutoSlide = () => {
//   postDiff = Math.abs(postDiff)
//   let firtImgSlide = arrivalProd.clientWidth;
//   let valDiff = firtImgSlide - postDiff;
  
  
// }

// const dragStart = (e) => {
//   isDragStart = true;
//   prevPageX = e.pageX || e.touches[0].pageX;
//   prevScrollLeft = arrivalCarousel.scrollLeft;

// }

// const  dragging = (e) => {
//   if(!isDragStart) return;
//   e.preventDefault()
//   postDiff = (e.pageX || e.touches[0].pageX)- prevPageX;
//   arrivalCarousel.scrollLeft = prevScrollLeft - postDiff;
//   showHideBtn()
// }


//  const dragStop = () => {
//   isDragStart = false;
//   arrivAutoSlide()
//  }


// // arrivalCarousel.addEventListener('mousedown', dragStart);
// arrivalCarousel.addEventListener('touchstart', dragStart);

// arrivalCarousel.addEventListener('mousemove', dragging);
// arrivalCarousel.addEventListener('touchmove', dragging);

// arrivalCarousel.addEventListener('mouseup', dragStop);


// arrivalCarousel.addEventListener('mouseleave', dragStop);
// arrivalCarousel.addEventListener('touchend', dragStop);



// img swap start ///

const mainImg = document.querySelectorAll('.arrival_slide img');
const shufleImg = document.querySelectorAll('.arrival_dot');

   const mainImgHandler = (shuffimg) => {

  shuffimg.forEach( function (swap) {
      swap.addEventListener('mouseenter', function ()  {
       
        let img = this.parentElement.parentElement.firstElementChild.firstElementChild;
        img.src = this.firstElementChild.src
      })

    })
   

   }
// }

mainImgHandler(shufleImg)


// img swap end ///

// SALES NEW ARRIVAL START //
 const toSalesBtn = document.querySelector('.banner_btn');
 const pageScroll = document.querySelector('.section-arrival');

 toSalesBtn.addEventListener('click', () => {
  pageScroll.scrollIntoView();
 })

// SALES NEW ARRIVAL END///


// wacth real on scroll start 

// wacth real on scroll end 
