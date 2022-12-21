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

//21. Beginner Series #1 School Paperwork

function paperwork(n, m) {
	let x = n*m;
	if ( n < 0 || m < 0){
		return 0 
	} else {
		return  x
	}
}

//22. Is he gonna survive?

function hero(bullets, dragons){
   return (bullets / dragons >= 2) ? true : false
}

//23. Sum Arrays

function sum (numbers) {
	let sumNumber =0;
for( let i=0 ; i < numbers.length; i++) {
   sumNumber += numbers[i];
   }return sumNumber
}

//24. Simple multiplication

function simpleMultiplication(number) {
	if (number % 2 == 0){
	  return number * 8
	}else{
	  return number * 9
	}
}

//25. You Can't Code Under Pressure #1

function doubleInteger(i) {
	return i*2;
}

//26. Counting sheep...

function countSheeps(arrayOfSheep) {
	let count =0;
	for (let i = 0; i <= arrayOfSheep.length; i++ ){
	   if (arrayOfSheep[i] == true) {
		   count++
	} 
	}return count
}

//27. Convert number to reversed array of digits

function digitize(n) {
	let array = (""+n).split("").reverse().map(Number);
	return array
}

//28. Sum of positive

function positiveSum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++){
	   if(arr[i] > 0){
		   sum += arr[i]
	}
	}return sum
}

//29. Will you make it?

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
	return (fuelLeft *  mpg >= distanceToPump) ? true : false ;
}

//30. String ends with?

function solution(str, ending){
	let n = 0;
	let x = true;
	let newStr = str.split('').reverse('');
	let newEnd = ending.split('').reverse('');
   for(let  i=0; i<newEnd.length; i++){
	   if(newEnd[i] == newStr[i]){
			n++;
	   }if (n == newEnd.length)
					x = Boolean(true);
				else
					x = Boolean(false);
	} return x
}

//31. Are You Playing Banjo?

function areYouPlayingBanjo(name) {
	let nameArray = name.toLowerCase().split('');
	if (nameArray[0] == 'r'){
	return name +' '+ 'plays banjo'
	} else{
	return name + ' '+ 'does not play banjo';
	} 
}

//32. Transportation on vacation

function rentalCarCost(d) {
   let sum = 0
   if ( d < 3 ){
     sum = d * 40
   } else if( d >=3 && d< 7){
      sum = d*40 - 20 
   } else {
      sum = d*40 - 50
   }  return sum 
}

//33. The Feast of Many Beasts

function feast(beast, dish) {
	if (beast[0] == dish[0] && beast.substr(-1) == dish.substr(-1)){
	   return true
	} else{
	   return false
	}
}

//34. Sum of odd numbers

function rowSumOddNumbers(n) {
	let sum = 0;
   for (let i = 0; i < n; i++){
      if (n==1){
      sum = 1 
   } else {
      sum += n*(2*i+1)
   }
   }
	return sum
}

//35. Sorted? yes? no? how?

function isSortedAndHow(array) {
	let a=1;
	let d=1;
	let x = 'no'
	for (let i=0; i < array.length; i++){
	   if (array[i] <= array[i+1]){
		a++
	   } else if (array[i] > array[i+1]){
		d++
	   } if (a == array.length){
		x = 'yes, ascending'
	   } else if ( d == array.length){
		x = 'yes, descending'
	   }
	}return x
}

//36. Case Swapping

function swap(str){
	let  newStr = str.split('');
	let res = '';
   for (let i=0; i< newStr.length;i++){
	if(newStr[i] === newStr[i].toLowerCase()){
		res += newStr[i].toUpperCase()
	} else {
		res += newStr[i].toLowerCase()
	}
   }  return res
}

//37. Spacify

function spacify(str) {
	let res='';
	for(let i = 0; i < str.length;i++){
	   res += str[i]+ ' '
	}return res.substring(0, res.length - 1);
}

//38. Reverse words


function reverseWords(str) {
	let arr = str.split(' ')
	let result = arr.map(item => item.split('').reverse('').join(''));
return result.join(' ')
}

//39. Nice Array

function isNice(arr){
	let result=0;
	arr.forEach(function(item, index, array) {
	if (arr.includes(item + 1) || arr.includes(item - 1)) {
		result +=1;
	}
});
	return ((result == arr.length) && ( arr.length !== 0) ?  true : false)
}

//40. Convert an array of strings to array of numbers

function toNumberArray(stringarray){
	let numberArray = stringarray.map( item => Number(item));
	return numberArray
}

//41. Largest pair sum in array

function largestPairSum (numbers) {
	let getSumNumber = 0;
	let getIndexMaxNumber;
		for ( let i = 0; i<=1; i++){
	      let  maxElement = Math.max(...numbers);
		getSumNumber +=maxElement
		getIndexMaxNumber = numbers.indexOf(maxElement);
		numbers.splice(getIndexMaxNumber,1);
	};
	return getSumNumber 
}

//42. Even numbers in an array

function evenNumbers(array, number) {
	let result =array.filter(item => item % 2 == 0).reverse(); 
	result.length = number;
	return result.reverse()
}

//43. Working with arrays I (and why your code fails in some katas)

function withoutLast(arr) {
	let newArr = arr.filter(item => item !== '');
	newArr.pop()
   return newArr
}

//44. Number of People in the Bus

var number = function(busStops){
	let getArr = busStops.join(',').split(',').map( item=> Number(item));
	let getInto = 0;
	let getOut = 0;
	for(let i = 0; i<getArr.length; i++){
	   if ( i % 2 !== 0){
		getOut += getArr[i];
		} else {
		getInto += getArr[i]; 
	}
	}
		return getInto - getOut
}

//45. Maximum Triplet Sum (Array Series #7)

function maxTriSum(numbers){
	let uniqueArray = numbers.filter((item, pos) => numbers.indexOf(item)==pos);
	let result=0
	for(let i=0;i<=2;i++){
		let maxNumber = Math.max(...uniqueArray);
		result +=maxNumber;
		uniqueArray.splice(uniqueArray.indexOf(maxNumber),1);
	}
	return result
}

//46. Array comparator

const matchArrays = (v, r) => v.filter(e => r.includes(e)).length;

//47. Product Of Maximums Of Array (Array Series #2)

function maxProduct(numbers, size){
	let result= numbers.sort((a,b)=> b-a).slice(0, size).reduce((previous, current) => previous * current);
	return result
}

//48. Multiply the strings in the array

function arrMultiply(arr){
	let product=arr.map(item => Number(item)).reduce((a,b)=> a*b);
	return String(product)
}

//49. Find all occurrences of an element in an array

function findAll(array, n) {
	let getArrayOfIndexs = [];
	let indexOfN = array.indexOf(n);
	while (indexOfN !== -1){
		getArrayOfIndexs.push(indexOfN);
		indexOfN = array.indexOf(n, indexOfN  + 1);
	} return getArrayOfIndexs
}

//50. Sum of array singles

function repeats(arr){
	let uniqueArray = arr.filter((el) => arr.indexOf(el)=== arr.lastIndexOf(el));
	return uniqueArray.reduce((a,b)=> a+b)
}