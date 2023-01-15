
        const daysEl = document.getElementById("days");
 const hoursEl = document.getElementById("hours");
 const minsEl = document.getElementById("mins");
 const secEl = document.getElementById("sec"); 

 const newYear = '01 jan 2024';

  function countdown(){
      const newYearDate = new Date(newYear);
      const currentDate = new Date();

      const totalSeconds = (newYearDate- currentDate)/1000;

      const days = Math.floor(totalSeconds/3600/24);
      const hours = Math.floor(totalSeconds/3600) % 24;

      const mins = Math.floor(totalSeconds/60) % 60;
      const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML=days;
     hoursEl.innerHTML=formatTime(hours);
     minsEl.innerHTML= formatTime(mins);
     secEl.innerHTML=formatTime(seconds);
     /* console.log( days, hours, mins, seconds) */
     
  }
  function formatTime(time){
      if (time < 10) {
          return ("0"+time)
      } else {
          return time
      }
  }
 /*  function formatTime(time){
      return time < 10 ? `0${time}` : time ;
  } */
  countdown();

  setInterval(countdown, 1000);
