const hourE1 = document.getElementById("hour")
const minuteE1 = document.getElementById("minutes")
const secondE1 = document.getElementById("seconds")
const ampmE1 = document.getElementById("ampm")

  function updateClock(){
    let date = new Date() ;
    let h = date.getHours() ;
    let m = date.getMinutes() ;
    let s = date.getSeconds() ;
    let ampm = "AM";
    if(h > 12){
        h = h - 12 ;
        ampm = "PM" ;
    }
    h = h < 10 ? "0"+h : h ;
    s = s < 10 ? "0"+s : s ;
    m = m < 10 ? "0"+m : m ;
    hourE1.innerText = h ;
    minuteE1.innerText = m ; 
    secondE1.innerText = s ;
    ampmE1,(innerText = ampm) ;
    setTimeout(()=>{
        updateClock() ;
    },1000)
  }
  updateClock() ;