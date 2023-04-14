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
const section = document.querySelector('section');


searchLocation.onclick = function(){
    console.log(locationText.value);

    var locationName = locationText.value;
    locationName.replace(' ', '%20');
    console.log(locationName.tolowerCase);

    url = `${baseURL}find_places?text=${locationText.value}&language=en&key=${key}`;


    //url = `${baseURL}find_places?text=${locationText.value}&sections=current&timezone=auto&language=en&units=auto&key=${key}`;
    console.log(url);
    fetch(url)
    .then(response => {
        if (!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }
        //return response.text();
        return response.json();
    })
    //.then(text => section.textContent = text)
    .then(function (json){
        displayResults(json);
    })
    .catch(error => section.textContent = `Could not fetch: ${error}`);

}


function displayResults(json){
    console.log(json);

    //let locations = json.response.docs;
    console.log(json[0]);
    let firstInstance = json[0];
    console.log(firstInstance.place_id);

    /*
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    };
    let locations = json.response.docs;


    if (locations.length === 0){
        const noResults = document.createElement('p');
        noResults.textContent = 'No results returned.'
        section.appendChild(noResults);
    } else {
        for(let i = 0; i < locations.length; i++){
            const loc = document.createElement('h2');
            const country = document.createElement('p');
            const lat = document.createElement('p');
            const long = document.createElement('p');
            const time = document.createElement('p');
        }
    }
    */

}




/*
searchLocation.addEventListener('click', function(){
    let placeID = locationText.value;
    console.log(placeID);
    fetchResults(placeID);
});
*/


//urlPlace = `${baseURL}find_places?text=new%20york&language=en&key=${key}`;
/*
url = `${baseURL}point?find_places=${locationText}&sections=current&timezone=auto&language=en&units=auto&key=${key}`;

function fetchResults(url){
    //url = `${baseURL}point?find_places=${placeID}&sections=current&timezone=auto&language=en&units=auto&key=${key}`;

    fetch(url)
        .then(response => {
            if (!response.ok){
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.text();
        })
        .then(text => section.textContent = text)
        .catch(error => section.textContent = `Could not fetch: ${error}`);
}
*/
/*
url = `${baseURL}point?find_places=${locationText.value}&sections=current&timezone=auto&language=en&units=auto&key=${key}`;

function fetchResults(event){
    event.preventDefault();
    url = `${baseURL}?access_key=${key}&query=${locationText.value}&forecast=1`;
  

    
    fetch(url).then(function (result){
        return result.json();
    }).then(function (json){
        displayResults(json);
    })
};


function displayResults(json) {
    console.log(json);
}

    while (section.firstChild) {
         section.removeChild(section.firstChild);
     };

    let weather = json.response.docs;

    if (weather.length === 0){
        const para = document.createElement('p');
        para.textContent = 'No results returned.'
        section.appendChild(para);
    } else {
        for (let i = 0; i < weather.length; i++){

        }

    }
    
*/










