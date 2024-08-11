
const apiKey = "8c503b560d80c3bcae28609782789c58";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&";

const searchBox=document.querySelector(".search input");
const searchButton=document.querySelector(".search button");
const weatherIcon= document.querySelector(".weather-icon");


async function checkWeather(city) {
    const response = await fetch(apiUrl + `q=${city}` + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "&deg;C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed  + "Km/hr";

    if(data.weather[0].main=="Clouds")
    {
        weatherIcon.src="images/Clouds.png";
    }
    else if(data.weather[0].main=="Clear")
        {
            weatherIcon.src="Images/clear.png";
    }
    else if(data.weather[0].main=="Drizzle")
        {
            weatherIcon.src="Images/Drizzle.png";
    }
    else if(data.weather[0].main=="Rain")
        {
            weatherIcon.src="Images/rain.png";
    }
    else if(data.weather[0].main=="Mist")
        {
            weatherIcon.src="Images/mist.png";
    }
    else if(data.weather[0].main=="Snow")
        {
            weatherIcon.src="Images/snow.png";
    }
}
searchButton.addEventListener("click",function(){
    checkWeather(searchBox.value);

})