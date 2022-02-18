// 
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
console.log(lowerCase);

var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
console.log(upperCase);

var numerics = '0123456789'.split('');
console.log(numerics);

var specialChar = '~!@#$%^&*()_+"-=,./\|<>?;:[]{}'.split('');
console.log(specialChar);

//Generates random characters for any given length 
// for (let i = 0; i < ; i++) {
//   Math.floor(Math.random()*/*array with char, etc.*/0);

// }
var includeLower = window.prompt("Would you like to include lower case letters")
var includeUpper = window.prompt("Would you like to include upper case letters")
var includeNum = window.prompt("Would you like to include numbers")
var includeSpec = window.prompt("Would you like to include special characters")

if (includeLower == true) {
if (includeUpper == true) {
if (includeNum == true) {
if (includeSpec == true) {

}}}}

// Assignment Code
function generatePassword() {
  var passwordLength;
  

  return passwordLength;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
