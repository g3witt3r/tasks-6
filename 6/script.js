const person = {
    firstName: 'Jack',
    lastName: 'Sparrow',
    age: 25,
    location: 'Caribbean sea',
  };
  
  for (let key in person) {
    if (person.hasOwnProperty(key)) {
      console.log(`${key}: ${person[key]}`);
    }
  }

  for (let key in person) {
    if (person.hasOwnProperty(key)) {
      if (key === 'firstName') {
        console.log(`First name: ${person[key]}`);
      } else if (key === 'lastName') {
        console.log(`Last name: ${person[key]}`);
      } else if (key === 'age') {
        console.log(`Age: ${person[key]} ages`);
      } else if (key === 'location') {
        console.log(`Where to find: ${person[key]}`);
      }
    }
  }
  