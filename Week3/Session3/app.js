var a = 110;
var d = 13;

function b() {
  var d = 5;
  console.log("D:\t",d);
  c();

  function c() {
    console.log("I'm happy and you know it!");
    console.log("A':\t",a);
  }
}

b();
