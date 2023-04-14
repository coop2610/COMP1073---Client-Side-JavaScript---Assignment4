/*

	Assignment 2 | COMP1073-02 Client-Side JavaScript

	Group Members: 
	Abimbola Fasawe - 200472319
	Amanda Cooper - 200507894 

*/
const baseURL = 'https://www.meteosource.com/api/v1/free/';
const key = 'cldwoqx5laujdwap6embjr6r2z7b3g5bmpn9mvuf';
let url;

const locationText = document.querySelector('location');
const section = document.querySelector('section');
const searchLocation = document.querySelector('.search');

//search.addEventListener('submit', fetchResults);
urlPlace = `${baseURL}find_places?text=new%20york&language=en&key=${key}`;


/*
url = `${baseURL}point?find_places=${locationText.value}&sections=current&timezone=auto&language=en&units=auto&key=${key}`;

function fetchResults(event){
    event.preventDefault();
    url = `${baseURL}?access_key=${key}&query=${locationText.value}&forecast=1`;
  *///  

    
    fetch(url).then(function (result){
        return result.json();
    }).then(function (json){
        displayResults(json);
    })
//};
/*
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











