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

// ABSTRACCION CON OBJETOS LITERALES Y DEEP COPY --- Clases 10
console.group("Deep Copy on literals objects");
const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: [],
    learningPaths: [],
    socialMedia: {
        twitter: undefined,
        instagram: undefined,
        facebook: undefined,
    },
    addCourse(newCourse) {
        console.log("This", this);
        console.log("This.approvedCourses", this.approvedCourses);
        this.approvedCourses.push(newCourse);
    }
};

let pepino = {};
pepino = deepCopy(studentBase, "Pepino");
//Object.seal(pepino);
//Object.freeze(pepino);
console.log("Pepino");
console.log(pepino);
console.log("Pepino .isSealed and .isFrozen");
console.log(Object.isSealed(pepino));
console.log(Object.isFrozen(pepino));
/* Object.defineProperty(pepino, "name", {
    value: "Pepino",
    configurable: false,
}); */
console.groupEnd("");


//Objects creator function *****IMPORTANT***** CLASES 11, 12, 13, 14, 15
console.group("Object_Creator Function");
function requiredParam(param) {
    throw new Error(param + " es obligatorio");
}
function LearningPath({
    name = requiredParam("name"),
    courses = [],
}) {
    this.name = name;
    this.courses = courses;
}
function Student({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
} = {}) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.socialMedia = {
        twitter,
        instagram,
        facebook,
    };
    this.approvedCourses = approvedCourses;

    const private = {
        "_learningPaths": [],
    };

    Object.defineProperty(this, "learningPaths", {
        get(){
            return private["_learningPaths"];
        },
        set(newLP) {
            if(newLP instanceof LearningPath) {
                private["_learningPaths"].push(newLP);         
            } else {
                console.warn("Alguno de los LPs no es una instancia del prototipo LearninPaths");
            }
        },
    });
          
    for(learningPathIndex in learningPaths) {
        this.learningPaths = learningPaths[learningPathIndex];
    }
}

const escuelaWeb = new LearningPath({
    name: "Escuela de WebDev",
});
const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
});
const karla = new Student({
    name: "Karla",
    email: "karla.isabel@gmail.com",
    learningPaths: [
        escuelaData,
        escuelaWeb,
    ],
});
const julio = new Student({
    name: "Julio",
    age: 18,
    email: "jlpz3921@gmail.com",
    twitter: "@skankhunt42",
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ],
});
console.log("Julio");
console.log(julio);
console.log("Karla");
console.log(karla);
console.groupEnd("");


//RECURSIVITY AND RECURSIVITY WITH DEEP COPY --- Clases 8 y 9
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
console.group("Best Object Copier ( DEEP COPY )");
function deepCopy(subject, newName) {
    let copy;
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

function SuperObject(){}
SuperObject.isObject = function (subject) {
	if(Array.isArray(subject)){
		return false
	}
  return typeof subject == "object";
}
SuperObject.deepCopy = function (subject) {
    let copy;
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
    return copy;
}


let pedro = {};
pedro = deepCopy(juan, "Pedro");
console.log(pedro);
let pepito = {};
pepito = deepCopy(pedro, "Pepito");
console.log(pepito);
let morell = {};
morell = deepCopy(pedro, "Cristian");
console.log(morell);
let miguel = deepCopy(juan);
miguel.playList = ["Efecto"];
miguel.addSong = function (newSong){this.playList.push(newSong);}
miguel.addSong("Titi me Preguntó");
Object.defineProperty(miguel, "VeranoSinTi", {
    value: "Moscow Mule",
    writable: false,
    enumerable: false,
    configurable: false,
})
console.log(miguel);
console.groupEnd();


//SHADOW COPY, JSONSTRINGIFY AND JSONPARSE --- Clases 6 y 7
console.group("Objects Shadow Copy");
const obj1 = {
    a: "A",
    b: "B",
    c: {
        d: "D",
        e: "E",
    },
};
console.log("With JSON.stringify");
//converts a JavaScript object or value to a JSON string
const stringfiedComplexObj = JSON.stringify(obj1);
console.log(stringfiedComplexObj);

console.log("With JSON.parse");
//parses a JSON string, constructing the JavaScript value or object described by the string
const obj2 = JSON.parse(stringfiedComplexObj);
console.log(obj2);

console.log("With for cicle");
// Creates a New Copy Object
let obj3 = {};
for (prop in obj1) {
    obj3[prop] = obj1[prop];
}
console.log(obj3);

console.log("With .assign");
//Copies the values of all enumerable own properties from one or more source objects to a target object.
const obj4 = Object.assign({}, obj1);
console.log(obj4);

console.log("With .create");
//Creates a new object with the specified prototype object and properties.
const obj5 = Object.create(obj1);
console.log(obj5);
console.groupEnd("");


//STATIC METHODS AND ATRIBUTES: --- Clases 2, 3 y 4

console.group("Object_To_Array Copier");
console.log("With Object.keys");
console.log(Object.keys(juan));
//Returns an array containing the names of all of the given object's own enumerable string properties.

console.log("With Object.getOwnPropertyName");
console.log(Object.getOwnPropertyNames(juan));
//Returns an array containing the names of all of the given object's own enumerable and non-enumerable properties.

console.log("With Object.entries");
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
console.log("With Object.getOwnPropertyDescriptors");
console.log(Object.getOwnPropertyDescriptors(juan)); 
//Returns a property descriptor for a named property on an object.
console.groupEnd();


