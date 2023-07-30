
// Generate password based on user-selected criteria
function generatePassword() {
  var lengthInput = prompt("Enter the desired password length (between 8 and 128):");
  var length = parseInt(lengthInput);

  // Validate the input length
  if (isNaN(length) || length < 8 || length > 128) {
      alert("Invalid option! Please enter a NUMBER between 8 and 128.");
      return "";
  }

  // Validate the input length
  if (length < 8 || length > 128) {
      alert("Invalid password length! Please enter a number between 8 and 128.");
      return "";
  }

  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
      alert("Please select at least one character type.");
      return "";
  }

  var characterPool = "";
  if (includeLowercase) {
      characterPool += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeUppercase) {
      characterPool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeNumeric) {
      characterPool += "0123456789";
  }
  if (includeSpecial) {
      characterPool += "!@#$%^&*()-_=+[]{}|;:,.<>/?";
  }

  var password = "";
  for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * characterPool.length);
      password += characterPool.charAt(randomIndex);
  }

  return password;
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
