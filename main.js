function calcular()
{
	var n = document.getElementById("n").value;
	var talking = document.getElementById("talking");
    var noTalking = document.getElementById("noTalking");
	var salida = document.getElementById("salida");
	if (7<n<20 && talking.checked){
		salida.innerHTML = "Estas en Problemas!" ;
	}
	else{
		salida.innerHTML = "Calma, no te encuentras en problemas" ;
	}
}