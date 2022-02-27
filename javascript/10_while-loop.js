// While loop

var legendary = [
    "zapdos",
    "moltres",
    "articuno",
    "suicune",
    "entei",
    "raikou",
    "ho-oh",
    "lugia"
];

var index = 0;
while(index <  legendary.length){
    console.log(legendary[index]);
    index = index + 1;
}

//do while loop : when you need to execute a stement atleast once 

var doIndex = 0;
console.log();
do { 
    console.log(legendary[doIndex])
    doIndex = doIndex + 1;
} while (doIndex<5);