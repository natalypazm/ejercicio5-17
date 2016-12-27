function calcular()
{
	var n = document.getElementById("n").value;
	var salida = document.getElementById("salida");
	if (n<7 || n>20){
		salida.innerHTML = "Estas en Problemas!" ;
	}
	else{
		salida.innerHTML = "Calma, no te encuentras en problemas" ;
	}
}