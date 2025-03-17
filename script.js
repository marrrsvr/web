//arreglo que contiene las respuestas correctas
let correctas = [2,3,2,3,1,1,2,2,1,2];
// arreglo donde se guardan las respuestas del usuario
let opcion_elegida=[];

let cantidad_correctas=0;

//funcion que toma el num de pregunta y el input elegido de esa pregunta
function respuesta(num_pregunta, selecionada){
    //guardo la respuesta elegida
    opcion_elegida[num_pregunta]=selecionada.value;
    //el siguiente codigo es para poner de color blanco
    //el fondo de los inputs para cuando elige otra opcion
    //armo el id para seleccionar el section correspondiente
    id="p" + num_pregunta;

    labels=document.getElementById(id).childNodes;
    labels[3].style.backgroundcolor="white";
    labels[5].style.backgroundcolor="white";
    labels[7].style.backgroundcolor="white";

    //doy el color a label seleccionado
    selecionada.paretNode.style.backgroundcolor="#cec0fc";
}

//funcion que compara los arreglos para saber cuantas estuvieron correctas
function corregir(){
    cantidad_correctas=0;
    for (i=0; i< correctas.length;i++){
        if(correctas[i]==opcion_elegida[i]){
            cantidad_correctas++;
        }
    }
    document.getElementById("resultado").innerHTML=cantidad_correctas;
}
