/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
    // Esta función recibe un nombre (string).
    // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
    // [Ejemplo]: "mario" ----> "Mario".
    // Tu código:

    return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}

function invocarCallback(cb) {
    // Invoca/ejecuta el callback `cb`.
    // [NOTA]: no debes retornar nada.
    // Tu código:
    cb();
}

function operacionMatematica(num1, num2, cb) {
    // En este ejercicio recibirás dos números y un callback.
    // El callback realiza una operación matemática, por lo que necesita de los dos números.
    // Retorna el resultado del callback pasándole como parámetros los números.
    // Tu código:
    return cb(num1, num2);
}

function sumarArray(arrayOfNumbers, cb) {
    // Recibes un arreglo de números y un callback.
    // Suma todos los números del arreglo.
    // Este resultado debes pasárselo como argumento al callback recibido.
    // [NOTA]: no debes retornar nada.
    // Tu código:

    //creo una variable sum para acumular la suma, inicializo en 0
    var sum = 0;
    // con un bucle for recorro el arreglo y voy sumando i a sum
    for (var i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
    }
    // llamo al callback y le paso sum como argumento.
    cb(sum);

}

function forEach(array, cb) {
    // Recibes un arreglo y un callback.
    // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
    // Debes pasarle el elemento como argumento al callback.
    // Tu código:
    //inicializo elemento, aunque en JS no es necesario, pero el código queda más claro
    var elemento;
    //itero sobre el array con forEach y creo una función a la que le paso como argumento elemento
    array.forEach(function(elemento) {
        // el cb recibe como parámetro elemento
        cb(elemento);
    });

}

function map(array, cb) {
    // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
    // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
    // Retorna el nuevo arreglo.
    // Tu código:

    //inicializo elemento, aunque en JS no es necesario, pero el código queda más claro
    var elemento;
    //inicializo un newArray sin elementos
    var newArray = [];
    //recorro el array que viene por argumento con un forEach, creo una función a la que le paso elemento
    array.forEach(function(elemento) {
        //con el método push, le agrego al newArray el elemento pasado por el cb
        newArray.push(cb(elemento)); // Llama al callback y agrega el resultado al nuevo arreglo.
    });
    //retorno el newArray
    return newArray;

    /* Con el método map puedo hacer lo mismo en una sola línea
    return array.map(cb);
   */
}

function filter(arrayOfStrings) {
    // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
    // Luego retorna un nuevo arreglo con estos elementos.
    // Tu código:
    /*
      
    Esta forma es más antigua, creo una variable con un array vacío, recorro el arrayOfString con un 
    ciclo for normal, y con un if reviso si en la posición [i] la primera letra [0] es a o A, si cumple 
    con la condición, con el método push se ingresa el String al newArray

    var newArray = [];

        for (var i = 0; i < arrayOfStrings.length; i++) {
          if (arrayOfStrings[i][0] === "a" || arrayOfStrings[i][0] === "A") {
            newArray.push(arrayOfStrings[i]);
          }
        }
      
        return newArray;
    */

    /*
    retorno el método filter del arrayOfString, donde se crea un nuevo array solo con los elementos 
    que tienen a o A, que se retornaron en la function
    */
    return arrayOfStrings.filter(function(elemento) {
        return elemento[0] === "a" || elemento[0] === "A";
    });


}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
    mayuscula,
    invocarCallback,
    operacionMatematica,
    sumarArray,
    forEach,
    map,
    filter,
};