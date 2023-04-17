/**
 * La letra "e" es convertida para "enter"
 * La letra "i" es convertida para "imes"
 * La letra "a" es convertida para "ai"
 * La letra "o" es convertida para "ober"
 * La letra "u" es convertida para "ufat"
 */
const encryptKey ={
    "a" : "ai",
    "e" : "enter",
    "i" : "imes",
    "o" : "ober",
    "u" : "ufat"
}
const mainInput = document.getElementById("textField")
const result = document.getElementById("resultEncrypt");
const encryptOrDecrypt = document.getElementById("userChoose");
var lastCharacter = "";
var vocalYes = false

window.onload = () =>{mainInput.focus()}

const isUpperCaseOrSpecialCharacter = (string) => /([A-Z])|([\\\/\(\)\{\}\[\]\!\"\#\$\%\&\=\?\¡\ñ\Ñ])/.test(string)



mainInput.onkeyup = encrypter
mainInput.onpaste = addEventListener('paste',(event)=>{
    console.log(event.clipboardData.getData('text'))
})
//TODO: usar el texto pegado en el clipboard para desencryptarlo

//TODO: probablemente reestructurar la funcion para pasar el texto como parametro
function encrypter(){
    if(isUpperCaseOrSpecialCharacter(mainInput.value)){
        alert("no se permiten mayusculas o caracteres especiales")
    } else{
        if(encryptOrDecrypt.value === "Encrypt"){
            lastCharacter = mainInput.value.split('')[mainInput.value.length -1]
            for(let i = 0;i < Object.keys(encryptKey).length;i++){
                if(lastCharacter === Object.keys(encryptKey)[i]){
                    result.innerText += encryptKey[Object.keys(encryptKey)[i]]
                    vocalYes = true
                    break
                }
            }
            if(!vocalYes) {
                result.innerText += lastCharacter
            }
            vocalYes = false
            if(lastCharacter === " "){
                console.log("Espaciooo")
                result.innerText += '‍‍‍‍‍ㅤ'
            }

        }else{
        }
        console.log()
    }
}

function deleteResult(){
    console.log("BORRRAAAAARRRR")
    result.innerText = ""
}

