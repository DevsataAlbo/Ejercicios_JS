// Cree una función que dado un número n cree un arreglo de largo n, donde en cada posición del arreglo este el doble del anterior nota, el primer elemento del arreglo es 1 



// function arregloDeNumeros(n) {
//     const arreglo = [];
//     let numero = 1;
    
//     for(let i = 1; i <= n; i++){
//         console.log(arreglo.length, i);
//         arreglo.push(numero);
//         numero *= 2;
//     } 

//     console.log(arreglo);
//     return arreglo;
// }

// arregloDeNumeros(8)




//  Cree una función que dado un arreglo de números de largo 10 permita obtener el mayor número contenido en el arreglo


// function encontrarNumeroMayor(array) {
//     array.sort( (a, b) => a - b );
//     const mayor = array.pop()
//     return mayor;
// }

// const numeroMayor = [6,45,4323,32,76,43,12,98,65,21,94]

// console.log(encontrarNumeroMayor(numeroMayor));


// Dado un arreglo de strings que contiene los días de la semana, cree una función que le permita obtener un día en particular si se recibe su número correspondiente. Ej: 1 = Lunes , 7 = Domingo.


// function seleccionDia(dia) {
//     const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
//     return dias[dia-1]
// };

// console.log(seleccionDia(7));


// Cree una función que le permita buscar un elemento contenido en el arreglo. Nota: el arreglo solo contendrá números, y tendrá un largo máximo de 100.

// function encuentraElNumero(numero) {
//     const numeros = [
//         843, 127, 359, 672, 491, 285, 764, 908, 134, 526,
//         42, 815, 693, 347, 579, 921, 238, 654, 102, 765,
//         89, 376, 512, 943, 201, 633, 728, 157, 294, 845,
//         56, 389, 812, 467, 998, 324, 710, 153, 876, 231,
//         67, 532, 789, 416, 953, 278, 645, 182, 507, 819,
//         34, 698, 421, 567, 893, 312, 745, 168, 439, 924,
//         73, 256, 831, 384, 617, 952, 209, 548, 971, 125,
//         18, 683, 497, 362, 729, 514, 847, 273, 606, 935,
//         95, 478, 613, 852, 317, 764, 189, 541, 896, 225,
//         60, 374, 789, 426, 963, 258, 631, 147, 582, 907
//     ];

//     const buscar = numeros.find(( element ) => element === numero );

//     if(buscar) {
//         console.log(`Muy bien, el numero que buscas ${numero}, existe!`)
//     } else {
//         console.log(`Nones, el numero que buscas ${numero}, no existe, vuelve a intentar!`)
//     }
// }

// console.log(encuentraElNumero(843));



// Cree un programa que dado un arreglo de números desordenados los ordene ascendentemente.

// function ordenarNumeros(array) {
//     array.sort( (a, b) => a - b );
//     return array;
// }

// const numeroMayor = [6,45,4323,32,76,43,12,98,65,21,94]
// console.log(ordenarNumeros(numeroMayor));
















