const hover = document.getElementById("hoverable");

hover.addEventListener("mouseover", function( event ) {
  event.target.style.background = "blue";
  event.target.style.color = "red";

}, false);

hover.addEventListener("mouseout", function(event) {
    event.target.style.background = "";
    event.target.style.color = "";
})
