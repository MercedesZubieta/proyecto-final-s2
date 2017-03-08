//BIENVENIDA A CODER
var nombreCoder = document.getElementById("nombre-coder")
if(localStorage.getItem("coder")){
	nombreCoder.innerText=localStorage.getItem("coder");
}
else{
	localStorage.setItem("coder",prompt("hola coder, ¿Cuál es tu nombre?"));
	nombreCoder.innerText=localStorage.getItem("coder");
}


// DROPDOWN
function dropdown() {
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}


// MOSTRAR/OCULTAR SPRINTS
var s1 = document.getElementById("sprint-1");
var s2 = document.getElementById("sprint-2");
var s3 = document.getElementById("sprint-3");
var sprints = document.getElementsByClassName("sprint");

function mostrar(elemVisible) {
	elemVisible.style.display = "block";
}
function ocultar(elemOculto1,elemOculto2) {
	elemOculto1.style.display = "none";
	elemOculto2.style.display = "none";
}

sprints[0].onclick= function(){
	mostrar(s1);
	ocultar(s2,s3);
}
sprints[1].onclick= function(){
	mostrar(s2);
	ocultar(s1,s3);
}
sprints[2].onclick= function(){
	mostrar(s3);
	ocultar(s1,s2);
}


//CORRECCION DE QUIZ SPRINT 1
var opcionesQuiz1= document.getElementsByClassName("quiz-1");
var contenedorQuiz1 = document.getElementById("contenedor-quiz1")
document.getElementById("enviar-sprint1").onclick=function(){
	var contestadas = 0;

	console.log(opcionesQuiz1)
	for(var i =0;i<9;i++){
		if(opcionesQuiz1[i].checked==true){
			contestadas++
		}
	}
	console.log(contestadas)
	if(contestadas==3){
		var correctas = 0;
		if(opcionesQuiz1[0].checked){
			correctas++
		}
		if(opcionesQuiz1[4].checked){
			correctas++
		}
		if(opcionesQuiz1[8].checked){
			correctas++
		}
		contenedorQuiz1.innerHTML = "<p class='resultado-quiz'>Tienes " + correctas + " correctas";
	}
	else{
		alert("Todas las preguntas son obligatorias")
	}
}


//CORRECCION DE QUIZ SPRINT 1
var opcionesQuiz2= document.getElementsByClassName("quiz-2");
var contenedorQuiz2 = document.getElementById("contenedor-quiz2")
document.getElementById("enviar-sprint2").onclick=function(){
	var contestadas = 0;
	for(var i =0;i<9;i++){
		if(opcionesQuiz2[i].checked==true){
			contestadas++
		}
	}
	if(contestadas==3){
		var correctas = 0;
		if(opcionesQuiz2[1].checked){
			correctas++
		}
		if(opcionesQuiz2[3].checked){
			correctas++
		}
		if(opcionesQuiz2[7].checked){
			correctas++
		}
		contenedorQuiz2.innerHTML = "<p class='resultado-quiz'>Tienes " + correctas + " correctas";
	}
	else{
		alert("Todas las preguntas son obligatorias")
	}

}
