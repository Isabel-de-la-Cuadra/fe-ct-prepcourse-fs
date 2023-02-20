/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
    // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
    // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
    // Estos elementos debe ser cada par clave:valor del objeto recibido.
    // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
    // Tu código:

    /* 
puedo usar también el método Object.keys() para obtener las claves del objeto y luego iterar con un 
for normal y acceder a los valores.
Acá un ejemplo con impresión en consola, sin retorno
var claves = Object.keys(objeto);

for (var i = 0; i < claves.length; i++) {
  var clave = claves[i];
  console.log(clave + ": " + objeto[clave]);
}

*/

    // crear un arreglo vacío para almacenar los subarreglos
    var resultado = [];

    // iterar sobre las claves del objeto con un for-in
    for (var clave in objeto) {
        // crears un nuevo subarreglo con la clave y su valor correspondiente
        var subarreglo = [clave, objeto[clave]];
        // añadir el subarreglo al resultado con el método push
        resultado.push(subarreglo);
    }

    // retornar el resultado final
    return resultado;
}

function numberOfCharacters(string) {
    // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
    // letras del string, y su valor es la cantidad de veces que se repite en el string.
    // Las letras deben estar en orden alfabético.
    // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
    // Tu código:

    //Crear una variable resultado para almacenar las letras y sus cantidades, según el orden en que aparecen
    var resultado = {};

    // Recorrer el string letra por letra
    for (var i = 0; i < string.length; i++) {
        var letra = string[i];

        // Si la letra ya existe en el objeto, incrementar su valor en 1
        if (resultado[letra]) {
            resultado[letra]++;
        }
        // Si la letra no existe en el objeto, se agrega con un valor de 1
        else {
            resultado[letra] = 1;
        }
    }

    // Ordenar las propiedades del objeto en orden alfabético
    var propiedadesOrdenadas = Object.keys(resultado).sort();

    // Crear un nuevo objeto con las propiedades ordenadas y sus valores correspondientes
    var objetoOrdenado = {};
    for (var i = 0; i < propiedadesOrdenadas.length; i++) {
        var propiedad = propiedadesOrdenadas[i];
        objetoOrdenado[propiedad] = resultado[propiedad];
    }

    // Retornar el objeto ordenado
    return objetoOrdenado;
}


function capToFront(string) {
    // Recibes un string con algunas letras en mayúscula y otras en minúscula.
    // Debes enviar todas las letras en mayúscula al comienzo del string.
    // Retornar el string.
    // [EJEMPLO]: soyHENRY ---> HENRYsoy
    // Tu código:

    var mayusculas = "";
    var minusculas = "";

    // Recorremos el string letra por letra
    for (var i = 0; i < string.length; i++) {
        var letra = string[i];

        // Si la letra es mayúscula, la agregamos a la variable 'mayusculas'
        if (letra === letra.toUpperCase()) {
            mayusculas += letra;
        }
        // Si la letra es minúscula, la agregamos a la variable 'minusculas'
        else {
            minusculas += letra;
        }
    }

    // Concatenamos las variables 'mayusculas' y 'minusculas'
    var resultado = mayusculas + minusculas;

    // Retornamos el resultado
    return resultado;
}


function asAmirror(frase) {
    // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
    // La diferencia es que cada palabra estará escrita al inverso.
    // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
    // Tu código:

    //Convertir la cadena de entrada en un arreglo de palabras usando el método split()
    var palabras = frase.split(' ');

    //Recorrer cada palabra del arreglo y aplicar el método split('') para obtener un arreglo de caracteres
    for (var i = 0; i < palabras.length; i++) {
        var caracteres = palabras[i].split('');
        //Invertir el arreglo de caracteres usando el método reverse()
        var caracteresInvertidos = caracteres.reverse();
        //Unir el arreglo de caracteres invertido usando el método join('')
        var palabraInvertida = caracteresInvertidos.join('');
        //Reemplazar la palabra original por la palabra invertida en el arreglo de palabras
        palabras[i] = palabraInvertida;
    }
    //Unir el arreglo de palabras invertidas usando el método join(' ') para obtener el resultado final
    var resultado = palabras.join(' ');
    //Retornar el resultado
    return resultado;

}

function capicua(numero) {
    // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
    // Caso contrario: "No es capicua".
    // Tu código:
}

function deleteAbc(string) {
    // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
    // Retorna el string sin estas letras.
    // Tu código:
}

function sortArray(arrayOfStrings) {
    // Recibes un arreglo de strings.
    // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
    // de la longitud de cada string.
    // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
    // Tu código:
}

function buscoInterseccion(array1, array2) {
    // Recibes dos arreglos de números.
    // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
    // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
    // Si no tienen elementos en común, retornar un arreglo vacío.
    // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
    // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
    deObjetoAarray,
    numberOfCharacters,
    capToFront,
    asAmirror,
    capicua,
    deleteAbc,
    sortArray,
    buscoInterseccion,
};