console.time()

var global = this;

let slideIndex = 0;

var loader = document.getElementById("loader");
loader.onanimationend = () => {
  loader.style.display = "none";
};



function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000);
}



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
      document.getElementById("myTopnav").style.backgroundColor = "rgb(0, 0, 0, 0.6)";
      document.getElementById("up").style.opacity = "1";
    }
    else if (document.body.scrollTop < vh || document.documentElement.scrollTop < vh) {
      document.getElementById("myTopnav").style.backgroundColor = "rgb(0, 0, 0, 0.2)";
      document.getElementById("up").style.opacity = "0";
    }
  }
}



function carArray() {
  fetch("json/csvjson.json")
      .then(data => data.json())
      .then(response => {
        var carBrand = [];

        for(i = 74; i < 429; i++) {
          brand = response[i - 74].Name_and_model.split(" ");
          carBrand.push(brand[1]);
        }

        for(i = 450; i < 629; i++) {
          brand = response[i - 94].Name_and_model.split(" ");
          carBrand.push(brand[1]);
        }

        var uniqueCarBrands = [...new Set(carBrand)];


        var select = document.getElementById("make");
        for(i = 0; i < uniqueCarBrands.length; i++) {
          var el2 = document.createElement("div");
          el2.className = "txt";
          el2.id = uniqueCarBrands[i] + "Header"
          el2.textContent = uniqueCarBrands[i]
          select.appendChild(el2);

          var el = document.createElement("div");
          el.id = uniqueCarBrands[i]
          el.className = "imgdivholder row"
          select.appendChild(el);
        }

        for(j = 0; j < uniqueCarBrands.length; j++) {
          var select1 = document.getElementById(uniqueCarBrands[j])
                    
          for(var i = 74; i <= 429; i++) {
            brand1 = response[i - 74].Name_and_model.split(" ");
            if(brand1[1] === uniqueCarBrands[j]) {
              var el = document.createElement("div");
              el.id = response[i - 74].Name_and_model;
              el.className = "imgdiv";
              select1.appendChild(el);
            }
          }

          for(var i = 450; i < 629; i++) {
            brand1 = response[i - 94].Name_and_model.split(" ");
            if(brand1[1] === uniqueCarBrands[j]) {
              var el = document.createElement("div");
              el.id = response[i - 94].Name_and_model;
              el.className = "imgdiv";
              select1.appendChild(el);
            }
          }
        }
      })
}



