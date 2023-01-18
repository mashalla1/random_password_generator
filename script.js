// Event Listener to prompt questions when button is clicked
document.querySelector("#generate").addEventListener("click", writePassword);

// Array of special characters to be included in password
var specialCharacter = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  
// Array of numeric characters to be included in password
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
// Array of lowercase characters to be included in password
var alphaLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
// Array of uppercase characters to be included in password
var alphaUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


// Declare variables   
var confirmLength = "";
var confirmSpecial;
var confirmNumeric;
var confirmUpperCase;
var confirmLowerCase;

      
// Prompt for the user to input number of characters for their password
function generatePassword() {
  var confirmLength = (prompt("How many characters would your password have?"));


// If user input is not within parameters
while(confirmLength <= 9 || confirmLength >= 65) {
  alert("Password MUST be 10-64 characters. Please try again");
  var confirmLength = (prompt("How many characters would your password have?"));
  } 

// Confirm number of characters from user input
  //  alert('Password will contain ${confirmLength} characters');
   alert(`Password will have ${confirmLength} characters`);

// Determine parameters of password 
var confirmSpecial = confirm("Click OK to include special characters");   
var confirmNumeric = confirm("Click OK to include numeric characters"); 
var confirmLowerCase = confirm("Click OK to include lowercase characters");
var confirmUpperCase = confirm("Click OK to include uppercase characters");

//if input is outside of the parameters 
while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecial === false && confirmNumeric === false) {
  alert("You must choose at least one parameter");
  var confirmSpecial = confirm("Click OK to confirm if you would like to include special characters");
  var confirmNumeric = confirm("Click OK to confirm if you would like to include numeric characters");    
  var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
  var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");   
} 

var passwordCharacters = []
      
if (confirmSpecial) {
  passwordCharacters = passwordCharacters.concat(specialCharacter);
}

if (confirmNumeric) {
  passwordCharacters = passwordCharacters.concat(number);
}
  
if (confirmLowerCase) {
  passwordCharacters = passwordCharacters.concat(alphaLowerCase)
}

if (confirmUpperCase) {
  passwordCharacters = passwordCharacters.concat(alphaUpperCase)
}

  console.log(passwordCharacters)

// Empty string to be filled by the iteration of random characters from the array
var randomPassword = "";
  
for (var i = 0; i < confirmLength; i++) {
  randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  console.log(randomPassword);
}
return randomPassword;
}

  // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

 

