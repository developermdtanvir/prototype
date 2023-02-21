const personMethod = {
    eat() {
        console.log('Person is Eating');
    },

    sleep() {
        console.log('person is Sleeping')
    }
}

function Person(name, age) {
    let person = {};

    person.name = name,
        person.age = age

    person.eat = personMethod.eat;
    person.sleep = personMethod.sleep;

    return person;
}

const shakib = Person('Shakib', 30);
console.log(shakib);