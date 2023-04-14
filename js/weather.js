/*

	Assignment 2 | COMP1073-02 Client-Side JavaScript

	Group Members: 
	Abimbola Fasawe - 200472319
	Amanda Cooper - 200507894 

*/
const baseURL = 'https://www.meteosource.com/api/v1/free/';
const key = 'cldwoqx5laujdwap6embjr6r2z7b3g5bmpn9mvuf';
let url;

const locationText = document.querySelector('.location');
const searchLocation = document.querySelector('.button');
const h2 = document.querySelector('h2');
const cloudCover = document.querySelector('.cloudCover');
const summary = document.querySelector('.summary');
const temp = document.querySelector('.temp');
const windSpeed = document.querySelector('.windSpeed');


searchLocation.onclick = function(){
    console.log(locationText.value);

    var locationName = locationText.value;
    locationName.replace(' ', '%20');
    console.log(locationName.tolowerCase);

    url = `${baseURL}find_places?text=${locationText.value}&language=en&key=${key}`;

    console.log(url);
    fetch(url)
    .then(response => {
        if (!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }
        let jsonLocation = response.json();
        return jsonLocation;
    })
    .then(function (jsonLocation){
        isolateLocation(jsonLocation);
        displayResults(locationName);
    })
    //.catch(error => section.textContent = `Could not fetch: ${error}`);

}


function isolateLocation(jsonLocation){
    console.log(jsonLocation);

    console.log(jsonLocation[0]);
    let firstInstance = jsonLocation[0];
    let placeId = firstInstance.place_id;
    console.log(firstInstance.place_id);
    getWeather(placeId);
    displayResults(placeId);

}

function getWeather(placeId){
    urlWeather = `${baseURL}point?place_id=${placeId}&sections=current&timezone=auto&language=en&units=auto&key=${key}`;
    
    fetch(urlWeather)
    .then(response => {
    if (!response.ok){
        throw new Error(`HTTP error: ${response.status}`);
    }
    let jsonWeather = response.json();
    return jsonWeather;
})
.then(function (jsonWeather){
    displayResults(jsonWeather);
    console.log(jsonWeather);
})
//.catch(error => section.textContent = `Could not fetch: ${error}`);
}


function displayResults(jsonWeather){

    console.log(jsonWeather.current.summary);

    const header = (locationText.value).split(" ");
    for (let i = 0; i < header.length; i++){
        header[i] = header[i].charAt(0).toUpperCase() + header[i].slice(1);
    }
    let title = header.join(' ');

    h2.textContent = title;
    cloudCover.textContent = 'Cloud Cover: ' + jsonWeather.current.cloud_cover;
    summary.textContent = 'Summary: ' + jsonWeather.current.summary;
    temp.textContent = 'Tempurature' + jsonWeather.current.temperature;
    windSpeed.textContent = 'Wind Speed: ' + jsonWeather.current.wind.speed;

   
    

}


