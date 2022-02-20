var lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var numerics = '0123456789'.split('');
var specialChar = '~!@#$%^&*()_+"-=,./\|<>?;:[]{}'.split('');
var charPool = []; 
var passArray = [];
var passwordLength = 0;

//Asks user which set(s) of characters to include in password
function pickCharTypes() {
  var includeLower = confirm("Would you like to include lower case letters?");
  var includeUpper = confirm("Would you like to include upper case letters?");
  var includeNum = confirm("Would you like to include numbers?");
  var includeSpec = confirm("Would you like to include special characters?");
  
  if (includeLower == true) {
    charPool = charPool.concat(lowerCase);
  }
  if (includeUpper == true) {
    charPool = charPool.concat(upperCase);
  }
  if (includeNum == true) {
    charPool = charPool.concat(numerics);    
  }
  if (includeSpec == true) {
    charPool = charPool.concat(specialChar);
  }
}

//Prompts user until password length is 8-128 characters
function lengthInput() {
  while (passwordLength < 8 || passwordLength >128) {
    passwordLength = prompt("Please enter a length between 8-128 characters.");
    if (passwordLength == null) {
      return;
    }
  }
}

//Adds random character to the end of an array 
function rollChar() {
  for (let i = 0; i < passwordLength; i++) {
    var randomNum = Math.floor(Math.random() * charPool.length);
    passArray.push(charPool[randomNum]);
  }
}

//resets global variables
function reset() {
  charPool = [];
  passArray = [];
  passwordLength = 0;
}

//Generates password array and converts to a string with no spaces
function generatePassword() {
  pickCharTypes();
  lengthInput();
  rollChar();
  var passString = passArray.join('');
  return passString;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  reset();
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
