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
//Returns a property descriptor for a named property on an object.