"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.friends = void 0;
// //2= Task
let Fname = ("Diba");
console.log(`Hello  ${Fname} , would you like to learn some typescript?`);
// // 3= Task
let yourname = ("Diba Shaikh");
console.log(yourname.toUpperCase());
console.log(yourname.toLowerCase());
console.log(yourname.charAt(0).toUpperCase() + yourname.slice(1).toLowerCase());
// //4= Task
console.log(`Napolean Hill syas "If you cannaot do great things,
do small things in a great way."`);
// // 5=Task
let FamouseQuote = ("Napolean Hil");
console.log(`${FamouseQuote}, Says "If you cannaot do great things,
do small things in a great way." `);
// 6= Task
// Print name with extra space:
let D = "\t\n Diba Shaikh \t\n";
console.log(D);
console.log(D.trim());
// // 7= Task
// Print number 8 with using Arithmetic operators.
console.log(2 * 4);
console.log(10 - 2);
console.log(6 + 2);
console.log(16 / 2);
//8= Task
// Basic operation to display the number 8.
console.log(4 * 2);
console.log(15 - 7);
console.log(6 + 2);
console.log(64 / 8);
// 9= Task
// Print my favrouite number
let favrouitnumber = 7;
console.log(`My favrouite number is: ${favrouitnumber}`);
// 10= Task
// Post comment in your code that computer ignores.
// 09/03/2024 : Print the question for asking.
let Firstname = ("Diba");
console.log(`Hello  ${Firstname} , would you like to learn some typescript?`);
// 11= Task 
// Asking for learning something,
let myname = ("Diba shaikh");
console.log(`Hello ${myname} "Would you like to learn some typescript today?" `);
// 12 = Task
// Used array to store my multiple friends name.
let names = ["Aqsa", "Shaikhzadi", "Nida", "Maira"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
let Ynames = ["Shaikh", "Ziddi", "Queeen", "Khan"];
for (let i = 0; i < names.length; i++) {
    console.log(Ynames[i]);
}
let Names = ["Neha", "Asma", "Darakhsahn"];
for (let Name of Names) {
    console.log(`Hi ${Name}, would you like to learn with me?`);
}
//  13 = Task
// Think of your favorite mode of transportation, such as a motorcycle or a car, and make 
// a list that stores several examples. Use your list to print a series of statements about these items, 
// such as “I would like to own a Honda motorcycle.
let cars = ["esla", "Toyota", "Ford", "Honda", "BMW", "Audi"];
for (let car of cars) {
    console.log(`Hi!, I love ${car}. `);
}
// 14 = Task
// If you could invite anyone, living or deceased, to dinner,
//  who would you invite? Make a list that includes at least 
// three people you’d like to invite to dinner. Then use your list 
// to print a message to each person, inviting them to dinner.
// let friends : string [] = ["Nida", "Maira", "Aqsa"]
// for (let friend of friends ){
//     console.log(`"Dear ${friend}\n\tI would like to invite you to dinner at my place this Saturday, and i would love for you to join me.\nSincerely, [Diba Subhan]."\n`)
// }
// 15 = Task
// Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let friends = ["Nida", "Maira", "Aqsa"];
exports.friends = friends;
// Stating the name of the guest who can’t make it.
let friendwhocantmakeit = "Maira";
console.log(`${friendwhocantmakeit} Can't make it to dinner`);
// // Replacing the name of the guest who can’t make it with the name of the new person you are inviting.
let newfriend = "Mahi";
let indexoffriendwhocantmakeit = friends.indexOf(friendwhocantmakeit);
console.log(indexoffriendwhocantmakeit);
if (indexoffriendwhocantmakeit !== -1) {
    friends[indexoffriendwhocantmakeit] = newfriend;
    console.log(friends[1]);
    // // Print a second set of invitation messages, one for each person who is still in your list.
    console.log("Second set of invitation message:");
    friends.forEach((friend) => {
        console.log(`"Dear ${friend}\n\tI would like to invite you to dinner 
            at my place this Saturday, and i would love for you to join me.\nSincerely, [Diba Subhan]."\n`);
    });
}
// 16 = Task
// let friends : string [] = ["Nida", "Maira", "Aqsa", "Neha",] 
// // informing people that you found a bigger dinner table.
// for(let friend of friends){
//     console.log(`Dear friends ${friend} We found a bigger dinner table.`);
// }
// let newfriend : string = "Mahi"
// friends.unshift(newfriend)
// console.log(newfriend);
// // Add one new guest to the middle of your array.
// let newFinMiddle : string = "Gul"
// let middleIndex: number = Math.floor(friends.length/2);
// // Insert new frend in middle 
// friends.splice(middleIndex, 0, newFinMiddle);
// //console.log(friends);
// // Use append() to add one new guest to the end of your list.
// let newfriendatEnd : string = "Moon"
// friends.push(newfriendatEnd);
// console.log(newfriendatEnd);
// // Print a new set of invitation messages, one for each person in your list.
// console.log("New set of invitation messages");
// for (let friend of friends)
//     console.log(`Dear! ${friend} You are invited to dinner`);
// 17 = Task
// Shrinking Guest List: You just found out that your new dinner table won’t 
// arrive in time for the dinner, and you have space for only two guests.
let friendlist = ["Shiza", "Ayesha", "Mehak", "Mano", "Anaya"];
// Prints a message saying that you can invite only two people for dinner.
console.log(`I’m planning a small dinner gathering and unfortunately, 
    due to space constraints, I’m only able to invite two people.`);
// Remove guests from your list one at a time until only two names remain in your list.
while (friendlist.length > 2) {
    let friendremove = friendlist.pop();
    console.log(`Sorry ! ${friendremove} I can't invie you for dinner`);
}
// Print a message to each of the two people still on your list, letting them know they’re still invited.
for (let Guest of friendlist) {
    console.log(`Hi! ${Guest}, You're still invited for dinner`);
}
// Remove the last two names from your list, so you have an empty list.
// Print your list to make sure you actually have an empty list at the end of your program.
friendlist.pop();
friendlist.pop();
console.log(`Friend list after the dinner end: ${friendlist}`);
// 18 = Task
// Store the locations in a array. Make sure the array is not in alphabetical order.
let travelDestination = ["Banjosa Lake", "Lahore City Tour", "Islamabad Sightseeing",
    "Babusar Top", "Lulusar Lake", "Sharan Forest", "Taobat Valley", "Khujerab Pass"];
// Print your array in its original order.
console.log("Orignal order:");
console.log(travelDestination);
//  Print your array in alphabetical order without modifying the actual list.
console.log("\n Alphabetical order without modifying the actual list.");
console.log([...travelDestination].sort());
// Show that your array is still in its original order by printing it.
// 
console.log("\n Showing array is still in its original order.");
console.log(travelDestination);
//  Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\n Reverse alphabetical order without changing the order of the original list.");
console.log([...travelDestination].sort().reverse());
// Show that your array is still in its original order by printing it again.
console.log("\n Showing array is still in its original order.");
console.log(travelDestination);
// Reverse the order of your list. Print the array to show that its order has changed.
console.log("\n Reverse the order");
travelDestination.reverse();
console.log(travelDestination);
//  Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\n Back to original");
travelDestination.reverse();
console.log(travelDestination);
//  Sort your array so it’s stored in alphabetical order. 
// Print the array to show that its order has been changed.
console.log("\n Sort in Alphabatical order");
travelDestination.sort();
console.log(travelDestination);
//  Sort to change your array so it’s stored in reverse alphabetical order. 
// Print the list to show that its order has changed.
console.log("\n Change into reverse Alphabatical order");
travelDestination.sort().reverse();
console.log(travelDestination);
// 20 = Task
// Think of something you could store in a array. For example, 
// you could make a list of mountains, rivers, countries, cities, languages,
//  or anything else you’d like. Write a program that creates a list containing these items.
let mountains = ["Mount Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu"];
console.log("List of mountain");
for (let mountain of mountains) {
    console.log(mountain);
}
let car = {
    carname: "Bugatti",
    fueltankcapacity: "100L",
    speed: "420KM",
    price: "109.65crore"
};
console.log(car);
// 22 = Task
// Intentional Error: If you haven’t received an array index error in
//  one of your programs yet, try to make one happen. 
// Change an index in one of your programs to produce an index error. 
// Make sure you correct the error before closing the program.
let arrayError = ["Mehak", "Hina", "Tania", "Zoha"];
// Creating Intentional Error ! by invalid index.
// console.log(arrayError[6]);
// Error removed.
console.log(arrayError[2]);
// 23 = Task
// Write a series of conditional tests. Print a statement describing each test and your prediction for 
// the results of each test. Your code should look something like this:
// Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 
// 5 tests evaluate to True and another 5 tests evaluate to False.
let five = 5;
let ten = 10;
// Test => 1
console.log("\nTest 1: five is equal to 5:?");
console.log(five == 5);
// Test => 2
console.log("\nTest 2: ten is equal to 10?");
console.log(ten == 10);
// Test => 3
console.log("\nTest 3: 5 is not equals to 10?");
console.log(five != 10);
// Test=> 4
console.log("\n Test 4: 10 is greater than 5?");
console.log(ten > 5);
// Test => 5
console.log("\n Test 5: 5 is less than 10?");
console.log(five < 10);
// Test => 6
console.log("\n Test 6: Ten is less than 5?");
console.log(ten < 5);
// Test =>7
console.log("\n Test 7: Five is equal to 10?");
console.log(five == 10);
// Test =>8
console.log("\n Test 8: Ten is not equal to 10");
console.log(ten != 10);
// Test =>9
console.log("\n Test 9: Five is greater than 10?");
console.log(5 > 10);
// Test => 10
console.log("\n Test 10: Twenty is smaller than 10?");
console.log(20 < 10);
// 24 = Task
// Tests for equality and inequality with strings.
let name = "Khan";
console.log("\nIs Khan is equal to Khan?");
console.log(name == "Khan");
console.log("\n Is Khan is not equal to Khan?");
console.log(name != "Khan");
// Tests using the lower case function.
let upperCaseName = "KHAN";
console.log("\nIs KHAN is equal to KHAN after converting in lowercase?");
console.log(upperCaseName.toLowerCase() == "khan");
console.log("\nIs KHAN is not equal to KHAN after converting in lowercase?");
console.log(upperCaseName.toLowerCase() != "khan");
// Numerical tests involving equality and inequality, greater than and less than, 
// greater than or equal to, and less than or equal to.
// Numerical tests
let seven = 7;
let nine = 9;
console.log("\n Is seven is equal to nine?");
console.log(seven == nine);
console.log("\n Is seven is not equal to nine?");
console.log(seven != nine);
// Greater than and less than.
console.log("\n Is seven is greater than nine?");
console.log(seven > nine);
console.log("\n Is seven is less than nine?");
console.log(seven < nine);
// Greater than or equal to.
console.log("\n Is seven is greater than equal to nine?");
console.log(seven >= nine);
// Less than or equal to.
console.log("\n Is seven is less than equal to nine?");
console.log(seven <= nine);
// Tests using && operators.
console.log("\n seven is not equal to nine and seven is greater than nine?");
console.log(seven != 9 && seven > 9);
console.log("\n seven is not equal to nine and seven is less than nine?");
console.log(seven != 9 && seven < 9);
// Tests using || "Or" operators.
console.log("\n seven is less than nine OR seven is equal to nine?");
console.log(seven < 9 || seven == nine);
console.log("\n seven is greater than nine OR seven is not equal to seven?");
console.log(seven > 9 || seven != seven);
// Test whether an item include in array.
let cities = ["Karachi", "Lahore", "Islamabad", "Gilgit"];
console.log("\n Is 'Karachi' is include in my cities array?");
console.log(cities.includes("Karachi"));
// / Test whether an item not include in array.
console.log("\n Is 'Karachi' is not include in my cities array?");
console.log(!cities.includes("Karachi"));
// 25 => Task
// Create a variable called alien_color.
let alien_color = "Red";
if (alien_color === "Red") {
    //  Print a message that the player just earned 5 points.
    console.log("\n Alien colour is Red: Player just earned 5 points.");
}
// The version that fails will have no output.
if (alien_color === "Yellow") {
    // If (If)condition is false it will not work.
    console.log("\n Alien colour is Yellow");
}
// 26 => Task
// If the alien’s color is green, print a statement that 
// the player just earned 5 points for shooting the alien.
// First version
let aliencolour = "Black";
if (aliencolour === "Black") {
    console.log("\n Alien colour is Black: Player just earned 5 points for shooting the alien.");
}
else {
    console.log("Alien colour isn't Black: Player just earned 10 points.");
}
// Second version
if (aliencolour === "White") {
    console.log("Alien colour is White");
}
else {
    console.log("Alien colour is Black");
}
// 27 => Task
//If the alien is green, print a message that the player earned 5 points.
//If the alien is yellow, print a message that the player earned 10 points.
//If the alien is red, print a message that the player earned 15 points.
// Firsy version
// Using if-else chain.
let colourofAlien = "Green";
if (colourofAlien === "Green") {
    console.log("\n( Version 1) You shot down Green Alien, you have earned 5 points.");
}
else if (colourofAlien === "Yellow") {
    console.log("\n You shot down Yellow Alien, you have earned 10 points");
}
else if (colourofAlien === "Red") {
    console.log("\nYou shot down Red Alien, you have earned 15 points.");
}
// Second vrsion
let aliencolour2 = "Yellow";
if (aliencolour2 === "Green") {
    console.log("\nYou shot down Green Alien, you have earned 5 points.");
}
else if (aliencolour2 === "Yellow") {
    console.log("\n( Version 2) You shot down Yellow Alien, you have earned 10 points.");
}
else if (aliencolour2 === "Red") {
    console.log("\nYou shot down Red Alien, you have earned 15 points.");
}
// Third version
let alienColour = "Red";
if (alienColour === "Green") {
    console.log("\nYou shot down Green Alien, you have earned 5 points.");
}
else if (alienColour === "Yellow") {
    console.log("\n You shot down Yellow Alien, you have earned 10 points.");
}
else if (alienColour === "Red") {
    console.log("\n( Version 3) You shot down Red Alien, you have earned 15 points. ");
}
// 28 => Task
// if-else chain that determines a person’s stage of life. Set a value for the variable age
//  If the person is less than 2 years old, print a message that the person is a baby.
let age = 20;
if (age < 2) {
    console.log("\nYou are a baby.");
}
// If the person is at least 2 years old but less than 4,
//  print a message that the person is a toddler.
else if (age >= 2 && age < 4) {
    console.log("\n You are a tolddler");
}
// If the person is at least 4 years old but less than 13, print a message that 
// the person is a kid.
else if (age >= 4 && age < 13) {
    console.log("\nYou are a kid");
}
// If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (age >= 13 && age < 20) {
    console.log("\n You are a teenager");
}
// If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if (age >= 20 && age < 65) {
    console.log("\n You are an adult person.");
}
// If the person is age 65 or older, print a message that the person is an elder.
else if (age = 65 || age > 65) {
    console.log("\n You are an elder person.");
}
// 29 => Task
// Make a array of your three favorite fruits and call it favorite_fruits.
let favorite_fruits = ["Mango", "Orange", "Pomegranate"];
if (favorite_fruits.includes("Orange")) {
    console.log("\nMango is my favorite fruit.");
}
if (favorite_fruits.includes("Orange")) {
    console.log("\nOrange is also my favorite fruit.");
}
if (favorite_fruits.includes("Peach")) {
    console.log("\nI like peach");
}
if (favorite_fruits.includes("Apple")) {
    console.log("\nI really like Apple");
}
if (favorite_fruits.includes("Pomegranate")) {
    console.log("\nPomegranate is also my favorite fruit.");
}
// 30 => Task
// Make a array of five or more usernames, including the name 'admin'. 
let usernames = ["Mano", "Sana", "Rania", "Admin", "Komal"];
// Using Loop
usernames.forEach(oneUser => {
    if (oneUser === "Admin") {
        console.log(`Hello! ${oneUser}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello! ${oneUser}, thank you for logging in again.`);
    }
});
// 31 => Task
//Add an if test to Exercise 30 to make sure the list of users is not empty.
// If the list is empty, print the message We need to find some users!
let userNames = ["Mano", "Sana", "Rania", "Admin", "Komal"];
// Remove all of the usernames from your array, and make sure the correct message is printed.
userNames = [];
if (userNames.length === 0) {
    console.log("\nYour Array is Empty, We need to find some users");
}
else {
    userNames.forEach(oneUser => {
        if (oneUser === "Admin") {
            console.log(`\nHello! ${oneUser}, would you like to see a status report?`);
        }
        else {
            console.log(`\nHello! ${oneUser}, thank you for logging in again.`);
        }
    });
}
// 32 => Task
// Checking users name: Create a program that simulates how websites ensure that everyone has a unique username.
// Make a list of five or more usernames called current_users.
let current_users = ["Neha", "Sana", "Mehak", "Laiba", "Rania"];
// List of new_users
let new_users = ["Mano", "Alishba", "sana", "Rania", "Gul"];
// Loop through the new_users list to see if each new username has already been used.
new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLocaleLowerCase());
    if (our_condition) {
        console.log(`\nSorry!${new_one_user} is already taken`);
    }
    else {
        console.log(`\nThis user name ${new_one_user} is available`);
    }
});
// 33 => Task
// Ordinal numbers indicate their position in a array, such as 1st or 2nd.
//  Store the numbers 1 through 9 in a array.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Use if_else chain: Using loop, Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", 
// and each result should be on a separate line.
for (let oneNumber of numbers) {
    let ordinalEnding;
    if (oneNumber === 1) {
        ordinalEnding = "st";
    }
    else if (oneNumber === 2) {
        ordinalEnding = "nd";
    }
    else if (oneNumber === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log(`${oneNumber}${ordinalEnding}`);
}
// 34 => Task
// Think of at least three kinds of your favorite pizza. Store these pizza names in a array, 
// and then use a for loop to print the name of each pizza.
let pizza = ["Malai boti", "Creamy Pizza", "Chicken tikka"];
// Using for loop
for (let onePizza of pizza) {
    console.log(`\nI like ${onePizza} pizza`);
}
// Print a message outside of the loop.
console.log(`\nPizza is love`);
// 35 => Task
// Store the names of animals in a list, and then use a for loop to print out the name of each animal.
let petAnimals = ["Cat", "Dog", "Rabbit"];
// Using for loop
for (let onePet of petAnimals) {
    console.log(`\n A ${onePet} would make a great pet`);
}
// Print a message outside of the loop, what these animals have in common.
console.log("\nAny of these animals would make a great pet!");
// 36 => Task
// Write a function called make_shirt() that accepts a size and the text of a message that should
//  be printed on the shirt. 
function make_shirt(size, text) {
    console.log(`\nYou selected ${size} size shirt with ${text} prints on shirt.`);
}
// Calling function 
make_shirt("Large", "Diba shaikh");
make_shirt("small", "Diba shaikh");
// 37 => Task 
// Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_Shirt(size = "Large", message = "I love typescript") {
    console.log(`\nCreating a ${size} shirt with the ${message} prints on shirt.`);
}
// Calling function with by default values.
make_Shirt();
// Calling a function with medium size and by default message.
make_Shirt("Medium");
// Calling a function with a shirt of any size with a different message.
make_Shirt("Small", "I love javascript");
// 38 => Task
// Write a function called describe_city() that accepts the name of a city and its country. 
function describe_city(city, country = "Pakistan.") {
    console.log(`\n${city} is in ${country}`);
}
// Calling a function
describe_city("Karachi");
describe_city("Lahore");
describe_city("Alaska", "U.S");
// 39=> Task
// Write a function called city_country() that takes in the name of a city and its country.
// The function should return a string formatted
function city_country(city, country) {
    return `${city} , ${country}`;
}
// Calling a function & print returned value
//city_country("Karachi" , "Pakistan")
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Shanghai", "China"));
console.log(city_country("Osaka", "Japan"));
// 40 => task
// Write a function called make_album() that builds a Object describing a music album.
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Calling three functions by creating three variables with different values.
let album1 = make_album("Shaikh no. 1", "Album title 1");
let album2 = make_album("Sana", "Album title 2");
let album3 = make_album("Neha", "Album title 3", 45);
console.log(album1);
console.log(album2);
console.log(album3);
// 41 => Task
// Make a array of magician’s names. Pass the array to a function called 
// show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
// Define an array containing magicians name.
let magician_names = ["Harry Porter", "Teller", "Lance Burton"];
// Call the function to print each magician name.
show_magicians(magician_names);
// 42 => Task
// Write a function called make_great() that modifies the array of magicians
//  by adding the phrase the Great to each magician’s name.
function show_Magicians(magician) {
    magician.forEach(name => console.log(name));
}
// Adding the phrase the Great to each magician’s name
function make_Great(magician) {
    return magician.map(name => `The Great ${name}`);
}
// Define an array of magicians names.
let magician_Names = ["Teller", "Lance Burton", "Harry Porter"];
// Calling make_great function to modify magicians names.
let great_magicians = make_Great(magician_Names);
// Calling the show_Magicians that showing modified list of magicians.
show_Magicians(great_magicians);
// Calling great_magicians
console.log(great_magicians);
// 43 => Task
// Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged,
function showMagicians(magician) {
    magician.forEach(name => console.log(name));
}
// Adding the phrase the Great to each magician’s name
function make_great(magician) {
    return magician.map(name => `The Great ${name}`);
}
// Define an array of magicians names.
let magicianNames = ["Teller", "Lance Burton", "Harry Porter"];
//   Making a copy of orignal array through .slice () function
let copy_magician_names = magician_names.slice();
// Modify the copied array to incude "The Great" with their names.
let copy_grat_magicians = make_great(copy_magician_names);
// Show both arrays orignal & copied.
// Orignal
console.log("\n Orignal array\n");
showMagicians(magicianNames);
// Copied
console.log("\n Copied array\n");
showMagicians(copy_grat_magicians);
// 44 =>Task
// Write a function that accepts a array of items a person wants on a sandwich. 
// Define a function by rest parameter that accepts items.
function make_sandwich(...items) {
    console.log("\nMaking a sandwich with the following items: \n");
    
    items.forEach(singleitem => console.log(singleitem));

    console.log("\nNow Enjoy Sandwich");
}

// Calling the function with three different arguments.

make_sandwich("Chicken", "Mayo", "Tomato");

make_sandwich("Butter", "Cheese", "Bread");

make_sandwich("Egg", "Mayo", "Chicken", "Butter", "Letuce", "Tomato");

// 45=> Task

// Write a function that stores information about a car in a Object.

function creat_car(manufacturer, model, ...options){
  
    //Intilized a car object eith manufacturer and model.
    
    let car = {
        manufacturer: manufacturer,
        model: model
    };

    // Add additional option of the car object.

    options.forEach(option => {
        let [key, value] = option.split(":")
        car[key.trim()] = value.trim();
    });

    return car;

}

// Call the function to create a car object.

let my_car = creat_car("Toyota", "Corrolla", "Color: Red", "Sunroof: True")

console.log(my_car)