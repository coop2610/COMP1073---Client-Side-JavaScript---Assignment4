/*

	Assignment 4 | COMP1073-02 Client-Side JavaScript

	Group Members: 
	Abimbola Fasawe - 200472319
	Amanda Cooper - 200507894 

*/

//connect to API
const baseURL = 'https://www.meteosource.com/api/v1/free/';
const key = 'cldwoqx5laujdwap6embjr6r2z7b3g5bmpn9mvuf';
let url;

//select HTML elements
const locationText = document.querySelector('.location');
const searchLocation = document.querySelector('.button');
const h2 = document.querySelector('h2');
const p = document.querySelector('p');

//onClick function
searchLocation.onclick = function(){
    console.log(locationText.value);

    //collect input
    var locationName = locationText.value;
    locationName.replace(' ', '%20');

    //form url
    url = `${baseURL}find_places?text=${locationText.value}&language=en&key=${key}`;

    //fetch data using url
    fetch(url)
    .then(response => {
        if (!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }
        let jsonLocation = response.json();
        return jsonLocation;
    })
    .then(function (jsonLocation){
        //send data to functions isolateLocation
        isolateLocation(jsonLocation);
    })

}

//get place_id from location URL
function isolateLocation(jsonLocation){
    console.log(jsonLocation[0]);
    let firstInstance = jsonLocation[0];
    let placeId = firstInstance.place_id;
    getWeather(placeId);

}

//use the place_id to fetch weather information
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

}

//dislplay weather information 
function displayResults(jsonWeather){

    //change location to uppercase
    const header = (locationText.value).split(" ");
    for (let i = 0; i < header.length; i++){
        header[i] = header[i].charAt(0).toUpperCase() + header[i].slice(1);
    }
    let title = header.join(' ');

    let summary = jsonWeather.current.summary;
    let cloudCover = jsonWeather.current.cloud_cover;
    let temp = jsonWeather.current.temperature;
    let windSpeed = jsonWeather.current.wind.speed;

    //output data
    h2.textContent = 'Location: ' + title;
    p.textContent = `Summary: ${summary}, Cloud Cover: ${cloudCover}, Temperature: ${temp}
    , Wind Speed: ${windSpeed}`;
   

}


