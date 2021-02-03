let strNaam;
let boolNaamKlopt;
var person = prompt("wat is je naam");
strNaam = person;
var klopt = confirm("Klopt het wat je hebt gezegt");
boolNaamKlopt = klopt;

console.log(strNaam);
console.log(boolNaamKlopt);

if(boolNaamKlopt == true){
    alert("Welkom")
}
else{
    var person = prompt("wat is je naam");
    var klopt2 = confirm("Klopt het wat je hebt gezegt");
};
boolNaamKlopt2 = klopt2;
if(boolNaamKlopt2 == false){
    alert("Er is iets mis gegaan")
}
else{
    alert("Welkom")
}