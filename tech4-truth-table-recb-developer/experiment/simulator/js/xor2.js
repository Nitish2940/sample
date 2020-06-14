    function greatest()
        {
            var a = parseInt(document.getElementById("t1").value);
           
            if (a===0) {
			var x = document.createElement("A");
  var t = document.createTextNode("CLICK TO NEXT QUESTION");
  x.setAttribute("href","file:///C:/Users/Abhi/Desktop/Simulator/xor3.html");
  x.appendChild(t);
  document.body.appendChild(x);
 
                document.getElementById("demo").innerHTML="Congrats!!!  Right Answer";
            }
            else {
                document.getElementById("demo").innerHTML="Try Again!!! Wrong Answer";
            }
        }
    