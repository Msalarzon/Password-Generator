// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function to prompt user for password options
function getPasswordOptions() {
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validation of at least one character type selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type.");
    return null;
  }

  // Return an object with password options
  return {
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase,
    includeNumeric: includeNumeric,
    includeSpecial: includeSpecial,
  };
}

// Function to ask the user for password options
function getPasswordOptions() {
  // Ask the user about including character types
  var includeLowercase = confirm("Do you want to include lowercase characters?");
  var includeUppercase = confirm("Do you want to include uppercase characters?");
  var includeNumeric = confirm("Do you want to include numeric characters?");
  var includeSpecial = confirm("Do you want to include special characters?");

  // Check if at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please choose at least one character type.");
    return null;
  }

  // Return an object with the user's choices
  return {
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase,
    includeNumeric: includeNumeric,
    includeSpecial: includeSpecial,
  };
}

// Function to generate a password based on user input
function generatePassword(options) {
  var characterPool = [];

  // Combine character types based on user choices
  if (options.includeLowercase) characterPool = characterPool.concat(lowerCasedCharacters);
  if (options.includeUppercase) characterPool = characterPool.concat(upperCasedCharacters);
  if (options.includeNumeric) characterPool = characterPool.concat(numericCharacters);
  if (options.includeSpecial) characterPool = characterPool.concat(specialCharacters);

  // Check if character pool is empty
  if (characterPool.length === 0) {
    return "Error: No character types selected. Please try again.";
  }

  // Generate the password
  var password = "";
  for (var i = 0; i < 12; i++) { 
    password += getRandom(characterPool);
  }

  return password;
}

// Function to get a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Get references to the #generate button and #password textarea
var generateBtn = document.querySelector('#generate');
var passwordText = document.querySelector('#password');

// Event listener for the Generate Password button
generateBtn.addEventListener('click', function () {
  // Get user choices for password options
  var options = getPasswordOptions();

  // Exit if user input is invalid
  if (!options) {
    passwordText.value = "";
    return;
  }

  // Generate password and display it
  var password = generatePassword(options);
  passwordText.value = password;
});