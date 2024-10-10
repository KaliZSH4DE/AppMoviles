//Funcion para extraer los valores de los botones presionados
function appendToDisplay(value){
    document.getElementById('display').value += value; //Extrae el valor del button para mostrarlo en el id = display
}

//Funcion para eliminar todo el valor del id display
function clearDisplay(){
    document.getElementById('display').value = ''; //Cambia el valor del id display por " "
}

//Funcion para eliminar el ultimo digito
function deleteLast(){
    let displayValue = document.getElementById('display').value; //Extrae el valor del id display y lo guarda en la variable displayValue
    document.getElementById('display').value = displayValue.slice(0, -1); //Cambia el valor del display y elimina el ultimo digito escrito
}

//Funcion para calcular el resultado
function calculateResult(){ 
    //Usa el try catch para el manejo de errores
    try{
        let result = eval(document.getElementById('display').value); //Extrae todo el valor del id display y lo guarda en una variable result donde se ejecutan las opercaciones
        document.getElementById('display').value = result; //Cambia el valor del id display por el resultado de las operaciones guardadas en la variable result


    } catch(error){
        alert('Expresion invalida'); //Manda una alerta del navegador con el texto "Expresion invalida" en caso de que haya un error
    }

}