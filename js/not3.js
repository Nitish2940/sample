function fn()
	{
	 var a=parseInt(document.getElementById("t1").value);
	 var b=parseInt(document.getElementById("t2").value);
     
	if(a==1&&b==0)
	{ 
document.getElementById("p2").innerHTML="Congrats!! Right Answer"
	var x = document.createElement("A");
  var t = document.createTextNode("NEXT");
  x.setAttribute("href","last.html");
  x.appendChild(t);
  document.getElementById("b1").appendChild(x);
document.getElementById("p1").innerHTML="Congrats!! Right Answer"
 }
 else
  {
	 document.getElementById("p1").innerHTML="Try Again!! Wrong Answer"
	 
  }
}
