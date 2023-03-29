let shirt="Juventus";
let shirt2="RealMadrid";
let shirt3="Galatasaray";
let shirt4="Bayernmunich";

document.querySelector(".Juventus");
document.querySelector(".RealMadrid");
document.querySelector(".Galatasaray");
document.querySelector(".Bayernmunich");








localStorage.setItem("shirt", "Juventus");
localStorage.getElementBYCLASS("Juventus").innerHTML=localStorage.getItem("shirt");


localStorage.setItem("shirt", "RealMadrid");
localStorage.getElementBYCLASS("RealMdarid").innerHTML=localStorage.getItem("shirt");

localStorage.setItem("shirt", "Galatasaray");
localStorage.getElementBYCLASS("Galatasaray").innerHTML=localStorage.getItem("shirt");

localStorage.setItem("shirt", "Bayernmunich");
localStorage.getElementBYCLASS("Bayernmunich").innerHTML=localStorage.getItem("shirt");

function myFunction() {
    let shirtName = "Juventus";
    document.querySelector("Juventus").innerHTML =
    typeof shirtName + " " + shirtName;
  }

  function myFunction() {
    let shirtName = "RealMadrid";
    document.querySelector("RealMdrid").innerHTML =
    typeof shirtName + " " + shirtName;
  }


  function myFunction() {
    let shirtName = "Galatasaray";
    document.querySelector("Galatasaray").innerHTML =
    typeof shirtName + " " + shirtName;
  }


  function myFunction() {
    let shirtName = "Byaernmunich";
    document.querySelector("Bayernmunich").innerHTML =
    typeof shirtName + " " + shirtName;
  }