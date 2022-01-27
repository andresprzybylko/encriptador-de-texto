var textoSalida = document.querySelector(".textoSalida");
var botonCopiar = document.querySelector(".botonCopiar");

botonCopiar.addEventListener("click", function(event){
    
    event.preventDefault(); 
    var textoSalida = document.querySelector(".textoSalida");
    var textoCapturado = textoSalida.value;

    navigator.clipboard.writeText(textoCapturado);
     
    alert("Texto copiado en papelera: " + textoCapturado);

    var textoEntrada = document.querySelector(".textoEntrada");
    textoEntrada.value = "";
    textoSalida.value = "";

});

