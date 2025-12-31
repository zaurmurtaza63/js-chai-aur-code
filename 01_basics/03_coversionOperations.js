 
 
 /* 
CONVERSION OPERATIONS
We need conversion operations because when we start working on the backend,
we must know which data type we are sending and which data type we are receiving.
We also need to understand which data type is coming from the frontend.
That’s why conversion operations are very important. 
 */


let score = 33; 
console.log(typeof(score)); //number

let age = "33"; 
console.log(typeof age);  // string

// when we start to change the datatype
let valueInNumber = Number (age) ;
console.log(typeof valueInNumber);
 /* 
let valueInNumber = Number (age) ; 
here how we convert the age datatype string to number. 
*/

// here how we convert the valueInNumber datatype number to string.
let valueString = String (valueInNumber);
console.log(typeof(valueString));





// Here we start to convert number into boolean datatype.
let isloggedIn = 0;
let booleanIsLoggedIn = Boolean (isloggedIn);
console.log(typeof(booleanIsLoggedIn));
console.log(booleanIsLoggedIn);

/*
Boolean DataTypes 
empty value => ""  ===> false
not empty value => "hello"  ===> true
1 ===> true
0 ===> false
+1 ===> true
null      => false
undefined => false
NaN       => false
*/




