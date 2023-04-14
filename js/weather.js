/*

	Assignment 2 | COMP1073-02 Client-Side JavaScript

	Group Members: 
	Abimbola Fasawe - 200472319
	Amanda Cooper - 200507894 

*/

var search = document.querySelector('location');
var display = document.querySelector('pre');
let url;

const baseURL = 'https://api.weatherstack.com/current';
const key = 'b1791ffb12a04e6011cbb08f8186e847';

function fetchResults(event){
    event.preventDefault();
    url = `${baseURL}?access_key=${key}&query=${location.value}&forecast=1`;
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











