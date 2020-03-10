function myFunction() {
   var message, x;
   message = document.getElementById("message");
   message.innerHTML = "";
   x = document.getElementById("demo").value;
   try {
     if(x == "") throw "is Empty";
     if(isNaN(x)) throw "not a number";
     if(x > 10) throw "too high";
     if(x < 5) throw "too low";
   }
   catch(err) {
     message.innerHTML = "Input " + err;
   }
 }