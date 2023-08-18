
const sideBar = document.querySelector('.navbar_aside');
const closeSideBar = document.querySelector('.navbar_aside--close');
const openSideBar = document.querySelector('.navbar_open');


const toggleSelf = () => {
  sideBar.classList.toggle('visible')
  openSideBar.classList.toggle('visible')
}

closeSideBar.addEventListener('click',() => {
  toggleSelf()
  document.body.style.overflow = ''

})
openSideBar.addEventListener('click',() => {
  toggleSelf()
  document.body.style.overflow = 'hidden'
})

