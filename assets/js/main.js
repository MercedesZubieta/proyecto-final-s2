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

function quizOne() {
    var sprint = document.getElementById("sprint-1");
    if (sprint.style.display === 'none') {
        sprint.style.display = 'block';
    } else {
        sprint.style.display = 'none';
    }
}
