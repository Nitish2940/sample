function fn()
	{
	 var a=parseInt(document.getElementById("t1").value);
	 var b=parseInt(document.getElementById("t2").value);
     var c=parseInt(document.getElementById("t3").value);
     var d=parseInt(document.getElementById("t4").value);
	if(a==0&&b==1&&c==1&&d==0)
	{ 
document.getElementById("p1").innerHTML="Congrats!! Right Answer"
 }
 else
  {
	 document.getElementById("p1").innerHTML="Try Again!! Wrong Answer"
	 
  }
}
function fn1()
	{
	 var a=parseInt(document.getElementById("t1").value);
	 var b=parseInt(document.getElementById("t2").value);
     var c=parseInt(document.getElementById("t3").value);
     var d=parseInt(document.getElementById("t4").value);
	 var e=parseInt(document.getElementById("t5").value);
	 var f=parseInt(document.getElementById("t6").value);
     var g=parseInt(document.getElementById("t7").value);
     var h=parseInt(document.getElementById("t8").value);
	 
	if(a==0&&b==1&&c==1&&d==0&&e==1&&f==0&&g==0&&h==1)
	{ 
 
document.getElementById("p2").innerHTML="Congrats!! Right Answer"
	var x = document.createElement("A");
  var t = document.createTextNode("CLICK TO NEXT QUESTION");
  x.setAttribute("href","last.html");
  x.appendChild(t);
  document.body.appendChild(x);
 
 }
 else
  {
	 document.getElementById("p2").innerHTML="Try Again!! Wrong Answer"
	 
  }
}