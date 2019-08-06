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

function logKey(event) {
  log.textContent += ` ${event.code}`;
}


// Wheel event
function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.getElementById("wheel");
  el.onwheel = zoom;



// Drag'n'drop event
var dragged;
/* events fired on the draggable target */
document.addEventListener("drag", function(event) {
}, false);

document.addEventListener("dragstart", function(event) {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {
  // reset the transparency
  event.target.style.opacity = "";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function(event) {
  // prevent default to allow drop
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
  // highlight potential drop target when the draggable element enters it
  if (event.target.className == "dropzone") {
    event.target.style.background = "purple";
  }

}, false);

document.addEventListener("dragleave", function(event) {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
  }
}, false);

document.addEventListener("drop", function(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);


// Load event
window.addEventListener('load', (event) => {
    console.log('Page is fully loaded');
  });

// Focus event
const focusColor = document.querySelector('input');

focusColor.addEventListener('focus', (event) => {
  event.target.style.background = 'lightgreen';    
});

focusColor.addEventListener('blur', (event) => {
  event.target.style.background = '';    
});

// Resize event
window.addEventListener('resize', display);
function display() {
    document.querySelector('.width').innerText = document.documentElement.clientWidth;
    document.querySelector('.height').innerText = document.documentElement.clientHeight;
}
display();

// Scroll event
window.addEventListener('scroll', function() {
    document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
  });

window.onscroll = function() {scrollImg()};

function scrollImg() {
if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
    document.getElementById("dest").className = "slideUp";
}
}

// Select event
function logSelection(event) {
    const log = document.getElementById('sel');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;
  }
  
  const inputSel = document.querySelector('input');
  inputSel.addEventListener('select', logSelection);

// Dbclick event
const card = document.querySelector('img');
card.addEventListener('dblclick', function (event) {
  card.classList.toggle('large');
});

// prevent default here
function sign(event) {
    alert('Sign little bit later');
    event.preventDefault();
}
