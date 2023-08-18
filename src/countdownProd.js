
let months = [
  'January',
  'Febuary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

let weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]


 const  timeSpan = document.querySelectorAll('.deadline-format h4');
 const deadline = document.querySelector('.banner_deadline');
 let salesDate = document.querySelector('.sales-date');

 let tempDate = new Date();
 let tempYear = tempDate.getFullYear();
 let tempMonth =  tempDate.getMonth();
 let tempday = tempDate.getDate();

  // let myDate = new Date(2023,3,25,11,30,0);

  const myDate = new Date(tempYear,tempMonth,tempday + 1, 11,30,0)
  
  const year = myDate.getFullYear()
  const hours = myDate.getHours();
  const minutes = myDate.getMinutes();
  const date = myDate.getDate()
  const day = weekDays[myDate.getDay()];
  const month = months[myDate.getMonth()];

  salesDate.textContent = `sales ends on ${day},${date} ${month} ${year}, ${hours}:${minutes}am`;

 

  const futureTime = myDate.getTime();
 

  function getRemainingTime () {
    const today = new Date().getTime()
    const t = futureTime - today;

    // values in miliseeconds

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinutes = 60 * 1000;
    
    //calculate all values

    let days = t/oneDay;
    days = Math.floor(days);

    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinutes)
    let seconds = Math.floor((t % oneMinutes) / 1000);

    // set value arry;

    const values = [days,hours,minutes,seconds];
    
    function format(item) {
    if(item < 10) {
      return item = `0${item}`;
    }else {
      return item
    }
    }

    timeSpan.forEach(function(item,index) {
     item.innerHTML = format(values[index]);
    });
    if(t < 0) {
      clearInterval(countdown)
      deadline.innerHTML = `<h4>Sorry , this sales has expired &#x1F641;</h4>`
    }
  }
  // countdown
  let countdown = setInterval(getRemainingTime, 1000);
  getRemainingTime()
