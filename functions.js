/* Opdracht 1 */
// Schrijf een functie die drie parameters verwacht en deze drie getallen bij elkaar optelt en teruggeeft.
// ---- Verwachte uitkomsten:
// 3, 4, 5 geeft 12
// 11, 3, 9 geeft 23


function calculateSum(n1, n2, n3){
    return  n1 + n2 + n3;
}

console.log(calculateSum(3,4,5));


/* Opdracht 2 */
// Schrijf een functie die twee strings verwacht en deze aan elkaar geplakt teruggeeft.
// Je mag hier geen String Object methoden voor gebruiken.
// ---- Verwachte uitkomsten:
// "abra", "cadabra" geeft "abracadabra"

function stringBuilder(string1, string2){
    return string1+string2;
}

console.log(stringBuilder("remco", "zoe"));

/* Opdracht 3 */
// Schrijf een functie die twee parameters verwacht: een woord en een karakter
// De functie omwikkelt het woord met het karakter en geeft dit terug
// ---- Verwachte uitkomsten:
// "bril", "*" geeft "*bril*"
// "beep", "_" geeft "_beep_"
// "kaas", "Q" geeft "QkaasQ"

function boef(woord, character){
    return character + woord +character;
}

console.log(boef("remco", "$"));
/* Opdracht 4 */
// Schrijf een functie die een array van strings verwacht. De functie geeft
// alle strings aan elkaar geplakt terug. Je mag hier geen array- of string methoden
// voor gebruiken.
// ---- Verwachte uitkomsten:
// ["abra", "cadabra"] geeft "abracadabra"
// ["a", "b", "c"] geeft "abc"

function array(array1){
    for (let i = 0; i <array1.length ; i++) {
        console.log(array1[i]);
    }
}

let test = new Array(1,45,63,3,47,34,7,11,34,12,55);
array(test);

/* Opdracht 5 */
// Schrijf een functie die een array van strings verwacht en een gezamelijke groet teruggeeft
// ---- Verwachte uitkomsten:
// ["Nick, Nova, Mitchel, Arjen"] geeft "Hoi Nick, Nova, Mitchel en Arjen!"
// ["Piet", "Henk"] geeft "Hoi Piet en Henk!"
// ["A", "B", "C", "D", "E", "F"] geeft "Hoi A, B, C, D, E, en F!"

let strings = new Array("Nico", "Erik", "leroy", "Remco", "Marcel");

function stringBuilder1(arrayofStrings){

     let string = "";

    for (let i = 0; i < arrayofStrings.length; i++) {
        string += arrayofStrings[i] + " ";
    }
    console.log(string);
}


stringBuilder1(strings);