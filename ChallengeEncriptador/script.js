/*las vocales tienen que cambiar con:
La letra "a" es convertida para "ai"
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
//resivimos las palabras que estan escritas asiendo el uso de sus clases
const textIngr = document.querySelector(".PalIngre");
const Res = document.querySelector(".Res");
const copia = document.querySelector(".copiar");
//hacemos qeu el boton copiar no aparesca
copia.style.display = "none";
//funcion para validar si se escribio una palabra en minusculas y sin acentos
function validarTexto(){
    let textoEscrito = document.querySelector(".PalIngre").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        //mandamos un mensaje si no se escribio una palabra permitida
        alert("Solo son permitidas letras minúsculas y sin acentos");
        location.reload();
        return true;
    }
}
//funcion para caundo se preciona el  boton escriptar valida si fue escrito un texto valido
function btnEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(textIngr.value);
        Res.value = textoEncriptado;
        Res.style.backgroundImage = "none";
        textIngr.value = "";
        copia.style.display = "block";
    }
}
//funcion que encripta la palabra que fue introducida
function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}
//funcion desencriptar desencripta la palabra encriptada y mestra 
function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}
//funcion para el boton desencriptar 
function btnDesencriptar(){
    const textoEncriptado = desencriptar(textIngr.value)
    Res.value = textoEncriptado
    textIngr.value = "";
}
//fucnion copiar que es agregada al boton copiar para qeu pueda realisar la copia de la palabra encriptada o la palabra desencriptada
function copiar(){
    Res.select();
    navigator.clipboard.writeText(Res.value)
    Res.value = "";
    alert("Texto Copiado")
}



