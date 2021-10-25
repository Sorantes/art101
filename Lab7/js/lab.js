/**
 * Author:    Scarlett Orantes
 * Created:   10.24.2021
 *
 * (c) Copyright by Blub Corp.
 **/

// sortUserName - A function that takews user input and sorts the letters
// of the their name.

function sortUserName () {
    var userName = window.prompt("You look new, can you tell me your name please");
  //split string to array
    var nameArray = userName.split('');
    console.log("userName =", userName);
  //sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort=", nameArraySort);
  //join array back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted=", nameSorted);
  //Lines above could be done in a single Line
  // userName.toLower()split.("").sort().join("")
    return nameSorted;
}

// output
document.writeln("Is this your name:",
  sortUserName(), "</br>");
