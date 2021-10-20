/**
 * Author:    Scarlett Orantes
 * Created:   10.20.2021
 *
 * (c) Copyright by Blub Corp.
 **/


//Declare and Define Variables
myTransport = [ "Car" , "Bus" , "Bike" , "Carpool", "Train"
    ];


myMainRide = {
  make: "MINI",
  model : "Cooper GB",
  color : "Black",
  year : 2021,
  age :  function() {
      return 2021 - age;
    }
}


//Output
document.writeln("Kinds of Transportation:", myTransport, "<br>");
document.writeln("Not Really My Car: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
