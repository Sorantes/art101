/**
 * Author:    Scarlett Orantes
 * Created:   11.08.2021
 *
 * (c) Copyright by Blub Corp.
 **/

//create a button that will change #uno into a paragraph upon click a button.
$("#uno");
unoEl = $("#uno");

$("#first");
firstEl = $("#first");

//should allow id to toggle
 $("#uno").ready(function(){
   $("#first").click(function(){
     $("#uno").toggle("x");})});

//find the elements
$("#dos");
dosEl = $("#dos");

$("#two");
twoEl = $("#two");

//should allow id to toggle

$("#dos").ready(function(){
  $("#two").click(function(){
    $("#dos").toggle("x");})});

//find the elements
$("tres");
tresEl = $("#tres");

$("third");
thirdEl = $("third");

//should allow id to toggle
$("#tres").ready(function(){
  $("#third").click(function(){
    $("#tres").toggle("x");})});

//change css on a button through the action of another buttons
