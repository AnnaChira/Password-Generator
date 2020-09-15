// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers;
var specialCharacters;
var passwordLength;
var upperCase;
var lowerCase;

function generatePassword() {
    var results = " ";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
    var lowerCase = "abcedefghijklmnopqrstuvwxyz";
    var specialCharacters = "!@#$%&*()^<>?";
    var numbers = "123456789";
    var passwordLength = password. length;
    for (var i = 0; i >= 8; i <= 128){
        result += password.charAt(Math.floor(Math.random() * passwordLength));
         }
         return result;
      }    

function validate(){
    if (!numbers && !specialCharacters && !upperCase && !lowerCase){
        alert("You must chose at least one!");
        return false;
    }

    var length = Number(passwordLength);
    if  (length && length >= 8 && length <= 128){
        return true;
    }
    else {
        alert("The password must be more than 8 characters and less that 128!");
        return false;
    }
}

// Write password to the #password input
function writePassword() {
    numbers = confirm ("Do you want numbers?");
    specialCharacters = confirm ("Do you want special charatcers?");
    passwordLength = prompt ("How long do you want your password?");
    upperCase = confirm ("Do you want uppercase?");
    lowerCase = confirm ("Do you want lowercase?");

    var valid = validate();
    if (!valid) {
        return;
    }

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
