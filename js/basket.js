let shirt="Juventus";
let shirt2="RealMadrid";
let shirt3="Galatasaray";
let shirt4="Bayernmunich";

localStorage.setItem("shirt", "Juventus");

document.getElementsByClassName("Juventus").innerHTML=localStorage.getItem("shirt");
