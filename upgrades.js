console.time()

window.addEventListener("load", function() {
  dropText()
  dropText1()
  dropText2()
  dropText3()
  dropText4()
  dropText5()
})

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



var p1 = document.getElementById("p1");

function backgroundChange1() {
  document.getElementById("img").style.backgroundImage = "url('https://pbs.twimg.com/media/Foh8cq1WcAEwZNv?format=jpg&name=4096x4096')"
  document.getElementById("img").style.transform = "scaleX(1)"
}

p1.addEventListener("mouseover", backgroundChange1);

var p2 = document.getElementById("p2");

function backgroundChange2() {
  document.getElementById("img").style.backgroundImage = "url('https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2023/03_29_revuelto/gate_models_hero_01.jpg')"
  document.getElementById("img").style.transform = "scaleX(1)"
}

p2.addEventListener("mouseover", backgroundChange2);

var p3 = document.getElementById("p3");

function backgroundChange3() {
  document.getElementById("img").style.backgroundImage = "url('https://www.luxuryandexpensive.com/pic/44527_1.jpg')"
  document.getElementById("img").style.transform = "scaleX(-1)"
}

p3.addEventListener("mouseover", backgroundChange3);



var droptxt = document.getElementById("myDropdown");
var droptxt1 = document.getElementById("myDropdown1");
var droptxt2 = document.getElementById("myDropdown2");
var droptxt3 = document.getElementById("myDropdown3");
var droptxt4 = document.getElementById("myDropdown4");
var droptxt5 = document.getElementById("myDropdown5");

var pm = document.getElementById("pm");
var pm1 = document.getElementById("pm1");
var pm2 = document.getElementById("pm2");
var pm3 = document.getElementById("pm3");
var pm4 = document.getElementById("pm4");
var pm5 = document.getElementById("pm5");

function dropText() {
  if (droptxt.style.display !== 'none') {
    droptxt.style.display = 'none';
    pm.classList.remove('activer');
  }
  else {
    droptxt.style.display = 'block';
    pm.classList.add('activer');
  }
};
function dropText1() {
  if (droptxt1.style.display !== 'none') {
    droptxt1.style.display = 'none';
    pm1.classList.remove('activer');
  }
  else {
    droptxt1.style.display = 'block';
    pm1.classList.add('activer');
  }
};
function dropText2() {
  if (droptxt2.style.display !== 'none') {
    droptxt2.style.display = 'none';
    pm2.classList.remove('activer');
  }
  else {
    droptxt2.style.display = 'block';
    pm2.classList.add('activer');
  }
};
function dropText3() {
  if (droptxt3.style.display !== 'none') {
    droptxt3.style.display = 'none';
    pm3.classList.remove('activer');
  }
  else {
    droptxt3.style.display = 'block';
    pm3.classList.add('activer');
  }
};
function dropText4() {
  if (droptxt4.style.display !== 'none') {
    droptxt4.style.display = 'none';
    pm4.classList.remove('activer');
  }
  else {
    droptxt4.style.display = 'block';
    pm4.classList.add('activer');
  }
};
function dropText5() {
  if (droptxt5.style.display !== 'none') {
    droptxt5.style.display = 'none';
    pm5.classList.remove('activer');
  }
  else {
    droptxt5.style.display = 'block';
    pm5.classList.add('activer');
  }
};














fetch("./footer/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
});

fetch("./header/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.getElementById("myTopnav").innerHTML = data;
});

fetch("./loader/loader.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.getElementById("loader").innerHTML = data;
});



console.timeEnd()