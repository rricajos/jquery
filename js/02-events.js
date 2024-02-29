$(document).ready(function () {
  // Mouse over and out
  // $("#02-events").mouseover(function () {
  //   $(this).css("background", "#ADD8E6");
  // });
  // $("#02-events").mouseout(function () {
  //   $(this).css("background", "#fff");
  // });

  // hover for elements starting with id 02-events*
  $("[id^='02-events']").hover(
    // param 1 : mouseover
    function () {
      $(this).css("background", "#ADD8E6");
      $(this).css("cursor", "pointer")
    },
    // param 2 : mouseout
    function () {
      $(this).css("background", "#fff");
    }
  );

  function handleMove(event) {
    $("#myElement > p").text("Move event: X=" + event.pageX + ", Y=" + event.pageY);
  }

  // Mousemove event
  $(document).on("mousemove", handleMove);

  // Touchmove event
  $(document).on("touchmove", handleMove);

  // dbl click (also for touch events.)
  $("[id^='02-events']").click(function () {
    $(document).off("mousemove");
    $(document).off("touchmove");
    $(this).css("background", "yellow");
  });
  // dbl click handle
  $("[id^='02-events']").dblclick(function () {
   
    $(this).addClass("bgyellow");
  });



});

/* 

These are just some examples. 
There are many other events available, and the 
list may vary depending on the environment and 
the object to which you are attaching the event.


Mouse Events:

click
dblclick
mouseover
mouseout
mousedown
mouseup
mousemove

Keyboard Events:

keydown
keyup
keypress

Form Events:

submit
reset
change
focus
blur
input

Window Events:

load
unload
resize
scroll

Document Events:

DOMContentLoaded
readystatechange

Navigation Events:

hashchange
beforeunload
popstate

Animation Events:

transitionend
animationstart
animationend
animationiteration

Drag and Drop Events:

dragstart
drag
dragenter
dragleave
dragover
drop
dragend



*/