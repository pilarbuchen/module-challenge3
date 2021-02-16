// Global Variables & Arrays
var selectUpperArray = ["A", "B", "C", "D", "E", "F", "G", "H"]
var selectLowerArray = ["i", "j", "k", "l", "m", "n", "o", "p"]
var selectSpecialCharArray = ["$", "#", "&", "?", "-", "!", ")", "*"]
var selectNumbersArray = ["1", "2", "3", "4", "5", "6", "7", "8"]
var passwordChoices = []

var selectChar

var generateBtn = document.querySelector("#generate"); {

// If & Else Statements 
  document.getElementById("generate").onclick = function () {
    var generateBtw = confirm("Do you want to generate a special password?")

    if (generateBtw === true) {
      selectChar = window.prompt("Choose the number of characters you want in your password - between 8 and 128");
      console.log(selectChar)
    } else {
      var generateBtw = alert("Try again later, something went wrong"); return; 
    }

    if (selectChar >= 8 && selectChar < 128) {
      var selectUpper = confirm("Do you want upper case letters?");
    } else {
      var generateBtw = alert("Try again later, something went wrong"); return; 
    } 

    if (selectUpper === true) {
      var selectLower = confirm("Do you want lower case letters?"); 
      arrayMaker(selectUpperArray)
    } else {
      alert ("You need to choose those characters. Try again!"); return; 
    }

    if (selectLower === true) {
      var selectSpecialChar = confirm("Do you want special characters?"); 
      arrayMaker(selectLowerArray)
    } else {
      alert ("You need to choose those characters. Try again!"); return; 
    }

    if (selectSpecialChar === true) {
      var selectNumbers = confirm("Do you want to include numbers?"); 
      arrayMaker(selectSpecialCharArray)
    } else {
      alert ("You need to choose yhose characters. Try again!"); return; 
    }

    generatePass();
  }
}

//Array Logic 
function arrayMaker(charArray) {

  for (i = 0; i < charArray.length; i++) {
    passwordChoices.push(charArray[i])
  }

}

//Password Logic 
function generatePass() {
  var password = '';

  for (i = 0; i < parseInt(selectChar); i++) {
    //console.log('random num!!',selectLower [Math.floor(Math.random() * selectLower.length)]);

    password += passwordChoices[Math.floor(Math.random() * passwordChoices.length)]

  }
  
  document.getElementById('password').value = password;
}








