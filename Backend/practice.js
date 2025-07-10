// this is a practice file 
console.log("Hello World")

// This is the syntax used for importing in CommonJS module format.

            // const mathCal = require("./module") //mathCal is an object with add and sub methods 

            // mathCal.add(2,3);
            // mathCal.sub(2,3)

// This is the syntax used for importing in EJS module format.

        // import {add,sub} from './module.js'
        // add(4,2)
        // sub(5,5)


        // importing as object 
        import * as mathCal from './module.js';
        mathCal.add(2,4);
        mathCal.sub(5,6)