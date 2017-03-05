// DROPDOWN
function myFunction() {
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
// END DROPDOWN

// MOSTRAR/OCULTAR SPRINT 1
var sprints = document.getElementsByClassName("sprint");
sprints[0].onclick= function quizOne() {
	var divSprint1 = document.getElementById("sprint-1");
	if (divSprint1.style.display == "none" ) {
		divSprint1.style.display = "block";
	} else {
		divSprint1.style.display = "none";
	}
}

// MOSTRAR/OCULTAR SPRINT 2
sprints[1].onclick= function quizOne() {
	var divSprint2 = document.getElementById("sprint-2");
	if (divSprint2.style.display == "none" ) {
		divSprint2.style.display = "block";
	} else {
		divSprint2.style.display = "none";
	}
}

//CORRECCION DE QUIZ SPRINT 1
var opcionesQuiz1= document.getElementsByClassName("quiz-1");
var contenedorQuiz1 = document.getElementById("contenedor-quiz1")
document.getElementById("enviar-sprint1").onclick=function(){
	var contadador = 0;
	if(opcionesQuiz1[0].checked){
		contadador++
	}
	if(opcionesQuiz1[4].checked){
		contadador++
	}
	if(opcionesQuiz1[8].checked){
		contadador++
	}
	contenedorQuiz1.innerHTML = "<p class='resultado-quiz'>Tienes " + contadador + " correctas"
}

//CORRECCION DE QUIZ SPRINT 1
var opcionesQuiz2= document.getElementsByClassName("quiz-2");
var contenedorQuiz2 = document.getElementById("contenedor-quiz2")
document.getElementById("enviar-sprint2").onclick=function(){
	var contadador = 0;
	if(opcionesQuiz2[1].checked){
		contadador++
	}
	if(opcionesQuiz2[3].checked){
		contadador++
	}
	if(opcionesQuiz2[7].checked){
		contadador++
	}
	contenedorQuiz2.innerHTML = "<p class='resultado-quiz'>Tienes " + contadador + " correctas"
}
