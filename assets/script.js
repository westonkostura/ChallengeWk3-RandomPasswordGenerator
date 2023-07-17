// Assignment code here
// 1. ask for length 8-128
// 2. ask to include uppercase, special, and numbers
var btn = document.getElementById("generate");

function generatePassword() {
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  var password = "";
  var randomIndex = '';


  const passlength = parseInt(prompt("Enter amount characters 8-128"));
  const includeSpecialChars = confirm("Include special characters?");

  while (isNaN(passlength) || passlength < 8 || passlength > 128) {
    alert("Invalid prompt, please try again.");
    break;
  }
 
  randomIndex += charset;
   if (includeSpecialChars) {
    randomIndex += specialChars;
  }

  for (var i = 0; i < passlength; i++) {
    const index = Math.floor(Math.random() * randomIndex.length);
    password += randomIndex[index];
  }
  document.getElementById('password').value = password;
}
btn.addEventListener("click", generatePassword);
