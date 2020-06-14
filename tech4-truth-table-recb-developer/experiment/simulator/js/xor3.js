function fn()
	{
	 var a=parseInt(document.getElementById("t1").value);
	 var b=parseInt(document.getElementById("t2").value);
     var c=parseInt(document.getElementById("t3").value);
     var d=parseInt(document.getElementById("t4").value);
	if(a==0&&b==1&&c==1&&d==0)
	{ 
 var x = document.createElement("A");
  var t = document.createTextNode("CLICK TO NEXT");
  x.setAttribute("href","file:///C:/Users/Abhi/Desktop/Simulator/index.html");
  x.appendChild(t);
  document.body.appendChild(x);
alert("Right answer");
 }
 else
  {
	  alert(" Wrong Answer");
  }
}