function imgMake() {
  fetch("json/csvjson.json")
      .then(data => data.json())
      .then(response => {
        for(let i = 74; i <= 429; i++) {
          var select = document.getElementById(response[i - 74].Name_and_model);
  
          var el = document.createElement("input");
          el.type = "image";
          el.src = "img/All/" + i + ".jpg";
          el.className = 'carimg';
          select.appendChild(el);

          var el2 = document.createElement("a");
          el2.className = 'txtcont';
          el2.textContent = response[i - 74].Name_and_model;
          el2.id = response[i - 74].Name_and_model + "1";
          select.appendChild(el2);

          var el3 = document.createElement("button");
          el3.className = "carinfobtn";
          el3.textContent = "Info →";
          el3.id = response[i - 74].Name_and_model + "2";
          el3.addEventListener("click", function() {var tab = window.open("Cars", "_self");
          tab.document.write("<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><meta http-equiv='X-UA-Compatible' content='IE=edge'><meta name='viewport' content='width=device-width, initial-scale=1.0'><link rel='stylesheet' href='css/bootstrap.min.css'><link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css'><link rel='stylesheet' href='carprofile/carprofile.css'><link rel='icon' href='https://i.redd.it/6o3morbndos81.PNG'><script src='https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js'></script><script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js'></script><title>FH5 Web</title></head><body><div class='topnav' id='myTopnav'></div><div class='loadwind' id='loader'></div><a class='agoback' href='cars.html'>← Go Back</a><div class='container-fluid'><div class='row'><div class='headerdivver col-lg-12'><p id='name' class='name'>" + response[i - 74].Name_and_model + "</p></div></div><div class='row'><div class='leftdivver col-lg-3'><div class='infocontainer'><img class='modelimg' src='./img/ModelImg/" + response[i-74].Model_type + ".png'><div class='row'><div class='tell col-6'>POWER</div><div class='texts col-6'>" + response[i - 74].Horse_Power + " HP</div><div class='tell col-6'>WEIGHT</div><div class='texts col-6'>" + response[i - 74].Weight_lbs + " lbs</div><div class='tell col-6'>SOURCE</div><div class='texts col-6'>" + response[i - 74].car_source + "</div><div class='pi col-5'><img class='pimg' src='img/carprofile/" + response[i - 74].stock_specs + ".PNG'><div class='pirate'>" + response[i - 74].Stock_Rating + "</div></div><div class='dtrain col-7'><div class='dtraintext'>" + response[i - 74].Drive_Type + "</div><img class='dimg' src='img/carprofile/" + response[i - 74].Drive_Type + ".PNG'></div><div class='price col-12'>" + response[i - 74].In_Game_Price + " CR</div></div></div></div><div class='imgdivver col-lg-6'><img id='img' class='bigimg' src='img/All/" + i + ".jpg'></div><div class='rightdivver col-lg-3'><div class='slidecontainer'><div class='row'><div class='col-12 specers'>Specs</div><div class='namer col-6'>Speed</div><div class='statr col-6'>" + response[i - 74].speed + "</div><input type='range' min='0' value='50'   max='100' class='sliderange' id='speedslider'><div class='namer col-6'>Handling</div><div class='statr col-6'>" + response[i - 74].handling + "</div><input type='range' min='0' value='50'   max='100' class='sliderange' id='handlingslider'><div class='namer col-6'>Acceleration</div><div class='statr col-6'>" + response[i - 74].acceleration + "</div><input type='range' min='0' value='50'   max='100' class='sliderange' id='accelerationslider'><div class='namer col-6'>Launch</div><div class='statr col-6'>" + response[i - 74].launch + "</div><input type='range' min='0' value='50'   max='100' class='sliderange' id='launchslider'><div class='namer col-6'>Braking</div><div class='statr col-6'>" + response[i - 74].braking + "</div><input type='range' min='0' value='50'   max='100' class='sliderange' id='brakingslider'><div class='namer col-6'>Offroad</div><div class='statr col-6'>" + response[i - 74].Offroad + "</div><input type='range' min='0' value='50'   max='100' class='sliderange' id='offroadslider'></div></div></div><div class='row'><div class='bottomdivver col-lg-12'><div class='container'><div id='myCarousel' class='carousel slide' data-interval='false' data-ride='carousel'><div class='carousel-inner'></div><a class='left carousel-control' href='#myCarousel' data-slide='prev'><span class='glyphicon glyphicon-chevron-left'></span><span class='sr-only'>Previous</span></a><a class='right carousel-control' href='#myCarousel' data-slide='next'><span class='glyphicon glyphicon-chevron-right'></span><span class='sr-only'>Next</span></a></div></div></div></div></div><footer></footer></body><script src='js/bootstrap.min.js'><\/script><script src='carprofile/carprofile.js'><\/script></html>");
          tab.document.close();});
          select.appendChild(el3);

          
        }

        for(let i = 450; i < 629; i++) {
          var select = document.getElementById(response[i - 94].Name_and_model);

          var el = document.createElement("input");
          el.type = "image";
          el.src = "img/All/" + i + ".jpg";
          el.className = 'carimg';
          select.appendChild(el);

          var el2 = document.createElement("a");
          el2.className = 'txtcont';
          el2.textContent = response[i - 94].Name_and_model;
          el2.id = response[i - 94].Name_and_model + "1";
          select.appendChild(el2);

          var el3 = document.createElement("button");
          el3.className = "carinfobtn"
          el3.textContent = "Info →"
          el3.id = response[i - 94].Name_and_model + "2";
          el3.addEventListener("click", function() {var tab = window.open("Cars", "_self");
          tab.document.write("<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><meta http-equiv='X-UA-Compatible' content='IE=edge'><meta name='viewport' content='width=device-width, initial-scale=1.0'><link rel='stylesheet' href='css/bootstrap.min.css'><link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css'><link rel='stylesheet' href='carprofile/carprofile.css'><link rel='icon' href='https://i.redd.it/6o3morbndos81.PNG'><script src='https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js'></script><script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js'></script><title>FH5 Web</title></head><body><div class='topnav' id='myTopnav'></div><div class='loadwind' id='loader'></div><a class='agoback' href='cars.html'>← Go Back</a><div class='container-fluid'><div class='row'><div class='headerdivver col-lg-12'><p id='name' class='name'>" + response[i - 94].Name_and_model + "</p></div></div><div class='row'><div class='leftdivver col-lg-3'><div class='infocontainer'><img class='modelimg' src='./img/ModelImg/" + response[i-94].Model_type + ".png'><div class='row'><div class='tell col-6'>POWER</div><div class='texts col-6'>" + response[i - 94].Horse_Power + " HP</div><div class='tell col-6'>WEIGHT</div><div class='texts col-6'>" + response[i - 94].Weight_lbs + " lbs</div><div class='tell col-6'>SOURCE</div><div class='texts col-6'>" + response[i - 94].car_source + "</div><div class='pi col-5'><img class='pimg' src='img/carprofile/" + response[i - 94].stock_specs + ".PNG'><div class='pirate'>" + response[i - 94].Stock_Rating + "</div></div><div class='dtrain col-7'><div class='dtraintext'>" + response[i - 94].Drive_Type + "</div><img class='dimg' src='img/carprofile/" + response[i - 94].Drive_Type + ".PNG'></div><div class='price col-12'>" + response[i - 94].In_Game_Price + " CR</div></div></div></div><div class='imgdivver col-lg-6'><img id='img' class='bigimg' src='img/All/" + i + ".jpg'></div><div class='rightdivver col-lg-3'><div class='slidecontainer'><div class='row'><div class='col-12 specers'>Specs</div><div class='namer col-6'>Speed</div><div class='statr col-6'>" + response[i - 94].speed + "</div><input type='range' min='0' value='50'   max='100' class='sliderange' id='speedslider'><div class='namer col-6'>Handling</div><div class='statr col-6'>" + response[i - 94].handling + "</div><input type='range' min='0' value='50'   max='100' class='sliderange' id='handlingslider'><div class='namer col-6'>Acceleration</div><div class='statr col-6'>" + response[i - 94].acceleration + "</div><input type='range' min='0' value='50'   max='100' class='sliderange' id='accelerationslider'><div class='namer col-6'>Launch</div><div class='statr col-6'>" + response[i - 94].launch + "</div><input type='range' min='0' value='50'   max='100' class='sliderange' id='launchslider'><div class='namer col-6'>Braking</div><div class='statr col-6'>" + response[i - 94].braking + "</div><input type='range' min='0' value='50'   max='100' class='sliderange' id='brakingslider'><div class='namer col-6'>Offroad</div><div class='statr col-6'>" + response[i - 94].Offroad + "</div><input type='range' min='0' value='50'   max='100' class='sliderange' id='offroadslider'></div></div></div><div class='row'><div class='bottomdivver col-lg-12'><div class='container'><div id='myCarousel' class='carousel slide' data-interval='false' data-ride='carousel'><div class='carousel-inner'></div><a class='left carousel-control' href='#myCarousel' data-slide='prev'><span class='glyphicon glyphicon-chevron-left'></span><span class='sr-only'>Previous</span></a><a class='right carousel-control' href='#myCarousel' data-slide='next'><span class='glyphicon glyphicon-chevron-right'></span><span class='sr-only'>Next</span></a></div></div></div></div></div><footer></footer></body><script src='js/bootstrap.min.js'><\/script><script src='carprofile/carprofile.js'><\/script></html>");
          tab.document.close();});
          select.appendChild(el3)
        }
      })
}


function carList(){
  fetch("json/csvjson.json")
      .then(data => data.json())
      .then(response => {
        var carBrand = [];

        for(i = 74; i < 429; i++) {
          brand = response[i - 74].Name_and_model.split(" ");
          carBrand.push(brand[1]);
        }

        for(i = 450; i < 629; i++) {
          brand = response[i - 94].Name_and_model.split(" ");
          carBrand.push(brand[1]);
        }

        var uniqueCarBrands = [...new Set(carBrand)];

        var select = document.getElementById("myDropdown");

        for(var i = 0; i < uniqueCarBrands.length; i++) {
          var opt = uniqueCarBrands[i];
          var el = document.createElement("a");
          el.className = "button";
          el.textContent = opt;
          el.setAttribute("href", '#' + uniqueCarBrands[i] + "Header");
          select.appendChild(el);
        }
      })
}



function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

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