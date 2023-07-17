// Assignment code here
// 1. ask for length 8-128
// 2. ask to include uppercase, special, and numbers
var btn = document.getElementById("generate");

function generatePassword() {
  var charset = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  var password = "";
  var randomIndex = '';

const includeUpperCase = confirm("Include capital letters in your password?")
  const includeSpecialChars = confirm("Include special characters in your password?");
  const passlength = parseInt(prompt("Enter amount characters for your password. Enter a value between 8-128."));

  while (isNaN(passlength) || passlength < 8 || passlength > 128) {
    alert("Invalid prompt, please try again.");
    break;
  }
 
  randomIndex += charset;
   if (includeSpecialChars) {
    randomIndex += specialChars;
  }
  if (includeUpperCase) {
    randomIndex += upperCase;
  }

  for (var i = 0; i < passlength; i++) {
    const index = Math.floor(Math.random() * randomIndex.length);
    password += randomIndex[index];
  }
  document.getElementById('password').value = password;
}
btn.addEventListener("click", generatePassword);
