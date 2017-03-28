//pText
//keyword
//btn




function encryption() {
  var plainText = document.getElementById('pText').value.toLowerCase();
  var keyword = document.getElementById('keyword').value.toLowerCase();
  var encrypted = "";
  console.log(plainText);
  console.log(keyword);
  //make sure keyword is bigger than plainText
  //Loop through plainText
  for (var i = 0; i < plainText.length; i++) {
  //for every character we need to do this
    var currentC = plainText.charCodeAt(i) - 96;
    console.log(currentC);
    //Make sure keycharacter number is cycling in the key lengeth
    var keyC = keyword.charCodeAt(i % keyword.lenget) - 96;
    //add character's alphabet number to it's cooresponding keyword character.
    var encryptedC = currentC + keyC;
    //If number is bigger than 26,
    if (encryptedC > 26) {
      encryptedC = encryptedC - 26;
    }
      //calculate that number -26
     //now put ascii character of that number as the encrypted character
    encrypted = encrypted + String.fromCharCode(encryptedC + 96);
  }
  console.log(encrypted);
  document.getElementById('result').value = encrypted;
}
