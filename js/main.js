var currentWeather = document.getElementById('currentWeather')
var weatherInfo = document.getElementById('weatherInfo')
var search = document.getElementById('search')
var realsearch = document.getElementById('realsearch')
var CurrentWeatherapi
var city ='asyut'
var day = new Date();
var currentDay=day.toString()
var currentDayInfo=currentDay.split(" ")

var nextDayTime = new Date();
nextDayTime.setDate(day.getDate() + 1);
var nextDayTimeInfo=nextDayTime.toString()
var nextDayTimeSplit=nextDayTimeInfo.split(" ")

var nextDayTime2 = new Date();
nextDayTime2.setDate(day.getDate() + 2);
var nextDayTimeInfo2=nextDayTime2.toString()
var nextDayTimeSplit2=nextDayTimeInfo2.split(" ")
console.log(nextDayTimeSplit2);

var nextDayTime3 = new Date();
nextDayTime3.setDate(day.getDate() + 3);
var nextDayTimeInfo3=nextDayTime3.toString()
var nextDayTimeSplit3=nextDayTimeInfo3.split(" ")
console.log(nextDayTimeSplit3);

var nextDayTime4 = new Date();
nextDayTime4.setDate(day.getDate() + 4);
var nextDayTimeInfo4=nextDayTime4.toString()
var nextDayTimeSplit4=nextDayTimeInfo4.split(" ")
console.log(nextDayTimeSplit4);


