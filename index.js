function createReverse(word){
  
  const reversedWord = word.split("").reverse().join("")
}

function isPalindrome(word) {
  // Write your algorithm here
 const reversedWord = createReverse(word)
 
return reversedWord === word
}


/* 
  Add your pseudocode here
  reverse the string input
  Compare the word and the reversed version
  if same return true, if not return false
*/
/*
  Add written explanation of your solution here
  write the function that accepts the string as input
  in JS, .reverse only works in arrays and so the word is  slit, reversed then later joined using function createReverse
  the reversed string is then compared against the input
  If the two compare both forward and in reverse, its a palindrome hence return true, if not return false

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
