
//////
let score = Number(prompt("Enter your score:"));

if (score >= 70) {
    console.log("Grade: A");
}
else if(score >= 60) {
    console.log("Grade: B");
}
else if(score >= 50) {
    console.log("Grade: C");
}
else if(score >= 45) {
    console.log("Grade: D");
}
else if(score >= 40) {
    console.log("Grade: E");
}
else if(score < 40) {
    console.log("Grade: F");
}
else {
    console.log("Invalid score");
}
//////

//////
//for loop - Shopping Cart
let price = [5000, 10000, 2000, 8500];
let total = 0;

for(let i = 0; i < price.length; i++) {
    total += price[i];
}
console.log("Total price: " + total);

//while loop - ATM pin verification
let corretPin = '1234';
let attempts = 0;
let pin = '';

while(pin !== correctPin && attempts < 3) {
    pin = prompt('Enter your ATM Pin:');
    attempts++;
}
if(pin === corretPin) {
    console.log("Access granted");
}
else {
    console.log("Card blocked!");
}

//for...of - Student scores
let scores = [75, 42, 89, 56, 91, 33, 68];
let passed = 0;
let failed = 0;

for(let score of scores) {
    if(score >= 50) {
        passed++;
    }
    else {
        failed++;
    }
}

console.log('Passed:', passed);
console.log('Failed:', failed);

//for + break - User login system
let users = ['Fatimah', 'Maryam', 'Amina', 'Mufidah', 'Khadijah'];
let username = prompt('Enter')