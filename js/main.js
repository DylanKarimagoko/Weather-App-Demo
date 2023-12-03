
function fetchWeather (){
  document.querySelector("#loading").style.display = 'flex';
  const url = "https://www.7timer.info/bin/api.pl?";
  var value = document.getElementById("citySelected").value;
 fetch(url + value + "&product=civillight&output=json").then(
    response => response.json()
  ).then(data => {document.querySelector("#loading").style.display = 'none';
  var arr = data.dataseries;
  let items = "";
  var monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  for(let i = 0; i < arr.length; i++){
    var dt = arr[i].date.toString().substr(6);
    var mt = arr[i].date.toString().substr(4,2);

    var nthValue = nth(parseInt(dt));
 
    var month = monthsArray[parseInt(mt) - 1];
items += ` <div class="weatherCard">
<div class="weatherCardDay"><p class="weatherCardDate">${month + " " + dt}</p> <p class="nthValue">${nthValue}</p> </div>
<div class="weatherConditions">
<img src="./images/${arr[i].weather}.png" alt="icon"/>
<p>${arr[i].weather}</p>
</div>
<div class="weatherCardDetails">
    <div class="weatherCardExp">
        <p>High</p>
        <p>${arr[i].temp2m.max}°C</p>
    </div>
    <div class="weatherCardExp">
        <p>Low</p>
        <p>${arr[i].temp2m.min}°C</p>
    </div>
    <div class="weatherCardExp">
        <p>Wind</p>
        <p>${arr[i].wind10m_max} mph</p>
    </div>

</div>
</div>`;
  }


  document.querySelector("#weatherContainer").innerHTML = items;
  }).catch(error => {console.error('Error:', error)});
}



