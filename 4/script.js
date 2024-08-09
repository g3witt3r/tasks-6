let animals = ["cat", "dog", "parrot", "horse", "fish", "chicken", "lion"];
//Удаление элемента fish
// Находим индекс элемента 'fish'
let indexFish = animals.indexOf("fish");

if (indexFish !== -1) {
  // Удаляем элемент 'fish'
  animals.splice(indexFish, 1);
}

console.log(animals); // ["cat", "dog", "parrot", "horse", "chicken", "lion"]
//Удаление элемента cat
let indexCat = animals.indexOf("cat");

if (indexCat !== -1) {
    // Удаляем элемент 'cat'
    animals.splice(indexCat, 1);
  }
  
  console.log(animals); // ["dog", "parrot", "horse", "chicken", "lion"]

  // Удаляем последние два элемента
animals.splice(-2, 2);

console.log(animals); // ["dog", "parrot", "horse"]
