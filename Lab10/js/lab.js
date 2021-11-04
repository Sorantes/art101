/**
 * Author:    Name
 * Created:   11.05.2009
 *
 * (c) Copyright by Blub Corp.
 **/

 function putNameInTitle() {
   // When the button is pushed,
   // prompt the user to input their name
   // with the prompt() function.
   //var name = prompt("Please enter your name:");
   var field = document.getElementById("myfield");
   var name = field.value;

   // Use this input to change the text from
   // ‘Hello, World!’ to ‘Hello’ + the user’s name
   var headingEl = document.getElementById("output");
   headingEl.innerHTML = "My Name Is... " + name;
 }


 // Create an event handler within the JS file that listens for a button click.
 var buttonEl = document.getElementById("mybutton");
 buttonEl.addEventListener("click", putNameInTitle);

 buttonEl.style.color ="green";
 button
