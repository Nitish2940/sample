    function greatest()
        {
            var a = parseInt(document.getElementById("t1").value);
           
            if (a===1) {
				var x = document.createElement("A");
  var t = document.createTextNode("NEXT");
  x.setAttribute("href","not3.html");
  x.appendChild(t);
  document.getElementById("b1").appendChild(x);
                document.getElementById("demo").innerHTML="Congrats!!!  Right Answer";
            }
            else {
                document.getElementById("demo").innerHTML="Try Again!!! Wrong Answer";
            }
        }
    