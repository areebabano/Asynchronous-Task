// Question 1: Write a TypeScript function that uses async/await to wait for 2 
// seconds and then returns a string "Hello World".

async function func(ms: number): Promise<string> {
    await new Promise((resolve) => setTimeout(resolve, ms))
    return "Hello World"
}

// IIFE call function only one time
(async function getFunc() {
    const result = await func(2000)
    console.log(result);
})()


// Question 2: Create a TypeScript function that takes a callback function as an 
// argument and uses setTimeout to call the callback after 1 second.

function timeOut(cb: ()=> void) {
    setTimeout(()=> {
        cb()
    }, 1000)
}

timeOut(()=> {
    console.log("Hello! Callback Function here....");
})


// Question 3: Write a TypeScript function that returns a Promise that resolves with 
// the value "Resolved!" after 3 seconds.

function myPromises(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve("Resolved!")
        }, 3000)
    })
}

myPromises().then((res)=>console.log(res))


// Question 4: Create a TypeScript function that uses async/await to wait for two 
// Promises to resolve and then returns their results as an array.

// Solution 1

let promise_1: Promise<string> = new Promise((resolve, reject) => {
    console.log("Resolving 1.....");
    setTimeout(()=> {
        resolve("Resolved! Promise 1")
    }, 2000)
})

let promise_2: Promise<string> = new Promise((resolve, reject) => {
    console.log("Resolving 2.....");
    setTimeout(()=> {
        resolve("Resolved! Promise 2")
    }, 2000)
})

async function waitForPromise(): Promise<string[]> {
    let res1 = await promise_1
    let res2 = await promise_2
    return [res1,res2]
}

(async function getP1P2() {
    const result = await waitForPromise()
    console.log(result);
})()

// // Solution 2

async function waitPromises() {
    const promise1 = Promise.resolve("Resolved! promise 1")
    const promise2 = Promise.resolve("Resolved! promise 2")
    const res1 = await promise1
    const res2 = await promise2
    return [res1, res2]
}

(async function getPromise() {
    const result = await waitPromises()
    console.log(result);
})()


// Question 5: Write a TypeScript function that uses async/await to wait for a Promise 
// to resolve and then logs the result to the console.

async function promises(): Promise<void> {
    let promise: Promise<string> = new Promise((resolve, reject) => {
        resolve("Promise Resolved Successfully!")
    })
    const result = await promise
    console.log(result);
}

promises()


// Question 6: Write a TypeScript function that uses async/await to wait for a Promise 
// to reject and then logs the error to the console.


async function promiseReject(): Promise<void> {
    let promise: Promise<string> = new Promise((resolve, reject) => {
        reject("Rejected! something went wrong")
    })
    try {
        const result = await promise
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

promiseReject()


// Question 7: Create a TypeScript function that takes a number as an argument and 
// returns a Promise that resolves with the square of the number after a delay of 1 second.

function MyPromise(num: number) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
           resolve(num ** 2)
        }, 1000)
    })
}

MyPromise(4).then((res)=> console.log(res))


// Question 8: Write a TypeScript function that uses async/await to wait for an array 
// of Promises to resolve and then returns an array of their results.

async function arrayOfPromise(arrayPr: Promise<any>[]): Promise<any> {
    let allPromises = await Promise.all(arrayPr)
    return allPromises
}

let promise1 = Promise.resolve("Promise 1 Resolved.....")
let promise2 = Promise.resolve("Promise 2 Resolved.....")
let promise3 = Promise.resolve("Promise 3 Resolved.....")
let promise4 = Promise.resolve("Promise 4 Resolved.....")
let promise5 = Promise.resolve("Promise 5 Resolved.....")

let allPro = await arrayOfPromise([promise1,promise2,promise3,promise4,promise5])
console.log(allPro);


// Question 9: Create a TypeScript function that uses setTimeout to call a function 
// repeatedly every 2 seconds.

// solution 1

function repeatFunc(cb: ()=> void) {
    setTimeout(()=> {
        cb()
        repeatFunc(cb)
    }, 2000)
}

function Callback(){
    console.log("Hello! Repeated Function..."); 
}

repeatFunc(Callback)

// solution 2

function task() {
    function repeatedTask() {
        console.log("Hello!");
}

function myRepeatedTask() {
     repeatedTask()
     setTimeout(myRepeatedTask, 2000)
  }
  myRepeatedTask()
}
// console.log("My Repeated Task " ,task())
task()



// Question 10: Write a TypeScript function that uses async/await to wait for a Promise 
// to resolve and then returns a new Promise that resolves with the result multiplied by 2.

async function promise(pro: Promise<number>): Promise<number> {
    let result = await pro
    return result * 2
}

const myPromise: Promise<number> = new Promise((resolve, reject) => {
    setTimeout(()=> {
         resolve(6)
    }, 2000)
})

const newPromise = await promise(myPromise).then((res)=> console.log(res))


