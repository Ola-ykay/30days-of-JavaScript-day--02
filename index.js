// Exercise: Level 1
// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
// Print the string on the browser console using console.log()
// Print the length of the string on the browser console using console.log()
// Change all the string characters to capital letters using toUpperCase() method
// Change all the string characters to lowercase letters using toLowerCase() method
// Cut (slice) out the first word of the string using substr() or substring() method
// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
// Check if the string contains a word Script using includes() method
// Split the string into an array using split() method
// Split the string 30 Days Of JavaScript at the space using split() method
// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
// Use match() method to find all the a’s in 30 Days Of JavaScript
// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
// Use repeat() method to print 30 Days Of JavaScript 2 times

// solution to level 1
// solution 1
let challenge = "30 Days Of JavaScript";

// solution 2
console.log(challenge);

// solution 3
console.log(challenge.length);

//solution 4
console.log(challenge.toUpperCase());

//solution 5
console.log(challenge.toLowerCase());

//solution 6
let firstWord = challenge.substring(0, 1);
console.log(firstWord);

//solution 7
let slicedWords = challenge.substr(3, 18);
console.log(slicedWords);

//solution 8
let word = "Script";
let check = challenge.includes(word);
console.log(check);

//solution 9
let splitWords = challenge.split();
console.log(splitWords);

//solution 10
let spaceWords = challenge.split(" ");
console.log(spaceWords);

//solution 11
let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(" "));

//solution 12
let replacedWords = challenge.replace("JavaScript", "Python");
console.log(replacedWords);

//solution 13
console.log(challenge.charAt(15));

//solution 14
console.log(challenge.charCodeAt(11));

//solution 15
let firstOccurrence = challenge.indexOf("a");
console.log(firstOccurrence);

//solution 16
let lastOccurrence = challenge.lastIndexOf("a");
console.log(lastOccurrence);

//solution 17
let sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because"));

//solution 18
console.log(sentence.lastIndexOf("because"));

//solution 19
let searchedWord = sentence.search("because");
console.log(searchedWord);

//solution 20
let toTrim = " 30 Days Of JavaScript ";
let trimmed = toTrim.trim();
console.log(trimmed);

//solution 21
let startWord = challenge.startsWith("30");
console.log(startWord);

//solution 22
let endWord = challenge.endsWith("t");
console.log(endWord);

//solution 23
let toMatch = challenge.match(/a/gi);
console.log(toMatch);

//solution 24
let firstStatement = "30 Days of ";
let secondStatement = "JavaScript";
let toMerge = firstStatement.concat(secondStatement);
console.log(toMerge);

//solution 25
console.log(challenge.repeat(2));

/*Exercise: Level 2
Using console.log() print out the following statement:
1) The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
Using console.log() print out the following quote by Mother Teresa:
2) "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
3) Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
4) Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
5) Check if 'on' is found in both python and jargon
6) I hope this course is not full of jargon. Check if jargon is in the sentence.
7) Generate a random number between 0 and 100 inclusively.
8) Generate a random number between 50 and 100 inclusively.
9) Generate a random number between 0 and 255 inclusively.
10) Access the 'JavaScript' string characters using a random number.
11) Use console.log() and escape characters to print the following pattern.
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
12) Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
*/

//Solutions to level 2

//solution 1
let quoteByJohnHolmes =
  "There is no exercise better for the heart than reaching down and lifting people up.";
console.log(quoteByJohnHolmes);

//solution 2
let quoteByMotherTeresa =
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(quoteByMotherTeresa);

//solution 3
let num = "10";
let number = 10;
console.log(num === number);

let numInt = parseInt(num);
console.log(numInt);

//solution 4
let parseNum = Math.round(parseFloat("9.8"));
console.log(parseNum);

//solution 5
let word1 = python;
let word2 = jargon;
console.log(word1.includes("on"), word2.includes("on"));

//solution 6
let sentence1 = "I hope this course is not full of jargon";
console.log(sentence1.includes("jargon"));

//solution 7,8,9
let min = 0;
let max = 100;
let generateRandomNumber = Math.floor(Math.random() * (max - min) + min);
console.log(generateRandomNumber);

//solution 10
let toAccess = "Javascript";
let wordAccess = toAccess.length;
let randomWord = Math.floor(math.random() * wordAccess);
console.log(toAccess[randomWord]);

//solution 11
console.log("1 1 1 1 1\n 2 1 2 4 8\n 3 1 3 9 27\n 4 1 4 16 64\n 5 1 5 25 125");

//solution 12
let wordSlice =
  "You cannot end a sentence with because because because is a conjunction";
let sliceWord = wordSlice.substr(31, 23);
console.log(sliceWord);

// Exercises: Level 3
//1) 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

//2) Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

//3) Clean the following text and find the most frequent word (hint, use replace and regular expressions).

// const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

// 4)Calculate the total annual income of the person by extracting the numbers from the following text.
//  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month'.

//Level 3 solution
//solution 1
let stringCount =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
let wordToCount = stringCount.match(/love/gi).length;
console.log(wordToCount);

//solution 2
let sentenceCount =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentenceCount.match("because"));

//solution 3
const sentenceCl =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
console.log(sentenceCl.replace(/[%$@%&#;!]/g, ""));

//solution 4
let salaryMessage =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let regEx = /\d+/g;
let extractNums = salaryMessage.match(regEx);
console.log(extractNums);

let totalIncome =
  Number(extractNums[0]) + Number(extractNums[1]) + Number(extractNums[2]);
console.log(totalIncome);
