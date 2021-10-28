/**
 * Author:    Scarlett Oranets
 * Created:  10. 27. 2021
 *
 * (c) Copyright by Blub Corp.
 **/

function minusTwelve(x){
    return (x-12);
  }

// test function
console.log("is it ninety-one? ", minusTwelve(91));
console.log("is it seventy-six ", minusTwelve(76));

var cArray = [5, 8, 12, 17, 24, 3]
console.log("My Array", cArray);

var result = cArray.map(minusTwelve);
//should return [-7, -4, 0, 5, 12, 18]
console.log("Difference of cArray:", result);

var result = cArray.map(function(x){
    return x * 5;
})
//should return [25, 40, 60, 85, 120, 150]
console.log("Product of cArray:", result);
