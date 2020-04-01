var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/lisa-doma.jpg') {
      myImage.setAttribute ('src','images/lisa-sa.jpg');
    } else {
      myImage.setAttribute ('src','images/lisa-doma.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Введи свое имя');
    localStorage.setItem('имя', myName);
    myHeading.textContent = 'Ты пидор, ' + myName;
  }

  if(!localStorage.getItem('имя')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('имя');
    myHeading.textContent = 'Ты пидор, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }