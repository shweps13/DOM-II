// Your code goes here

// Mouseover event
let nav = document.getElementById("nav");
//   console.log(nav)
nav.addEventListener("mouseenter", function(event) {   
  event.target.style.color = "purple";

  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);


nav.addEventListener("mouseover", function(event) {   
  event.target.style.color = "orange";

  setTimeout(function() {
    event.target.style.color = "";
  }, 1000);
}, false);



// Keydown event
const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("keydown", logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}