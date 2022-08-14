/**
 * @author ramkishore
 */

const jsonData =[
    {
        name : "ram",
        age : "29",
        address : {
            place : "puthuvelamangalam",
            post : "sethukuli post",
            city : "Mettur",
            area : "kolathur"
        },
        vaccination : "5",
        nature : "very naughty"
    },
    {
        name : "kishore",
        age : "8 years",
        address : {
            place : "puthuvelamangalam",
            post : "sethukuli post",
            city : "Mettur",
            area : "kolathur"
        },
        vaccination : "15",
        nature : "very naughty"
    },
    {
        name : "Maddy",
        age : "59",
        address : {
            place : "puthuvelamangalam",
            post : "sethukuli post",
            city : "Mettur",
            area : "kolathur"
        },
        vaccination : "15",
        nature : "very naughty"
    },
    {
        name : "Amsa",
        age : "45",
        address : {
            place : "puthuvelamangalam",
            post : "sethukuli post",
            city : "Mettur",
            area : "kolathur"
        },
        vaccination : "15",
        nature : "very naughty"
    }
];

const ages = [29,31,45,56,78,34,43,45,66,10,5,15,13,9,20];


// We can get the element, their index and the total list from the callback function.
jsonData.forEach(function(data, index, jsonData){
    console.log(data);
    console.log(index);
    console.log(jsonData);
})

const canDrink = ages.filter(age => age >= 21);
console.log(canDrink);