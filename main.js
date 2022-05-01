/* //SHADOW COPY, JSONSTRINGIFY AND JSONPARSE 
const obj1 = {
    a: "A",
    b: "B",
    c: {
        d: "D",
        e: "E",
    },
};

const stringfiedComplexObj = JSON.stringify(obj1);
//converts a JavaScript object or value to a JSON string

const obj2 = JSON.parse(stringfiedComplexObj);
//parses a JSON string, constructing the JavaScript value or object described by the string */


/* for (prop in obj1) {
    obj2[prop] = obj1[prop];
} */

//const obj3 = Object.assign({}, obj1);
//Copies the values of all enumerable own properties from one or more source objects to a target object.

//const obj4 = Object.create(obj1);
//Creates a new object with the specified prototype object and properties. */




//STATIC METHODS AND ATRIBUTES:
/* const juan = {
    name: "Juanito",
    age: 18,
    approvedCourses: ["Curso 1"],
    addCourse(newCourse) {
        console.log("This", this);
        console.log("This.approvedCourses", this.approvedCourses);
        this.approvedCourses.push(newCourse);
    }
};

//console.log(Object.keys(juan));
//Returns an array containing the names of all of the given object's own enumerable string properties.

//console.log(Object.getOwnPropertyNames(juan));
//Returns an array containing the names of all of the given object's own enumerable and non-enumerable properties.

//console.log(Object.entries(juan));
//Returns an array containing all of the [key, value] pairs of a given object's own enumerable string properties.


//Adds the named properties described by the given descriptors to an object.
/* Object.defineProperty(juan, "pruebaNASA", {
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
}) */

//Object.seal(juan); // set configurble: false
//Prevents other code from deleting properties of an object.

//Object.freeze(juan); // set writable & configurable: false
//Freezes an object. Other code cannot delete or change its properties.


//console.log(Object.getOwnPropertyDescriptors(juan)); 
//Returns a property descriptor for a named property on an object. */