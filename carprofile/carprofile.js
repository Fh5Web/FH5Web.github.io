var loader = document.getElementById("loader");
loader.onanimationend = () => {
    loader.style.display = "none";
};
  
  
fetch("json/csvjson.json")
      .then(data => data.json())
      .then(response => {
        var name = document.getElementById("name").textContent

        for(let i = 74; i <= 429; i++) {
          var sliderr = document.querySelector(".carousel-inner")

          var el = document.createElement("div");
          if(name === response[i - 74].Name_and_model) {
            el.className = "item active";
            el.id = response[i - 74].Name_and_model;
          } else {
            el.className = "item";
            el.id = response[i - 74].Name_and_model;
          }
          sliderr.appendChild(el);

          var el1 = document.createElement("img");
          el1.src = "img/All/" + i + ".jpg";
          el1.className = "metimg"
          el.appendChild(el1);

          var el2 = document.createElement("div");
          el2.className = "carousel-caption";
          el.appendChild(el2)

          var el3 = document.createElement("h3");
          el3.textContent = response[i - 74].Name_and_model;
          el3.className = "caption"
          el2.appendChild(el3)

          if(name === response[i - 74].Name_and_model) {
              var speed = document.querySelector("#speedslider");
              if(response[i - 74].speed === "info_not_found") {
                speed.value = parseFloat("0");
              } else {
                speed.value = parseFloat(response[i - 74].speed * 10);
              }

              var handling = document.querySelector("#handlingslider");
              if(response[i - 74].handling === "info_not_found") {
                handling.value = parseFloat("0");
              } else {
                handling.value = parseFloat(response[i - 74].handling * 10);
              }

              var acceleration = document.querySelector("#accelerationslider");
              if(response[i - 74].acceleration === "info_not_found") {
                acceleration.value = parseFloat("0");
              } else {
                acceleration.value = parseFloat(response[i - 74].acceleration * 10);
              }

              var launch = document.querySelector("#launchslider");
              if(response[i - 74].launch === "info_not_found") {
                launch.value = parseFloat("0");
              } else {
                launch.value = parseFloat(response[i - 74].launch * 10);
              }

              var braking = document.querySelector("#brakingslider");
              if(response[i - 74].braking === "info_not_found") {
                braking.value = parseFloat("0");
              } else {
                braking.value = parseFloat(response[i - 74].braking * 10);
              }

              var offroad = document.querySelector("#offroadslider");
              if(response[i - 74].Offroad === "info_not_found") {
                offroad.value = parseFloat("0");
              } else {
                offroad.value = parseFloat(response[i - 74].Offroad * 10);
              }
          }

        }
        for(let i = 450; i < 629; i++) {
          var sliderr = document.querySelector(".carousel-inner")

          var el = document.createElement("div");
          if(name === response[i - 94].Name_and_model) {
            el.className = "item active";
            el.id = response[i - 94].Name_and_model;
          } else {
            el.className = "item";
            el.id = response[i - 94].Name_and_model;
          }
          sliderr.appendChild(el);

          var el1 = document.createElement("img");
          el1.src = "img/All/" + i + ".jpg";
          el1.className = "metimg"
          el.appendChild(el1);

          var el2 = document.createElement("div");
          el2.className = "carousel-caption";
          el.appendChild(el2)

          var el3 = document.createElement("h3");
          el3.textContent = response[i - 94].Name_and_model;
          el3.className = "caption"
          el2.appendChild(el3)

          if(name === response[i - 94].Name_and_model) {
            var speed = document.querySelector("#speedslider");
              if(response[i - 94].speed === "info_not_found") {
                speed.value = parseFloat("0");
              } else {
                speed.value = parseFloat(response[i - 94].speed * 10);
              }

              var handling = document.querySelector("#handlingslider");
              if(response[i - 94].handling === "info_not_found") {
                handling.value = parseFloat("0");
              } else {
                handling.value = parseFloat(response[i - 94].handling * 10);
              }

              var acceleration = document.querySelector("#accelerationslider");
              if(response[i - 94].acceleration === "info_not_found") {
                acceleration.value = parseFloat("0");
              } else {
                acceleration.value = parseFloat(response[i - 94].acceleration * 10);
              }

              var launch = document.querySelector("#launchslider");
              if(response[i - 94].launch === "info_not_found") {
                launch.value = parseFloat("0");
              } else {
                launch.value = parseFloat(response[i - 94].launch * 10);
              }

              var braking = document.querySelector("#brakingslider");
              if(response[i - 94].braking === "info_not_found") {
                braking.value = parseFloat("0");
              } else {
                braking.value = parseFloat(response[i - 94].braking * 10);
              }

              var offroad = document.querySelector("#offroadslider");
              if(response[i - 94].Offroad === "info_not_found") {
                offroad.value = parseFloat("0");
              } else {
                offroad.value = parseFloat(response[i - 94].Offroad * 10);
              }
          }

          

        }
});


  
// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//     x.classList.toggle("change");
//   } else {
//     x.className = "topnav";
//   }
// }

// fetch("../footer/footer.html")
//   .then(response => {
//     return response.text()
//   })
//   .then(data => {
//     document.querySelector("footer").innerHTML = data;
// });

// fetch("../header/header.html")
//   .then(response => {
//     return response.text()
//   })
//   .then(data => {
//     document.getElementById("myTopnav").innerHTML = data;
// });

// fetch("../loader/loader.html")
//   .then(response => {
//     return response.text()
//   })
//   .then(data => {
//     document.getElementById("loader").innerHTML = data;
// });

