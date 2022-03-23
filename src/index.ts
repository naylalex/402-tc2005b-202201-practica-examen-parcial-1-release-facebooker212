//Victor Martinez Roman A01746361

//Importa funciones y estilos css
import isPalindrome from './checker';  
import './style.css';

//Asigna a variable el elemento button con ID "button"
let button = <HTMLElement>document.body.querySelector("button");

//Comprobamos la existencia de button y agregamos un listener
if (button) {
	button.addEventListener("click", buttonSubmitClick);
}

//Si se da click executa la siguiente funcion
function buttonSubmitClick() {

	//Asigna el texto introducido a la variable "texto"
	var texto = (<HTMLInputElement>document.getElementById("inputText"))
	
	//Asigna a la variable "result" el resultado de ejecutar la funcion "isPalindrome"
	let result = isPalindrome(texto.value)
	
	//Asignamos el elemento div con ID "divResult a la variable "resultadoDiv"
	let resultadoDiv = (<HTMLDivElement>document.getElementById("divResult"))
	
	//Condicional por si isPalindrome nos da "true"
	if (result == true) {
		//Actualiza el div para indicar que es palindromo y aplica estilo css
		resultadoDiv.innerHTML = "The word is palindrome!"	
		resultadoDiv.className = "palindrome"
	}
	else {
		//Actualiza el div para indicar que no es palindromo y aplica estilo css
		resultadoDiv.innerHTML = "The word is not palindrome"
		resultadoDiv.className = "notPalindrome"
	}
}
