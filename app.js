let l = "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~";

let firstName = "Doctor";
let lastName = "Colossus";
let age = 40000;

console.log(l);

// Concatination
let msgConcat = "My name is " + firstName + " " + lastName + " and my age is " + age + ".";
console.log(msgConcat);
console.log(l);

// string and template literals
let msgStringLiteral = `My name is ${firstName} ${lastName} and my age is ${age}`;
console.log(msgStringLiteral);
console.log(l);

// Escape & New Line
let a = "Add a new line\nThis is another line.";
console.log(a);
console.log(l);

let b = 'Chief Wiggem asked me to "Stay away from Death Mountain"';
console.log(b);
console.log(l);


// Length of String
let d = "abcdefg";
console.log(`Length of d - ${d.length}`);
console.log(l);

// toUpper
d = d.toUpperCase();
console.log(d);

// toLower
d = d.toLowerCase();
console.log(d);

// substr
let e = d.substr(2,4);
console.log(e);

// substring
let f = d.substring(3);
console.log(f);

// indexOf
let index = d.indexOf("c");
console.log(index);