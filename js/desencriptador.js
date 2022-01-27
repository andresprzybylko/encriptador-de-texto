var botonDesencriptar = document.querySelector(".botonDesencriptar");
var textoSalida = document.querySelector(".textoSalida");
var texto = "";
var texto_procesado = "";

botonDesencriptar.addEventListener("click", function(event){
    
    event.preventDefault(); 
    var entrada = document.querySelector(".textoEntrada");
    var texto_raw = entrada.value;
    var texto = texto_raw.toLowerCase();
    console.log("Texto ingresado: " + texto);

    var letras = ["a", "e", "i", "o", "u"];
    var cifrado = ["ai", "enter", "imes", "ober", "ufat"]

    for(var i = 0; i < cifrado.length; i++){

	console.log("buscando... " + cifrado[i]);
	console.log("reemplazando con... " + letras[i]);

	texto_procesado = texto.replaceAll(cifrado[i], letras[i]);
	texto = texto_procesado;
        console.log("Resultados parciales: " + texto_procesado);
    }
    console.log("Resultado: " + texto_procesado);
    textoSalida.value = texto_procesado;
});
