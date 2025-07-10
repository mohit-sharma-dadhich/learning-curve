// This is the syntax used for exporting in CommonJS module format.

// function add(a, b) {
//   console.log(a + b);
// }
// function sub(a, b) {
//   console.log(a - b);
// }

// module.exports = {add,sub};

// This is the syntax used for exporting in EJS module format.
export function add(a,b){
    console.log(a+b)
}

export function sub(a,b){
    console.log(a-b)
}