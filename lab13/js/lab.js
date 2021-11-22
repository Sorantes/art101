/**
 * Author:    Scarlett Oantes
 * Created:   11.21.2021
 *
 * (c) Copyright by Blub Corp.
 **/


 for ( var i=0; i<=200; i++) {
  var str= "";
  if (i % 3 == 0) {
    str += "Fizz";
  }
  if (i % 5 == 0) {
    str += "Buzz";
  }
  if (i % 7 == 0) {
    str += "Boom";
  }
  if (i % 13 == 0) {
    str += "Bang";
  }
  if (str == "") {
    str = i;
  }
  else {
    str += "!";
  }
  console.log(str);

}

str += "Fizz!";
$("#output").append("<p>" + str + "</p>");

str += "Buzz!";
$("#output").append("<p>" + str + "</p>");

str += "Boom!";
$("#output").append("<p>" + str + "</p>");

str += "Bang!";
$("#output").append("<p>" + str + "</p>");

str += "Buzz! FizzBuzzBoom"
$("#output").append("<p>" + str + "</p>");

str += "Buzz! FizzBuzzBoomBang"
$("#output").append("<p>" + str + "</p>");
