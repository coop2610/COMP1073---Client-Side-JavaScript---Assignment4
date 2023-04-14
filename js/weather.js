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
const searchLocation = document.querySelector('.search');
const section = document.querySelector('section');



//urlPlace = `${baseURL}find_places?text=new%20york&language=en&key=${key}`;

//url = `${baseURL}point?find_places=${locationText}&sections=current&timezone=auto&language=en&units=auto&key=${key}`;

function fetchResults(placeID){
    url = `${baseURL}point?find_places=${placeID}&sections=current&timezone=auto&language=en&units=auto&key=${key}`;

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





searchLocation.addEventListener('submit', function(){
    let placeID = locationText.value;
    console.log(placeID);
    fetchResults(placeID);
});




