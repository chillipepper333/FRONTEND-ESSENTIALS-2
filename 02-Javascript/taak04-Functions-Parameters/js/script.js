function geefRandomGetalTerug(){                    //randomGetal =
    let randomGetal = Math.random();                //0.54654983435
    randomGetal = randomGetal *100 + 1;             //54.654983435
    randomGetal = Math.floor(randomGetal);          //54
    return randomGetal;
}

var getal1 = prompt("Voer een getal in");
var getal2 = prompt("Voer nog een getal in")

function som(){
return getal1 * getal2;

}

console.log(geefRandomGetalTerug());     
console.log(som())