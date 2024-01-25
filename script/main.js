// Personalized welcome message code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/graph_chart.png') {
    myImage.setAttribute ('src','images/KaldenPicture.jpg');
  } else {
    myImage.setAttribute ('src','images/graph_chart.png');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myButton.onclick = function() {
 alert('Future link to another page!')
}

