var array = [ { nombre : "Meche", apellido : "Zubieta",  promocion : "1era. promoción", estado : "Trabajando" },
			 { nombre : "Arabela", apellido : "Rojas", promocion : "2da. promoción", estado : "Trabajando" },
			 { nombre : "Maria", apellido : "Rosán",  promocion : "2da. promoción", estado : "Trabajando" },
			 { nombre : "Guadalupe", apellido : "Racio",  promocion : "3era. promoción", estado : "Trabajando" },
			 { nombre : "Sara", apellido : "Casa",  promocion : "3era. promoción", estado : "Trabajando" },
			 { nombre : "Daniella", apellido : "Durán",  promocion : "4ta. promoción", estado : "Trabajando" },
			 { nombre : "Michelle", apellido : "Seguil",  promocion : "5ta. promoción", estado : "Trabajando" },
			 { nombre : "Diana", apellido : "Navarro",  promocion : "5ta. promoción", estado : "Trabajando" } ];
var mostrar = "";
array.forEach(function(e){
	mostrar += "<div class='div-coder'><p>Nombre: "+e.nombre+"</p>"+
		"<p>Apellido: "+e.apellido+"</p>"+
		"<p>Promoción: "+e.promocion+"</p>"+
		"<p>Estado: "+e.estado+"</p></div>";
});
document.getElementById("resultado").innerHTML=mostrar;
document.getElementById("volver-inicio").onclick=function(){
	window.location="index.html"
}
