

// const messages = [
//   {
//     head: 'why wait? try store pickup',
//     para: 'buy online & log into the universe',
//     link: 'join now',
//   },
//   {
//     head: 'why wait? try store pickup',
//     para: 'buy online & log into the can be ',
//     link: 'join now',
//   },
//   {
//     head: 'looking? goood gggg pickup',
//     para: 'lorem djdeidedhbhj hbdhd  bui',
//     link: 'marketing show now',
//   },
// ] 




// let mLoop = 0;
// const messageLoop = () => {
  
      
//   for (let i = 0; i < messages.length;i++) {
  
//     const messageHandle = .map((mess) => {
//       let { head, para, link } = mess;
//       return( `
//        <div class="blog_message-box_message">
//               <h3>${head}</h3>
//               <p>${para}</p>
//               <a href="#">${link}</a>
//             </div>
//       `)
//     }).join('')
//     messageDom.innerHTML = messageHandle

//      }
// }
  
const messageDom = document.querySelector('.blog_message-box');
const messages = document.querySelectorAll('.blog_message-box_message');

let mLoop = 0;
let mMax = messages.length -1
const messageHandle = () => {
  messages[mLoop].classList.remove('visible');
  messages[mLoop].classList.remove('visible');
  mLoop = (mLoop === mMax) ? 0 : mLoop + 1;
  messages[mLoop].classList.add('visible')
}
 

  setInterval(messageHandle, 7000)