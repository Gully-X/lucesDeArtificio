

var botonDesencriptar = document.querySelector("#decodificar");

botonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();
    
    //recuperar el dato ingresado en el 'input'
    var form = document.querySelector("#formTexto");
    var frase = form.txt.value;
    desencriptar(frase);

});

var botonEncriptar = document.querySelector(("#codificar"));

botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();

    var form = document.querySelector("#formTexto");
    var frase = form.txt.value;
    encriptar(frase);
});

//declarar variables
var vocalesCripto = ["enter","imes","ai","ober","ufat"];
var vocalesNaturales = ["e","i","a","o","u"]; 
var nuevaPalabra=""; //variable auxiliar usada en el loop.


function desencriptar(aux){
    for (var y = 0; y < vocalesCripto.length; y++) {
                   
        neoFrase = aux.replaceAll(vocalesCripto[y],vocalesNaturales[y]);
        aux = neoFrase;

    }
    mostrarMensaje(neoFrase); //invoca la funcion para mostrar el msj encriptado
}

function encriptar(frase){
    
    var arrayPalabra = Array.from(frase);

    for (var y=0; y < arrayPalabra.length; y++) {

            for (var x=0; x < vocalesNaturales.length; x++){

                 if (arrayPalabra[y]==vocalesNaturales[x]){
                      arrayPalabra[y]=vocalesCripto[x];

                }else {
                        arrayPalabra[y] = arrayPalabra[y];
                }
            }
        nuevaPalabra=nuevaPalabra + arrayPalabra[y];
    } 
     
    mostrarMensaje(nuevaPalabra) //invoca la funcion para mostrar el msj encriptado
}


function mostrarMensaje(phrase){
    
    var mensaje = document.querySelector("#txt");  
     mensaje.textContent=phrase;

}



