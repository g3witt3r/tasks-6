let array = [31, 10, 'chicken', 9, 'fish', 10];

// Массив только со строками
let stringsArray = array.filter(item => typeof item === 'string');

// Массив только с элементами со значением 10
let tensArray = array.filter(item => item === 10);

console.log(stringsArray); // ['chicken', 'fish']
console.log(tensArray);    // [10, 10]
