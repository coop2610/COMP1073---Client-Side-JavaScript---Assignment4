/*

	Assignment 2 | COMP1073-02 Client-Side JavaScript

	Group Members: 
	Abimbola Fasawe - 200472319
	Amanda Cooper - 200507894 

*/
const baseURL = 'https://api.weatherstack.com/current';
const key = 'b1791ffb12a04e6011cbb08f8186e847';
let url;

const location = document.querySelector('location');
const section = document.querySelector('section');
const searchLocation = document.querySelector('.search');

search.addEventListener('submit', fetchResults);

function fetchResults(event){
    event.preventDefault();
    url = `${baseURL}?access_key=${key}&query=${location.value}&forecast=1`;
    
    fetch(url).then(function (response){
        return response.json();
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











