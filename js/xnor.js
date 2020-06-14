var rating = 5;
var count=0;
function clickCounter() {
	document.getElementById("try-again").style.display="none";
	count++;
	rating--;
	console.log(count);
	console.log(rating);
	show();
}
var ans;
function myid(id){
ans=id;
}
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev)
 {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  if(ans==='drag3'){
	  document.getElementById("try-again").style.display="none";
 var x = document.createElement("A");
  var t = document.createTextNode("NEXT");
  x.setAttribute("href","xnor2.html");
  x.appendChild(t);
  document.getElementById("y").appendChild(x);
 document.getElementById("p1").innerHTML="Congrats!! Right Answer----&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Your rating after "+(count+1)+ " attempt is "+rating+"&nbsp" 
  }
  else
  {
	  document.getElementById("try-again").style.display="block";
 document.getElementById("p1").innerHTML="Try Again!! Wrong Answer"
  }
}

window.onload = function(e){
	show();
}

function show(){
	var container = document.getElementById("container");
	container.innerHTML = '<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>\
	<div>\
		<img id="drag1" src="images/xor.gif" width="100px" height="60px" draggable="true" ondragstart="drag(event);myid(this.id);" width="336" height="69">\
		<img id="drag2" src="images/nor.gif" width="100px" height="60px" draggable="true" ondragstart="drag(event);myid(this.id);" width="336" height="69">\
		<img id="drag3" src="images/xnor.gif" width="100px" height="60px" draggable="true" ondragstart="drag(event);myid(this.id);" width="336" height="69">\
		<img id="drag4" src="images/nand.gif" width="100px" height="60px" draggable="true" ondragstart="drag(event);myid(this.id);" width="336" height="69">\
	</div>';
}
