$(document).ready(function () {
  console.log("Document ready - Load succsessfully !");

  // select element with id red
  $("#red")
    .css("background", "red")
    .css("color", "white");

  // select element with class yellow
  $(".yellow").css("background", "yellow")
    .css("color", "black")

  // select first element with class yellow
  console.log("select first element with class yellow" + $(".yellow").eq(1).prevObject[0]);
  console.log("select first element with class yellow" + $(".yellow")[0]);

  // change element text with id green
  $("#green").text("<p id='green'>  ==  $('#green')")
    .css("background", "green")
    .css("color", "white")

}) 