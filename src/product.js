
// SHOW TO SORT SECTION start////

 const showFilterBtn = document.querySelector('.toogle-prodFilter');
 const hideFilterBtn = document.querySelector('.closeFilter');
 const filter = document.querySelector('.product_left');
 
  
  showFilterBtn.addEventListener('click', () => {
   filter.classList.add('visible')
   
 })

 hideFilterBtn.addEventListener('click', () => {
  filter.classList.remove('visible')
  
 })


//  GENDER COLLAPES START
const genderVisible = document.querySelector("[data-gender]");
const genderBtn = document.querySelector('.gender-btn');


genderBtn.addEventListener('click', () => {

  // genderVisible.style.maxHeight = "20px"
  if(genderVisible.style.maxHeight) {
    genderVisible.style.maxHeight = null;
    genderVisible.style.overflow = "hidden";
    genderBtn.classList.remove('active')

    
  }else {
    genderVisible.style.maxHeight = genderVisible.scrollHeight  + "px"
    genderVisible.style.overflow = "visible";
    genderBtn.classList.add('active')

  }
})
//  GENDER COLLAPES END










// //// ////!
