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
//Selectores de las partes mas importantes del sitio
const mainInput = document.getElementById("textField")
const result = document.getElementById("resultEncrypt");
const encryptOrDecrypt = document.getElementById("userChoose");
var lastCharacter = "";
var vocalYes = false

//hace q el cursos se posicione automaticamente en el input
window.onload = () =>{mainInput.focus()}

//la primera regex que hago para validar texto
const isUpperCaseOrSpecialCharacter = (string) => /([A-Z])|([\\\/\(\)\{\}\[\]\!\"\#\$\%\&\=\?\¡\ñ\Ñ])/.test(string)

mainInput.oninput = transcrypt//esto llama al transcrrypt el lla al inEncrupter y encripta o decripta cada q se escribe algo


mainInput.onpaste = (event)=>{
    const inputText = event.clipboardData.getData('text');
    //para asegurar un buen resultado primero borro lo que haya y ahi si lo pego
    //el time out es pq a veces no se copiaba bien el texto en el input asi q le doy 10 milisegundos para q se obtenga bien la info
    setTimeout(() => {
        deleteResult()
        pastEncrypter(inputText);
}, 10)}

//Debido algunos problemas preferi no llamar la funcion inEcrypt directamente y mejor lo hago a traves de esta otra funcion
//innecesario tal vez pero funciona
function transcrypt(){    
    inEncrypter(mainInput.value)
}

//Esta funcion encripta o desencripta texto cuando se escribe en el input
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

//Esta funcion encripta o desencripta texto cuando se pega en el input
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

            let replaceResult = result.innerText + ""
            console.log("antes del for: "+replaceResult)
            for (let vocal in encryptKey) {
                console.log(encryptKey[vocal]+" vs "+vocal)
                replaceResult = replaceResult.replaceAll(encryptKey[vocal],vocal)    
            }
            replaceResult = replaceResult.replaceAll(encryptKey["o"],"o")
            console.log("pero q ha pasao: "+replaceResult)
            result.innerText = replaceResult
            
        }
    }

}

//Esta funcion limpia el area de resultado
function deleteResult(){
    result.innerText = ""
}

//Esta funcion guarda el texto en el clipboard
function copyText() {
    alert("Texto copiado")
    navigator.clipboard.writeText(result.innerText);
}
