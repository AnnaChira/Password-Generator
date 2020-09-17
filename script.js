// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers;
var specialCharacters;
var passwordLength;
var upperCase;
var lowerCase;

upperCase = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
lowerCase = "abcedefghijklmnopqrstuvwxyz";
specialCharacters = "!@#$%&*()^<>?";
numbers = "123456789";

function generatePassword() {
    
    if (numbers && specialCharacters && upperCase && lowerCase){
        confirm = numbers.concat(specialCharacters, upperCase, lowerCase);
    }
    else if (numbers && specialCharacters && upperCase){
        confirm = numbers.concat(specialCharacters, upperCase);
    }
    else if (numbers && specialCharacters && lowerCase){
        confirm = numbers.concat(specialCharacters, lowerCase);
    }
    else if (numbers && lowerCase){
        confirm = numbers.concat(lowerCase);
    }
    else if (numbers && upperCase){
        confirm = numbers.concat(upperCase);
    }
    else if (specialCharacters && upperCase){
        confirm = specialCharacters.concat(upperCase);
    }
    else if (specialCharacters && numbers){
        confirm = specialCharacters.concat(numbers);
    }
    else if (specialCharacters && lowerCase){
        confirm = specialCharacters.concat(lowerCase);
    }
    else if (upperCase && lowerCase){
        confirm = upperCase.concat(lowerCase);
    }
    else if (specialCharacters){
        confirm = specialCharacters;
    }
    else if (numbers){
        confirm = numbers;
    }
    else if (upperCase){
        confirm = upperCase;
    }
    else if (lowerCase){
        confirm = lowerCase;
    }
    if (passwordLength!==''){
        for (var i=0; i < passwordLength.value; i++){
            text += shuffle.charAt(Math.floor.random() * shuffle.length);
        }
    }
    return password;
   
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

generateBtn.addEventListener("click", writePassword);
