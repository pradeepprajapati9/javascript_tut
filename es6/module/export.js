let FirstName = "John";
const person = () => {
    console.log("Hello");
}
{ person };

const creatArry = new Array(12, "laptop", 123, "suneel", true);

let createlement = document.createElement("h1");
let creatext = document.createTextNode("here is the text");
createlement.appendChild(creatext);


let filters = new Array(
    12, 34, 43, 23, 13, 24, 54, 54, 23, 12, 11, 23, 34
)

let filter = filters.filter((item) => {
    return item % 2 === 0
})

class animal {

    constructor() {
        const arr = new Array(12, "laptop", 123, "suneel", true);
        console.log(arr.toString());
    }

    eat() {
        console.log("eat");
    }
}

export { FirstName, person, creatArry, createlement, filters, filter, animal };