const textarea=document.querySelector(".textarea")
const mensaje=document.querySelector(".textarea_msg")

document.querySelector(".copiar").addEventListener('click',()=>{
    copiartexto(mensaje);
}
    )

function btnencriptar(){
    const texto_encriptado = encriptar(textarea.value)
    mensaje.value = texto_encriptado;
}
function encriptar(stringencriptado){
    console.log(stringencriptado)
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringencriptado = stringencriptado.toLowerCase()

    for(let i=0; i<matrizCodigo.length;i++){
        if(stringencriptado.includes(matrizCodigo[i][0])){
                stringencriptado=stringencriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringencriptado
}
function btndesencriptar(){
    const texto_encriptado = desencriptar(textarea.value)
    mensaje.value = texto_encriptado;
}
function desencriptar(stringencriptado){
    console.log(stringencriptado)
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringencriptado = stringencriptado.toLowerCase()

    for(let i=0; i<matrizCodigo.length;i++){
        if(stringencriptado.includes(matrizCodigo[i][1])){
                stringencriptado=stringencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringencriptado
}
function copiartexto(mensaje){
    mensaje.select();
    mensaje.setSelectionRange(0,9999);
    document.execCommand('copy');

 
}