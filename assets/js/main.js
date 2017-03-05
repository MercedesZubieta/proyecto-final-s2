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

var sprints = document.getElementsByClassName("sprint");
sprints[0].onclick= function quizOne() {
	var divSprint1 = document.getElementById("sprint-1");
	if (divSprint1.style.display == "none" ) {
		divSprint1.style.display = "block";
	} else {
		divSprint1.style.display = "none";
	}
}
sprints[1].onclick= function quizOne() {
	var divSprint2 = document.getElementById("sprint-2");
	if (divSprint2.style.display == "none" ) {
		divSprint2.style.display = "block";
	} else {
		divSprint2.style.display = "none";
	}
}
