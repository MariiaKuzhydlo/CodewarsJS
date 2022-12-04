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

