const textbox = document.querySelector(".textbox");
const outputbox = document.querySelector(".outputbox");

const btnCriptografar = document.getElementById("criptografar");
const btnDescriptografar = document.getElementById("descriptografar");
const btnCopiar = document.getElementById("copiar");
/*função que criptografar as informações coletadas do index*/

function criptografar(){
    clearWaiting();
//Captura o entrada de texto na textbox e converte todos os caracteres para minúsculas
    var texto = textbox.value.toLowerCase();
//Substitui os valores relacionados a baixo por seus modelos criptografados com .replace
    var textCrypto = texto.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

    outputbox.value = textCrypto;
}

function descriptografar(){
    clearWaiting();
    var textCrypto = textbox.value;
    var texto = textCrypto.replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

    outputbox.value = texto;
}

function copiar(){
    var textCopy = document.querySelector(".outputbox");
    textCopy.select();
    document.execCommand('copy');
    alert("O texto foi copiado com sucesso.\n A página será recarregada.");
//  Recarrega a página ao clicar no botão copiar
    document.location.reload(true);
}

//limpar as caixas de texto para receber novar informações
/*function clear(){
    outputbox.value = " ";
    textbox.value = " ";    
}*/
// Limpa a figura da caixa de espera de retorno do texto
function clearWaiting(){
    document.getElementById("waiting").style.opacity = 0.0;
}

//Botões de acionamento para as respectivas funções
btnCriptografar.onclick = criptografar;
btnDescriptografar.onclick = descriptografar;
btnCopiar.onclick = copiar;
