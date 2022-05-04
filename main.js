/* genere 10 numeros aleatorios entre 1 y 50 */

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

let array= [];

for(let i=1; i<=10; i++){
    array.push(getRandomInt(1,50));
}

/*luego cree una copia del primero y le agregue otro numero que es 22*/

let array2 = array.slice();

array2.push(22);

console.log("Array1");
console.log(array);

console.log("Array2");
console.log(array2);





