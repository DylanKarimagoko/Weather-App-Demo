  // create a function to update the date and time
  function updateDateTime() {
    // get date time
    const now = new Date();
    const currentTime = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true}) ;

    // day ranges from 0 to 6
    const daysArray = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"

    ]
    var monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const currentDay = daysArray[now.getDay()];
    const currentMonth = monthsArray[now.getMonth()]

   
    document.querySelector('#timeDisplay').textContent = currentTime;
    document.querySelector('#dayNth').textContent = nth(now.getDate());
    document.querySelector('#dayDisplay').textContent = currentDay + ", " + currentMonth + " "+ now.getDate().toString();
  }


  const nth = (d) => {
    const dString = String(d);
    const last = +dString.slice(-2);
    if (last > 3 && last < 21) return 'th';
    switch (last % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  };

  updateDateTime();
  // Update every 60 seconds or minute
  setInterval(updateDateTime, 60000);