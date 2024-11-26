let orden_correcto = ['when', 'while', 'when', 'while'];

let palabras_juego = [ 'while','when','when','while'];

let contenedorOpciones = document.getElementById("opciones");

let comprobar = document.getElementById("comprobar");

let txtResultado = document.getElementById("resultado");

let posDisponible = ["","","","",];

function agregaOpciones(){
palabras_juego.forEach(Element => {
let div = document.createElement("div")
div.className = "palabra";
div.innerHTML = Element;
div.setAttribute("onclick", "completar(this)");
contenedorOpciones.appendChild(div);
});
}

agregarOpciones();

function agregarEliminarAspan(){
var spans = document.getElementsByTagName("span");
for(let i=0; i < spans.lenght; i++){
    spans[i].setAttribute("onclick", "remove(this)");
}
}
agregarEliminarAspan();

function completar(palabra){
let posLibre = posDisponible.indexOf("");
document.getElementById(posLibre).innerHTML = palabra.
innerHTML;
posDisponible[posLibre] = palabra.innerHTML;
contenedorOpciones.removeChild(palabra);
}

function remove(palabra){
    if(palabra.innerHTML!=""){
        let div = document.createElement("div");
        div.className = "palabra";
        div.innerHTML = palabra.innerHTML;
        div.setAttribute("onclick", "completar(this)");
        contenedorOpciones.appendChild(div);

        palabra.innerHTML = "";
        posDisponible[palabra.id] = "";

        document.getElementById(palabra.id).style.background = 
        "#ccc";

        txtResultado.innerHTML = "";
    }
}

comprobar.onclick = function(){
    let posLibre = posDisponible.indexOf("");
    let totalAciertos = 0;

    if(poslibre==-1){
        for(i=0; i <orden_correcto.length;i++){
            if(orden_correcto[i]==posDisponible[i]){
                document.getElementById(i).style.background =
                "#c0ff33";
            }else{
                document.getElementById(i).style.background =
                "#fb4b4b";
            }
        }

        if(totalAciertos==orden_correcto.length){
            txtResultado.innerHTML = "¡Muy bien!";
        }else{
            txtResultado.innerHTML = "¡Tienes errores!";
        }
    }else{
        alert("Completa los espacios faltantes");
    }
}
