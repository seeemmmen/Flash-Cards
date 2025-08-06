const jsQuestions = [
    {
        id: 1,
        question: "What is a closure in JavaScript?",
        answer: "A closure is a function that retains access to its lexical scope, even when that function is executed outside of its original context. This means a closure can remember and access variables from the function in which it was defined."
    },
    {
        id: 2,
        question: "What is the difference between var, let, and const?",
        answer: "The 'var' keyword has function scope and allows variable redeclaration, which can lead to bugs. 'let' and 'const' have block scope. 'let' allows reassignment but not redeclaration within the same scope, while 'const' creates a read-only reference that cannot be reassigned or redeclared."
    },
    {
        id: 3,
        question: "What does the '===' operator do?",
        answer: "The '===' operator is called the strict equality operator. It checks whether two values are equal in both value and data type, avoiding type coercion that happens with the '==' operator."
    },
    {
        id: 4,
        question: "What is hoisting in JavaScript?",
        answer: "Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope during the compilation phase. This means you can reference functions and variables before they are declared, though with 'var', the value will be undefined."
    },
    {
        id: 5,
        question: "How does setTimeout work?",
        answer: "setTimeout is a browser API that delays the execution of a function by a specified number of milliseconds. It doesn’t block code execution — instead, it sets a timer and lets the rest of the code run, and executes the callback once the timer expires."
    },
    {
        id: 6,
        question: "What is a Promise in JavaScript?",
        answer: "A Promise is an object representing the eventual completion or failure of an asynchronous operation. It can be in one of three states: pending, fulfilled, or rejected. Promises help manage asynchronous workflows in a more readable way compared to nested callbacks."
    },
    {
        id: 7,
        question: "What is the difference between null and undefined?",
        answer: "'undefined' means a variable has been declared but has not yet been assigned a value. 'null' is an assignment value that represents no value or no object, and is set intentionally by the developer."
    },
    {
        id: 8,
        question: "What does the Array.map() method do?",
        answer: "The map() method creates a new array by calling a provided function on every element in the original array. It does not mutate the original array and is often used for transforming data."
    },
    {
        id: 9,
        question: "What is an arrow function?",
        answer: "An arrow function is a concise way to write functions in JavaScript. It does not bind its own 'this', 'arguments', or 'super', and is best suited for non-method functions or callbacks where you want lexical scoping."
    },
    {
        id: 10,
        question: "How do you check if a variable is an array?",
        answer: "You can check if a value is an array by using Array.isArray(value). This method returns true if the value is an array, and false otherwise."
    },
    {
        id: 11,
        question: "What is the event loop in JavaScript?",
        answer: "The event loop is a concurrency model in JavaScript that handles asynchronous operations. It processes the call stack and the message queue to allow non-blocking execution, enabling the runtime to manage multiple tasks efficiently."
    },
    {
        id: 12,
        question: "How does the fetch() method work?",
        answer: "fetch() is a modern way to make HTTP requests in JavaScript. It returns a Promise that resolves to the Response object representing the response to the request. It’s often used with async/await or then() chaining to handle asynchronous data fetching."
    },
    {
        id: 13,
        question: "What does Object.assign() do?",
        answer: "Object.assign() copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object and is useful for shallow cloning or merging objects."
    },
    {
        id: 14,
        question: "What is NaN in JavaScript?",
        answer: "NaN stands for 'Not-a-Number'. It is a special numeric value used to represent a computational error resulting from an invalid or undefined mathematical operation, such as 0 / 0 or parseInt('abc')."
    },
    {
        id: 15,
        question: "How does the spread operator work in arrays?",
        answer: "The spread operator (...) expands iterable elements like arrays or strings into individual elements. It’s commonly used for copying, merging arrays, or passing array elements as arguments to functions."
    },
    {
        id: 16,
        question: "What is 'this' in JavaScript?",
        answer: "'this' refers to the object that is executing the current function. Its value depends on how the function is called. In a method, 'this' refers to the object. In a standalone function, it refers to the global object (or undefined in strict mode)."
    },
    {
        id: 17,
        question: "What is the difference between synchronous and asynchronous code?",
        answer: "Synchronous code is executed line by line, blocking further execution until the current operation completes. Asynchronous code runs independently and uses callbacks, Promises, or async/await to handle operations without blocking the main thread."
    },
    {
        id: 18,
        question: "What does the typeof operator do?",
        answer: "The typeof operator returns a string that indicates the type of the operand. For example, typeof 'hello' returns 'string', typeof 123 returns 'number', and typeof undefined returns 'undefined'."
    },
    {
        id: 19,
        question: "Can you use async/await without try/catch?",
        answer: "Yes, you can, but it is not recommended. Using try/catch helps handle errors that may occur in asynchronous operations. Without it, unhandled errors can cause crashes or unexpected behavior in your application."
    },
    {
        id: 20,
        question: "What does JSON.stringify() do?",
        answer: "JSON.stringify() converts a JavaScript object or value to a JSON string. It is useful for sending data to a server or saving it in a format that can be easily transmitted or stored."
    }
];

export default jsQuestions;
