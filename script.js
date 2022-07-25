// Assignment code here

console.log("Password Generated");

//Criteria
//Create Prompts. More then 8 character but no more than 128 characters. Create criteria for password.
function getPrompts(); {
  characterlength = prompt("Please select between 8 to 128 characters.");
  if (characterlength > 8 || characterlength > 128);
if (confirm ("Symbols in the password?")) {
  choiceArr = choiceArr.concat(symbolsPW);
}
return;
}

//Create array of symbols, numbers, uppercase letters and lowercase letters
var symbolsPW = ['!' , '@' , '#' , '$' , '%' , '^' , '&' , '*' , '(' , ')'];
var numbersPW = ['1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , '0'];
var UppercaseLetters = ['A' , 'B' , 'C' , 'D' , 'E' , 'F' , 'G' , 'H' , 'I' , 'J' , 'K' , 'L' , 'M' , 'N' , 'O' , 'P' , 'Q' , 'R' , 'S' , 'T' , 'U' , 'V' , 'W' , 'X' , 'Y' , 'Z'];
var LowerCaseletters = ['a' ,'b' , 'c' , 'd' , 'e' , 'f' , 'g' , 'h' , 'i' , 'j' , 'k' , 'l' , 'm' , 'n' , 'o' , 'p' , 'q' , 'r' , 's' , 't' , 'u' , 'v' , 'w' , 'x' , 'y' , 'z'];

console.log(symbolsPW);
console.log(numbersPW);
console.log(UppercaseLetters);
console.log(LowerCaseletters);


//Create function for generate password
function generatePassword() {
  var password = "";
  for(var i = 0; 1 < characterlength; i++) 
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
