
let control = false;
let bgVideo = document.querySelector('.bg-video__content');
 let btn = document.querySelector('.bg-video_control');

 btn.addEventListener('click',() => {
  if(!btn.classList.contains('active')) {
    bgVideo.pause()
    
     btn.classList.add('active');
  }else {
    bgVideo.play()
    btn.classList.remove('active');
  }
 })