async function getCurrentWeather(city){
   var getCurrentWeather = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=8b021434c162423d8c8145640242106&q=${city}?&days=5`)
   if (getCurrentWeather.ok && 400 != getCurrentWeather.status) {
       CurrentWeatherapi = await getCurrentWeather.json()
       displayCurrentWeather(CurrentWeatherapi)
       
   }
}
getCurrentWeather(city)
search.addEventListener('input',function(){
    city=search.value
    if(search.value==''){
        city='asyut'
    }
    getCurrentWeather(city)
})
realsearch.addEventListener('click',function(){
    city=search.value
    if(search.value==''){
        city='asyut'
    }
    getCurrentWeather(city)
})


function displayCurrentWeather(CurrentWeatherapi){
        let text = CurrentWeatherapi.location.localtime;
        let text2 = CurrentWeatherapi.forecast.forecastday[0].day
        var nextDayInfo=CurrentWeatherapi.forecast.forecastday[1].day
        console.log(text2);

        var nextDayInfo2=CurrentWeatherapi.forecast.forecastday[2].day
        var nextDayInfo3=CurrentWeatherapi.forecast.forecastday[3].day
        var nextDayInfo4=CurrentWeatherapi.forecast.forecastday[4].day
        const myArray = text.split(" ");
        let myhoursplit = myArray[1].split(':')
        let current=Number( myhoursplit[0])
        hours = ((current + 11) % 12 + 1);
        
         var cartoa1=''
         var cartoa2=''
         cartoa1+=`
         <div class="currentWeatherHeader ">
              <div class="imgWeatherContainer pt-3">
                <img src="${CurrentWeatherapi.current.condition.icon}" alt="" />
              </div>
              <h4 class="pt-2">${CurrentWeatherapi.current.condition.text}</h4>
              <h1>${text2.maxtemp_c}°</h1>
            </div>
            <div class="currentWeatherfooter">
              <h3>${currentDayInfo[2]} ${currentDayInfo[1]}</h3>
              <p class="fw-bold pt-2 m-0">${currentDayInfo[0]} ${hours}:${myhoursplit[1]}</p>
              <h4 class="">${CurrentWeatherapi.location.name}</h4>
            </div>     
         `
         cartoa2+=`
                <div class="colm1 col-md-6 animate__animated animate__fadeInLeft">
              <div class="WeatherItems shadow rounded-5 ps-3 d-flex flex-wrap">
                <div class="item w-50 d-flex ps-3 pt-3">
                <div class="WeatherInforImg pt-1 me-2">
                    <img src="images/humidity.png" alt="">
                </div>
                <div class="WeatherInforText">
                    <h6 class="m-0">humidity</h6>
                    <h6>${CurrentWeatherapi.current.humidity}%</h6>
                </div>
                </div>
                <div class="item w-50 d-flex ps-3 pt-3">
                <div class="WeatherInforImg pt-1 me-2">
                    <img src="images/icons8-wind-32.png" alt="">
                </div>
                <div class="WeatherInforText">
                    <h6 class="m-0">wind</h6>
                    <h6>${CurrentWeatherapi.current.wind_kph} kph</h6>
                </div>
                </div>
                <div class="item w-50 d-flex ps-3 pt-3">
                <div class="WeatherInforImg pt-1 me-2">
                    <img src="images/uv-index.png" alt="">
                </div>
                <div class="WeatherInforText">
                    <h6 class="m-0">uv-index</h6>
                    <h6>${CurrentWeatherapi.current.uv} of 10</h6>
                </div>
                </div>
                <div class="item w-50 d-flex ps-3 pt-3">
                <div class="WeatherInforImg pt-1 me-2">
                    <img src="images/icons8-compass-32.png" alt="">
                </div>
                <div class="WeatherInforText">
                    <h6 class="m-0">dirction</h6>
                    <h6>${CurrentWeatherapi.current.wind_dir}</h6>
                </div>
                </div>
                </div>
                </div>
         </div>
             <div class="colm2 col-md-6 animate__animated animate__fadeInRight">
               <div class="row g-4">
                 <div class="col-md-6">
                   <div class="WeatherForcast shadow rounded-5">
                     <div class="WeatherForcastHeader">
                       <div class="imgWeatherContainer">
                         <img src="${nextDayInfo.condition.icon}" alt="" />
                       </div>
                       <h4 class="">${nextDayInfo.condition.text}</h4>
                       <h1>${nextDayInfo.maxtemp_c}°</h1>
                     </div>
                     <div class="WeatherForcastfooter pt-2">
                       <h3>${nextDayTimeSplit[2]} ${nextDayTimeSplit[1]}</h3>
                       <p class="m-0">${nextDayTimeSplit[0]} ${hours}:${myhoursplit[1]}</p>
                       <h4 class="city">${CurrentWeatherapi.location.name}</h4>
                     </div>     
                   </div>
               </div>
                 <div class="col-md-6">
                   <div class="WeatherForcast shadow rounded-5">
                     <div class="WeatherForcastHeader">
                       <div class="imgWeatherContainer">
                         <img src="${nextDayInfo2.condition.icon}" alt="" />
                       </div>
                       <h4 class="">${nextDayInfo2.condition.text}</h4>
                       <h1>${nextDayInfo2.maxtemp_c}°</h1>
                     </div>
                     <div class="WeatherForcastfooter pt-2">
                       <h3>${nextDayTimeSplit2[2]} ${nextDayTimeSplit2[1]}</h3>
                       <p class="m-0">${nextDayTimeSplit2[0]} ${hours}:${myhoursplit[1]}</p>
                       <h4 class="city">${CurrentWeatherapi.location.name}</h4>
                     </div>     
                   </div>
               </div>
                 <div class="col-md-6">
                   <div class="WeatherForcast shadow rounded-5">
                     <div class="WeatherForcastHeader">
                       <div class="imgWeatherContainer">
                         <img src="${nextDayInfo3.condition.icon}" alt="" />
                       </div>
                       <h4 class="">${nextDayInfo3.condition.text}</h4>
                       <h1>${nextDayInfo3.maxtemp_c}°</h1>
                     </div>
                     <div class="WeatherForcastfooter pt-2">
                       <h3>${nextDayTimeSplit3[2]} ${nextDayTimeSplit3[1]}</h3>
                       <p class="m-0">${nextDayTimeSplit3[0]} ${hours}:${myhoursplit[1]}</p>
                       <h4 class="city">${CurrentWeatherapi.location.name}</h4>
                     </div>     
                   </div>
               </div>
                 <div class="col-md-6">
                   <div class="WeatherForcast shadow rounded-5">
                     <div class="WeatherForcastHeader">
                       <div class="imgWeatherContainer">
                         <img src="${nextDayInfo4.condition.icon}" alt="" />
                       </div>
                       <h4 class="">${nextDayInfo4.condition.text}</h4>
                       <h1>${nextDayInfo4.maxtemp_c}°</h1>
                     </div>
                     <div class="WeatherForcastfooter pt-2">
                       <h3>${nextDayTimeSplit4[2]} ${nextDayTimeSplit4[1]}</h3>
                       <p class="m-0">${nextDayTimeSplit4[0]} ${hours}:${myhoursplit[1]}</p>
                       <h4 class="city">${CurrentWeatherapi.location.name}</h4>
                     </div>     
                   </div>
               </div>
               </div>
         </div>
         `
         currentWeather.innerHTML=cartoa1
         weatherInfo.innerHTML=cartoa2
}

// var day = new Date();
// var currentDay=day.toString()
// var currentDayInfo=currentDay.split(" ")
// console.log(currentDayInfo);


// const d = new Date();
// let text = d.toString();
// console.log(typeof(text));

// var nextDay = new Date();
// nextDay.setDate(day.getDate() + 1);
// console.log(nextDay)