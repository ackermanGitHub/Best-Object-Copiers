console.group("Juan");
// Juan
const juan = {
    name: "Juanito",
    age: 18,
    approvedCourses: ["Curso 1"],
    addCourse(newCourse) {
        console.log("This", this);
        console.log("This.approvedCourses", this.approvedCourses);
        this.approvedCourses.push(newCourse);
    }
};
console.log(juan);

//RECURSIVITY AND RECURSIVITY WITH DEEP COPY
// Imprimir elementos de un array
const numbers = [78,1,2,3,4,5,6,7,8,34,5,42,41,32,1,];

function recursive(numbersArray) {
    if (numbersArray.length != 0) {
        const firstNum = numbersArray[0];
        console.log(firstNum);        
        numbersArray.shift();
        recursive(numbersArray);
    }
}


// Imprimir elementos de un array con su index
let number = 0;
for (let index = 0; index < numbers.length; index++) {
    number = numbers[index];
    // console.log({index, number});
}

// Helpers
function isObject(subject) {
    return typeof subject == "object";
}
function isArray(subject) {
    return Array.isArray(subject);
}

// Best Objects Copier
console.group("Best Object Copier (Recursive Functions)");
function deepCopy(subject, copy, newName) {

    const subjectIsArray = isArray(subject);
    const subjectIsObject = isObject(subject);

    if (subjectIsArray) {
        copy = [];
    } else if (subjectIsObject) {
        copy = {};
    } else {
        return subject;
    }

    for (key in subject) {
        const keyIsObject = isObject(subject[key])
        if (keyIsObject) {
            copy[key] = deepCopy(subject[key]);
        } else {
            if (subjectIsArray) {
                copy.push(subject[key]);
            } else {
                copy[key] = subject[key];
            }
        }
    }
    copy.name = newName;
    return copy;
}
let pedro = {};
pedro = deepCopy(juan, pedro, "Pedro");
let pepito = {};
pepito = deepCopy(pedro, pepito , "Pepito");
console.log(pedro);
console.log(pepito);
console.groupEnd();

console.group("Objects Shadow Copy");
//SHADOW COPY, JSONSTRINGIFY AND JSONPARSE 
const obj1 = {
    a: "A",
    b: "B",
    c: {
        d: "D",
        e: "E",
    },
};
console.log("With JSON.stringify");
const stringfiedComplexObj = JSON.stringify(obj1);
//converts a JavaScript object or value to a JSON string
console.log(stringfiedComplexObj);

console.log("With JSON.parse");
const obj2 = JSON.parse(stringfiedComplexObj);
//parses a JSON string, constructing the JavaScript value or object described by the string
console.log(obj2);

console.log("With for cicle");
// Creates a New Copy Object
let obj3 = {};
for (prop in obj1) {
    obj3[prop] = obj1[prop];
}
console.log(obj3);

console.log("With .assign");
const obj4 = Object.assign({}, obj1);
//Copies the values of all enumerable own properties from one or more source objects to a target object.
console.log(obj4);

console.log("With .create");
const obj5 = Object.create(obj1);
//Creates a new object with the specified prototype object and properties. */
console.log(obj5);
console.groupEnd("");


//STATIC METHODS AND ATRIBUTES:

console.group("Object_To_Array Copier");
console.log(Object.keys(juan));
//Returns an array containing the names of all of the given object's own enumerable string properties.

console.log(Object.getOwnPropertyNames(juan));
//Returns an array containing the names of all of the given object's own enumerable and non-enumerable properties.

console.log(Object.entries(juan));
//Returns an array containing all of the [key, value] pairs of a given object's own enumerable string properties.
console.groupEnd();

// ! Adds the named properties described by the given descriptors to an object.
Object.defineProperty(juan, "pruebaNASA", {
    value: "extraterrestes",
    writable: false,
    enumerable: false,
    configurable: false,
})
Object.defineProperty(juan, "navigator", {
    value: "Chrome",
    writable: true,
    enumerable: false,
    configurable: true,
})
Object.defineProperty(juan, "editor", {
    value: "VSCOde",
    writable: false,
    enumerable: true,
    configurable: true,
})
Object.defineProperty(juan, "terminal", {
    value: "WSL",
    writable: true,
    enumerable: true,
    configurable: false,
})

//Object.seal(juan); // set configurble: false
//Prevents other code from deleting properties of an object.

//Object.freeze(juan); // set writable & configurable: false
//Freezes an object. Other code cannot delete or change its properties.

console.group("Property_Descriptors");
console.log(Object.getOwnPropertyDescriptors(juan)); 
//Returns a property descriptor for a named property on an object.
console.groupEnd();

