const hover = document.getElementById("hoverable");

hover.addEventListener("mouseover", function( event ) {
  event.target.style.background = "gray";
  event.target.style.color = "black";

}, false);

hover.addEventListener("mouseout", function(event) {
    event.target.style.background = "";
    event.target.style.color = "";
})
