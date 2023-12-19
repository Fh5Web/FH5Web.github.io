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

fetch("../footer/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
});

fetch("../header/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.getElementById("myTopnav").innerHTML = data;
});

fetch("../loader/loader.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.getElementById("loader").innerHTML = data;
});

