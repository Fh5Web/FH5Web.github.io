console.time()

var loader = document.getElementById("loader");

loader.onanimationend = () => {
  loader.style.display = "none";
};



function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    x.classList.toggle("change");
  } else {
    x.className = "topnav";
  }
}



const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className != "responsive" && x.className === "topnav") {
    if (document.body.scrollTop > vh || document.documentElement.scrollTop > vh) {
      x.style.backgroundColor = "rgb(0, 0, 0, 0.6)";
    }
    else if (document.body.scrollTop < vh || document.documentElement.scrollTop < vh) {
      x.style.backgroundColor = "rgb(0, 0, 0, 0.2)";
    }
  }
}



myID = document.getElementById("imghold1");
myID2 = document.getElementById("imghold2");
myID3 = document.getElementById("imghold3");
myID4 = document.getElementById("imghold4");

var myScrollFunc = function () {
  var y = window.scrollY;
  if (y >= window.innerHeight * 0.4) {
    myID.className = "imghold showdiv"
    myID2.className = "imghold showdiv"
  } else {
    myID.className = "imghold hidediv"
    myID2.className = "imghold hidediv"
  }
  if (y >= window.innerHeight * 1.2) {
    myID3.className = "imghold showdiv"
    myID4.className = "imghold showdiv"
  } else {
    myID3.className = "imghold hidediv"
    myID4.className = "imghold hidediv"
  }
}



fetch("footer/footer.html", { mode: 'no-cors'})
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
});

fetch("header/header.html", { mode: 'no-cors'})
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.getElementById("myTopnav").innerHTML = data;
});

fetch("loader/loader.html", { mode: 'no-cors'})
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.getElementById("loader").innerHTML = data;
});



window.addEventListener("scroll", myScrollFunc);



console.timeEnd()