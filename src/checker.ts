//Victor Martinez Roman A01746361

//Creamos funcion isPalindrome con argumento text de tipo string
function isPalindrome(text: string) {

    //Convertimos el texto en un array
    const arrayText = text.split('');

    //Volteamos el array y obtenemos la palabra invertida
    const arrayReversa = arrayText.reverse();
    
    //Convertimos el array invertido en un string
    const textReversa = arrayReversa.join('');

    //Comprueba si el texto es igual al string invertido
    if(text == textReversa) {
        return true;
    }
    else {
        return false;
    }
}

export default isPalindrome;
