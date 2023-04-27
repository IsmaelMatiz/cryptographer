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

mainInput.oninput = transcrypt


mainInput.onpaste = (event)=>{
    const inputText = event.clipboardData.getData('text');
    
    setTimeout(() => {
        deleteResult()
        pastEncrypter(inputText);
}, 10)}


function transcrypt(){
    
    inEncrypter(mainInput.value)
}

function inEncrypter(inputText){
    if(isUpperCaseOrSpecialCharacter( inputText)){//Verificar mayusculas o caracteres especiales
        alert("no se permiten mayusculas o caracteres especiales")
    } else{
        if(encryptOrDecrypt.value === "Encrypt"){//hacer switch entre encriptar y desencriptar, lo que elija el usuario
            lastCharacter = inputText.split('')[inputText.length -1]
            for(let vocal in encryptKey){
                if(lastCharacter === vocal){//encriptar las vocales
                    result.innerText += encryptKey[vocal]
                    vocalYes = true
                    break
                }
            }
            if(!vocalYes)result.innerText += lastCharacter//agregar palabras normales
            vocalYes = false
            if(lastCharacter === " ")result.innerText += '‍‍‍‍‍ㅤ'//agregar espacios

        }else{
            lastCharacter = inputText.split('')[inputText.length -1]
            result.innerText += lastCharacter
            if(lastCharacter === " ")result.innerText += '‍‍‍‍‍ㅤ'//agregar espacios
            for(let vocal in encryptKey){
                result.innerText = result.innerText.replace(encryptKey[vocal],vocal)
            }
        }
        console.log()
    }
}


function pastEncrypter(inputText){
    if(isUpperCaseOrSpecialCharacter( inputText)){//Verificar mayusculas o caracteres especiales
        alert("no se permiten mayusculas o caracteres especiales")
    } else{
        if(encryptOrDecrypt.value === "Encrypt"){//hacer switch entre encriptar y desencriptar, lo que elija el usuario
            for (let letter in inputText) {
                let eachLetter = inputText[letter]
                for(let vocal in encryptKey){
                    if(eachLetter === vocal){//encriptar las vocales
                        result.innerText += encryptKey[vocal]
                        vocalYes = true
                        break
                    }
                }
                if(!vocalYes)result.innerText += eachLetter//agregar palabras normales
                vocalYes = false
                if(eachLetter === " ")result.innerText += '‍‍‍‍‍ㅤ'//agregar espacios
                
            }
        }else{
            for (let letter in inputText) {
                let eachLetter = inputText[letter]
                result.innerText += eachLetter//agregar palabras normales
                vocalYes = false
                if(eachLetter === " ")result.innerText += '‍‍‍‍‍ㅤ'//agregar espacios             
            }

            //TODO: arreglar problema con la o
            let replaceResult = result.innerText + ""
            console.log("antes del for: "+replaceResult)
            for (const vocal in encryptKey) {
                console.log(encryptKey[vocal]+" vs "+vocal)
                replaceResult = replaceResult.replace(encryptKey[vocal],vocal)    
            }
            
            result.innerText = replaceResult
            console.log("pero q ha pasao: "+replaceResult)
        }
    }

}



function deleteResult(){
    result.innerText = ""
}

//TODO: hacer funcion para copiar el texto
