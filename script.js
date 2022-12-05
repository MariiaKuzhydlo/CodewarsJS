// 1. Convert a Number to a String!

function numberToString(num) {
	let s = String(num);
	return s;
}


// 2. Even or Odd

function even_or_odd(number) {
	if (number % 2 == 0){
	   console.log( number = "Even");
	} else {
	   console.log( number = "Odd");
	} return number; 
} ;

// 3. Find the Remainder

function remainder(n, m){
	const minNumber = Math.min(n, m);
	const maxNumber = Math.max(n, m);
	let difference = maxNumber % minNumber ;
	return difference; 
	
}

// 4. Convert boolean values to strings 'Yes' or 'No'.

function boolToWord( bool ){
	if (bool == true) {
	   return "Yes"
	} else if (bool == false ){
	   return "No"
	}
}

// 5. Convert a Boolean to a String

function booleanToString(b){
	return b ? "true" : "false"
}

//6. Reversed Words

function reverseWords(str){
	return str.split(" ").reverse().join(" ");
}

//7.Grasshopper - Summation

let summation = function (num) {
	let sum = 0 ;
	let i = 0;
	while (i <= num ){
	   sum += i;
	   i++;
	} return sum 
}

//8. Remove First and Last Character

function removeChar(str){
	return str.slice(1).slice(0, -1)
};

//9. String repeat 
function repeatStr (n, s) {
	let i=1;
	let str ='';
	while(i<=n){
	   str +=s
		i++
	}return str;
}
 
//10. Sum of Multiples

function sumMul(n,m){
	let sum =0;
	if (n <=0 || m <=0 ){
	   return "INVALID";
	} else {
	   for(let i=0; i < m ; i++){
		if (i % n == 0){
		sum += i
		}
	}
	}return sum
}

//11. Opposite number

function opposite(number) {
	if( number > 0 ){
	   return -number
	}else if(number < 0){
	   return number * -1
	}else {
	   return 0
	}
}

//12. Is n divisible by x and y?

function isDivisible(n, x, y) {
	return  (n % x == 0 & n % y == 0) ? true : false;
}

//13. Powers of 2

function powersOfTwo(n){
	let m=[]
	if (n ==0){
	   return [1]
	} else if ( n > 0){
	   for( let i=0; i<=n; i++){
		m[i]= Math.pow(2, i)
	   }return m
	}
}

//14. Is the date today

function isToday(date) {
	const today = new Date();
	if (date.getFullYear() == today.getFullYear() && 
		date.getMonth() == today.getMonth() &&
		date.getDate() == today.getDate()) {
		return true
	}else {
		return false
	}
}

//15. Sentence Smash

function smash (words) {
   return words.join(" ")
}

//16. Odd or Even?

function oddOrEven(array) {
	let sum = 0 ;
	for( let i=0 ; i < array.length; i++) {
	   sum += array[i]
	} return ( sum % 2 == 0) ? "even" : "odd"
}

//17. Is it a palindrome?

function isPalindrome(x) {
	let str = x.split('').reverse('').join('');
	if ( x.toLowerCase() === str.toLowerCase()) {
	   return true
	} else {
	   return false
	}
}

//18. Sum of all arguments

function sum() {
	let sumNumber =0;
	for( let i=0 ; i < arguments.length; i++) {
	   sumNumber += arguments[i];
	}return sumNumber
}

//19. Vowel Count

function getCount(str) {
	let vowelsCount = 0;
	let strNew = str.split('');
	for(let i=0 ; i < strNew.length;i++){
	   if (strNew[i] =='a' || strNew[i] == 'e' || strNew[i] == 'i' || strNew[i] == 'o'
			||strNew[i] == 'u' ){
		vowelsCount += 1 ;
	   }
	}
	return vowelsCount;
}

//20. Find the smallest integer in the array

class SmallestIntegerFinder {
	findSmallestInt(args) {
	return Math.min.apply(Math, args)
	}
}