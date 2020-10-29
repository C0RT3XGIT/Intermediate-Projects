function randNumber() {
  let rNum = Math.floor(Math.random() * 4);
  return rNum;
}

function randImages() {
  for (let i = 1; i <= 4; i++) {
    let curentImg = document.getElementById("img" + i);
    curentImg.setAttribute("style", "order:" + randNumber());
    console.log(curentImg);
  }
}

function hideImages() {
  let images = document.getElementsByTagName("img");
  var i;
  for (i = 0; i < images.length; i++) {
    images[i].className += " hideImgClass";
    // console.log(images[i].classList);
  }
}

function showImages() {
  let images = document.getElementsByTagName("img");
  var i;
  for (i = 0; i < images.length; i++) {
    images[i].className -= " hideImgClass";
    // console.log(images[i].classList);
  }
}

let i = 0;
let curImg = 0;
function checking(imgNr) {
  if (i == 0) {
    i++;
    curImg = imgNr;
  } else if (i == 1) {
    if (curImg == imgNr) {
      alert("Congratulations !");
      i = 0;
      curImg = 0;
      imgNr = 0;
      showImages();
      defaultP();
    } else {
      alert("Try Again !");
      i = 0;
      curImg = 0;
      imgNr = 0;
    }
  }
}

function startGame() {
  setTimeout(randImages, 1000);
  setTimeout(randImages, 2000);
  setTimeout(randImages, 3000);
  setTimeout(timedText, 2500);
  setTimeout(hideImages, 6000);
}

function timedText() {
  setTimeout(myTimeout1, 1000);
  setTimeout(myTimeout2, 2000);
  setTimeout(myTimeout3, 3000);
  setTimeout(myTimeoutGo, 3500);
}
function myTimeoutGo() {
  document.getElementById("timeing").innerHTML = "GO !";
}
function myTimeout1() {
  document.getElementById("timeing").innerHTML = "1 seconds";
}
function myTimeout2() {
  document.getElementById("timeing").innerHTML = "2 seconds";
}
function myTimeout3() {
  document.getElementById("timeing").innerHTML = "3 seconds";
}

function defaultP() {
  document.getElementById("timeing").innerHTML = "Are you ready ?";
}
