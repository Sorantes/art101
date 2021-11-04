/**
 * Author:    Scarlett Orantes
 * Created:   10.31.2021
 *
 * (c) Copyright by Blub Corp.
 **/


//get element
var outputEl =document.getElementById("output");

//create new element with "p"
var new1El = document.createElement("p");

//use innerHTML to add some new text
new1El.innerHTML ="Please, Pick Me!";

//create another element, also with "p"
var new2El = document.createElement("p");

//use innerHTMl to add some new text
new2El.innerText ="Check out my new paragraph!";

//append both elements one at a time to the output
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

//change the css styling on the elements
new1El.style.color ="red";
new1El.style.background ="lightgreen";
new1El.style.marginright ="20px";
new1El.style.marginleft ="15px";
new2El.style.color ="blue";
new2El.style.background ="lightgreen";
