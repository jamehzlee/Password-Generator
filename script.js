var lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var numerics = '0123456789'.split('');
var specialChar = '~!@#$%^&*()_+"-=,./\|<>?;:[]{}'.split('');

var charPool = []; 
var passArray = [];

function criteria() {
  const includeLower = confirm("Would you like to include lower case letters");
  const includeUpper = confirm("Would you like to include upper case letters");
  const includeNum = confirm("Would you like to include numbers");
  const includeSpec = confirm("Would you like to include special characters");
  
  while (passwordLength < 8 || passwordLength >128) {
    var passwordLength = prompt("Please enter a length between 8-128 characters.");
  }
  console.log(criteria);
}

function pickCharTypes() {
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
  console.log(pickCharTypes);
}

//Generates random characters for any given length 
function rollChar() {
  for (let i = 0; i < passwordLength; i++) {
    var randomNum = Math.floor(Math.random() * charPool.length);
    var randomChar = charPool[randomNum];
    passArray.push(randomChar);
  }
  console.log(passArray);
}

function generatePassword() {
  criteria();
  pickCharTypes();
  rollChar();
  passArray.toString();
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  charPool = [];
  passArray = [];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);