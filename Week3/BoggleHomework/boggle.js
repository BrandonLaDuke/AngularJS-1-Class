var dictionary = ["YAP","YAH","ATE","ANT","ANTRE","ANTE","ANE","ANELE","ANY","TAP","TAN","TRENCH","TREY","THY",
"THAN","THANE","TERN","TEN","TENCH","TEL","TELE","RET","RENT","RELY","RELET","PYA","PAY","PAT",
"PATH","PATE","PATER","PATEN","PAH","PAN","PANT","PANE","PANEL","PHAT","PHT","HYP","HAY","HAT",
"HATE","HATER","HAP","HANT","HANCE","NAY","NAP","NAH","NTH","NET","ETA","ETH","ETNA","ERN","EYE",
"CHAY","CHAT","CHAP","CHANT","CHANTER","CHANTEY","CELT","LET","LENT","LEY","LYNCH","LYE","LECH",
"LEV","YET","YEN","YENTA","YECH","YECHY","VET","EYNE","EYER","EYEN","TYNE","TYE","TECHY"];
var matrix = [["Y", "A", "T", "R"], [" P ", "H", "N", "E"] , ["X", "C", "L", "Y"] , ["S", "V", "E", "T"] ];
//var matrix = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "N", "O", "P", "Qu", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//----------------------Homework Part 1----------------------
//-----------------------------------------------------------
//Create a boggle game using the above Dictionary and Matrix

function shuffle() {
  var box = 1;
  for ( box = 1; box < 17; box++ ) {
    var boxG = "S" + box;
    console.log(boxG);
    var letter = matrix[Math.floor(Math.random() * matrix.length)];
    document.getElementById(boxG).innerHTML= letter;
  }
}

//----------------------Homework Part 2----------------------
//-----------------------------------------------------------
//Please describe:
//1) Why it is usually suggested to declare a variable and assign an anonymous function to it.
//2) Why this code is not working:
//a();
//var a = function(){
//console.log("Hi");
//}
