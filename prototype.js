
function Person(name, age) {
    let person = Object.create(Person.prototype);

    person.name = name,
        person.age = age

    return person;
}

Person.prototype = {
    eat() {
        console.log('Person is Eating');
    },

    sleep() {
        console.log('person is Sleeping')
    }
}

const shakib = Person('Shakib', 30);
console.log(shakib.eat());

// const captine = {
//     name: "Shakib",
//     age: 36,
//     country: "Bangldesh"
// };

// const player = Object.create(captine);

// console.log(player);