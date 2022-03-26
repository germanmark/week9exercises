// Part 1
console.log("\n\n Part 1\n");

function variables(){
    let num = 10;
    let str = "Hello world";
    let bool = true;
    console.log(`My number: ${num}, my string: ${str}, my boolean: ${bool}`);
    num = 5;
    str = "5";
    console.log(num == str);
    bool = (num===str);
    console.log(bool);
}

variables();

// Part 2
console.log("\n\n Part 2\n");

function arrays(){
    // I will print the array after every operation to make the changes visible
    let colors = ["red", "blue", "green", "orange", "grey"];
    colors.push("cyan");
    console.log(colors);

    colors.unshift("yellow");
    console.log(colors);

    colors.splice(2,1);
    console.log(colors);

    console.log(`The 4th element: ${colors[3]}`);
    colors.push(colors[0]);
    console.log(colors);

    colors.shift();
    console.log(colors);

    // Since the array reverse operation modifies the original array, we want to create a copy of it with a no-argument slice first
    console.log(colors, colors.slice().reverse());

    var greenIndex = colors.indexOf("green");
    colors.splice(greenIndex, 1);
    console.log(colors);
}

arrays();

// Part 3
console.log("\n\n Part 3\n");

function objects(){
    let person = {
        firstName : "John",
        lastName : "Doe",
        age : 25,
        dob : new Date("1997-01-01"),
        isEmployed : false,
        pet : {
            name : "Billy",
            species : "Cockatoo",
            color : "White"
        }
    }
    console.log(person);

    // Assigning the opposite of the current boolean
    person.isEmployed = !person.isEmployed;
    console.log(person);

    // Assigning a value to a property that didn't exist before will create it
    person.isMarried = true;
    console.log(person);

    let person2 = {
        firstName : "Jane",
        lastName : "Doe",
        age : 24,
        dob : new Date("1998-02-02"),
        isEmployed : true,
        isMarried : true,
        pet : {
            name : "Cupcake",
            species : "Cat",
            color : "Black"
        }
    }

    let person3 = {
        firstName : "Jack",
        lastName : "Doe",
        age : 10,
        dob : new Date("2010-03-03"),
        isEmployed : false,
        isMarried : false,
        pet : {
            name : "Fishy",
            species : "Goldfish",
            color : "Orange"
        }
    }

    let doeFamily = [person, person2, person3];

    let outputString = "";
    for(const person of doeFamily){
        outputString += `${person.firstName} ${person.lastName} is `+(person.isMarried?"":"not ")+`married.\n`;
    }
    console.log(outputString);
}

objects();


// Part 5.1
console.log("\n\n Part 5.1\n");

function getPet(person){
    return person.pet;
}

function getName(pet){
    return pet.name;
}

function createPersonGetPet(){
    let person = {
        firstName : "John",
        lastName : "Doe",
        age : 25,
        dob : new Date("1997-01-01"),
        isEmployed : false,
        pet : {
            name : "Billy",
            species : "Cockatoo",
            color : "White"
        }
    }
    console.log(getName(getPet(person)));
}
createPersonGetPet();

// Part 5.2
console.log("\n\n Part 5.2\n");

let doeFamily = [
    {
        firstName : "John",
        lastName : "Doe",
        age : 25,
        dob : new Date("1997-01-01"),
        isEmployed : false,
        pet : {
            name : "Billy",
            species : "Cockatoo",
            color : "White"
        }
    },
    {
        firstName : "Jane",
        lastName : "Doe",
        age : 24,
        dob : new Date("1998-02-02"),
        isEmployed : true,
        isMarried : true,
        pet : {
            name : "Cupcake",
            species : "Cat",
            color : "Black"
        }
    },
    {
        firstName : "Jack",
        lastName : "Doe",
        age : 10,
        dob : new Date("2010-03-03"),
        isEmployed : false,
        isMarried : false,
        pet : {
            name : "Fishy",
            species : "Goldfish",
            color : "Orange"
        }
    }

]
function checkCat(person){
    return person.pet.species == "Cat";
}
function findPersonWithCat(people){
    let catOwner = people.find(checkCat);
    if (catOwner == undefined){
        return "Error: no cat owner found in array";
    } else{
        return catOwner.firstName;
    }
}
// Jane should be the result here
console.log(findPersonWithCat(doeFamily));

doeFamily[1].pet.species = "Dog";
// An error message should be printed here
console.log(findPersonWithCat(doeFamily));


// Part 5.3
console.log("\n\n Part 5.3\n");

function reverseArray(array){
    let newArray = [];
    // This loop counts backwards
    for (let i=array.length-1; i>=0; i--){
        newArray.push(array[i]);
    }
    return newArray;
}

let arr1 = [1,2,3,5,8,13,21,34];
let arr2 = reverseArray(arr1);
console.log(arr1, arr2);


// Part 5.4

console.log("\n\n Part 5.4\n");
let arr3 = [34, 54, 21, 1, -5, 100, 54, 23, 21];

function findLargestIndex(array){
    let maxIndex = 0;
    let maxNumber = array[0];
    for (let i=0; i<array.length; i++){
        if (array[i]>maxNumber){
            maxIndex = i;
            maxNumber = array[i];
        }
    }
    return maxIndex;
}
let largestIndex = findLargestIndex(arr3);
console.log(`The largest number was at index ${largestIndex} and was ${arr3[largestIndex]}`);
