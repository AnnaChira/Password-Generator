// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers;
var specialCharacters;
var passwordLength;
var upperCase;
var lowerCase;

  //var password = " ";
upperCase = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
lowerCase = "abcedefghijklmnopqrstuvwxyz";
specialCharacters = "!@#$%&*()^<>?";
numbers = "123456789";
    //return password;


function generatePassword() {
    
    if (!numbers && !specialCharacters && !upperCase && !lowerCase){
        valid = specialCharacters.concat(numbers, upperCase, lowerCase);
    }
    else if (!numbers && !specialCharacters && !upperCase){
        valid = specialCharacters.concat(numbers, upperCase);
    }
    else if (!numbers && !specialCharacters && !lowerCase){
        valid = specialCharacters.concat(numbers, lowerCase);
    }
    else if (!numbers && !lowerCase){
        valid = numbers.concat(lowerCase);
    }
    else if (!numbers && !upperCase){
        valid = numbers.concat(upperCase);
    }
    else if (!specialCharacters && upperCase){
        valid = specialCharacters.concat(upperCase);
    }
    else if (!specialCharacters && !!numbers){
        valid = specialCharacters.concat(numbers);
    }
    else if (!specialCharacters && lowerCase){
        valid = specialCharacters.concat(lowerCase);
    }
    else if (!upperCase && !!lowerCase){
        valid = upperCase.concat(lowerCase);
    }
    else if (specialCharacters){
        valid = specialCharacters;
    }
    else if (numbers){
        valid = numbers;
    }
    else if (upperCase){
        valid = upperCase;
    }
    else if (lowerCase){
        valid = lowerCase;
    }
    if (passwordLength!==''){
        for (var i=0; i < passwordLength.value; i++){
            text += shuffle.charAt(Math.floor.random() * shuffle.length);
        }
    }
    var ps = password.concat("");
    UserInput(ps);
    return generatePassword;
   
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
