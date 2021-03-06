// Assignment code here
// First i'll name the variables I need to create a random password.
// Then i'll create the if statements for each individual question.
// create prompts for the questions.
// make a for loop because if I dont, it will only return 1 character(tested doing console.log).
// console log to see if selections are working.
var characterLength = 8;
var specialCharacter = ['!','?','#','$','&','*','+','%'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var number = ['1','2','3','4','5','6','7','8','9'];
var choice = [];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
 

function generatePassword() {
    var password = '';
    for(var i =0; i < characterLength; i++){
        var randomIndex = Math.floor(Math.random()* choice.length);
        password = password + choice[randomIndex];
    }
    return password;
}
   
function getPrompts() {
    choice = [];
// created the prompt for how many characters you would like in your password and did a parseInt so that someone would have to reply with a number between 8 and 128.
    characterLength = parseInt(prompt("How many characters would you like to have in your password? (8-128)"));
//   if you provide a letter, a number less than 8 or greater than 128, you will be prompted to try again. 
if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {    
    alert("Character length has to be between 8 and 128 characters. Please try again");
    return false;
} 
// did the choice.contact method because it merges my 2 arrays which were the choice and lowerCase, uppercase etc.
if (confirm("Would you like lowercase letters in your password?")) {
    choice = choice.concat(lowerCase);
}
if (confirm("Would you like Uppercase letters in your password?")) {
    choice = choice.concat(upperCase);
}
if (confirm("Would you like numbers in your password?")) {
    choice = choice.concat(number);
}
if (confirm("Would you like special characters in your password?")) {
    choice = choice.concat(specialCharacter);
}
// created a console log to check if the selections were generating a random character
console.log(choice);
console.log(choice[Math.floor(Math.random()*choice.length)]);

return true;
}



// Write password to the #password input
function writePassword() {
var correctPrompts = getPrompts();
if (correctPrompts) {
var newPassword = generatePassword();
 var passwordText = document.querySelector("#password");
 passwordText.value = newPassword;
} else {
passwordText.value= '';
}

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);