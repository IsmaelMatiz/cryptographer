const mainInput = document.getElementById("textField")
const result = document.getElementById("resultEncrypt");

window.onload = () =>{mainInput.focus()}

const isUpperCaseOrSpecialCharacter = (string) => /([A-Z])|([\\\/\(\)\{\}\[\]\!\"\#\$\%\&\=\?\¡\ñ\Ñ])/.test(string)

mainInput.onkeyup = () => {
    if(isUpperCaseOrSpecialCharacter(mainInput.value)){
        alert("no se permiten mayusculas")
    } else{
        result.innerText = mainInput.value
    }
}

