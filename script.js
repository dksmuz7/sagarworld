function openForm() {
	document.getElementById("login").style.display = "block";
}

function closeForm() {
	document.getElementById("login").style.display = "none";
}

function openForm2() {
	document.getElementById("form2").style.display = "block";
}

function closeForm2() {
	document.getElementById("form2").style.display = "none";
}

var btn=document.querySelector(".btn")
btn.addEventListener("click", function (){
	location.reload(true)
})

var btns=document.querySelector(".btns")
btns.addEventListener("click", function (){
	location.reload(true)
})

function scrollToLesson() {
  var elmnt = document.getElementById("lesson");
  elmnt.scrollIntoView();
}