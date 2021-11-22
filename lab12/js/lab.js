/**
 * Author:    Scarlett Orantes
 * Created:   11.09.2021
 *
 * (c) Copyright by Blub Corp.
 **/


//create the sorting that will allow strings to be inserted
function sortingHat(str) {
   var num = str.length;
   var mod = num%4;
   if (mod===0) {
     return "Gryffindor";
  }
    else if (mod===1) {
      return "Ravenclaw";
  }
    else if (mod===2) {
      return "Slytherin";
  }
    else if (mod===3) {
      return "Hufflepuff";
  }
}
//make button display the results of sorting hat

var thisButton = document.getElementById("button");
thisButton.addEventListener("click", function () {
  var input = document.getElementById("input").value;
  var hats = sortingHat(input);
  newText = "<p> The Sorting Hat Has Sorted You Into" + hats + "</p>";
  document.getElementById("output").innerHTML = newText;
})
