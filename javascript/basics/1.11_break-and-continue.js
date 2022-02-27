/**
 * @author ramkishore
 */
// Break and Continue 

var psychic = [
    "Mewtwo",
    "Lugia",
    "Rayquaza",
    "Alakazam",
    "Latias",
    "Latios"
];

console.log("Example for Break");
//Break : the loop breaks when the iterations reaches Rayquaza.
for (const pokemon of psychic) {
    console.log(pokemon);
    if(pokemon == "Rayquaza") { 
        break;
    }
}

console.log("\n" + "Example for Continue");
//Continue : the loop moves to the next iteration as long as the specified condition is met.
for (const pokemon of psychic) {
    if(pokemon == "Rayquaza" || pokemon == "Mewtwo" || pokemon == "Lugia") {
        continue;
    }
    console.log(pokemon);
}

// The same break and continue statements are applicable to the while loops as well.