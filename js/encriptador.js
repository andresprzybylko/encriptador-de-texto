var botonEncriptar = document.querySelector(".botonEncriptar");

var textoSalida = document.querySelector(".textoSalida");

var resultadoEncriptar = botonEncriptar.addEventListener("click", function(event){
    
    event.preventDefault(); 
    var entrada = document.querySelector(".textoEntrada");

    var texto_raw = entrada.value;
    var texto = texto_raw.toLowerCase();
    //console.log("Texto ingresado: " + texto);
    var texto_procesado = "";
    var letras = ["a", "e", "i", "o", "u"];
    var cifrado = ["ai", "enter", "imes", "ober", "ufat"]

    for(var i=0;i < texto.length; i++){
	//console.log("Ahora se procesa la letra: " + texto[i]);	
	if (letras.includes(texto[i])){
        
	    for (var pos = 0; pos < cifrado.length; pos++){
                if (texto[i] == letras[pos] ){
                texto_procesado = texto_procesado + cifrado[pos];
                }
	    }
	}

	else{
            texto_procesado = texto_procesado + texto[i];
        }
	//console.log("Resultados por iteracion de cada letra: " + texto_procesado);	
	
    }
    
    
    textoSalida.value = texto_procesado;

    //console.log("Resultado: " + texto_procesado);

});
