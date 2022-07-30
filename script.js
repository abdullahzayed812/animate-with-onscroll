let section = document.querySelector(".section");
let spans = document.querySelectorAll('.progress span');

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
}

console.log(section.children);

// function names(...params) {
//     let result = "String ";
//     for (let i = 0; i < params.length; i += 1) {
//         result += "[" + params[i] + "], ";
//     }
//     result += "=> Done!";
//     return result;
// }

// let names = (...params) => {
//     let result = "String ";
//     for (let i = 0; i < params.length; i += 1) {
//         result += "[" + params[i] + "], ";
//     }
//     result += "=> Done!";
//     return result;
// }

// console.log(names("Mohamed", "Ahmed", "Ali", "Hossam", "Mosaad"));

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,1,2,0,Z"; // return Elzero Web School

let solution = myString
    .split("")
    .filter((char) => isNaN(parseInt(char)) && char !== ",")
    .map(
        (char, index, array) => 
        index === 0
        || index === array.length - 1
        ? "" : char
        && char === "_" ? " " : char
    )
    .reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(solution);
// console.log(myString.length)

let obj = {
    name: "Abdullah",
    age: 25,
}

const [[key], [value]] = Object.entries(obj);

console.log(key);

const date = new Date();

