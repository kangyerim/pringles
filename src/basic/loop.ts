export default function loop() {
    whileLoop() // es5
    doWhile() // es5
    forLoop() // es5
    forInArrayLoop()
    forInObjectLoop()
    forOfArrayLoop()
    forOfMapLoop()
    forOfSetLoop()
    forOfStringLoop()
    symbolIterator()
}

function whileLoop() {
    console.log(`~~~~~~~~~~~~ 0. while loop ~~~~~~~~~~~~~~`)
    let count: number = 0
    let sum: number = 0
    while(count < 101){
        sum += count
        count++
    }
    console.log(`1부터 100까지의 합 : ${sum}`)
}

function doWhile() {
    console.log(`~~~~~~~~~~~~ 1. doWhile loop ~~~~~~~~~~~~~~`)
    let count: number = 0
    let sum: number = 0
    do{
        sum += count
        count++
    } while(count != 101)
    console.log(`1부터 100까지의 합 : ${sum}`)
}
function forLoop() {
    console.log(`~~~~~~~~~~~~ 2. forLoop ~~~~~~~~~~~~~~`)
    let sum: number = 0
    for(let i = 0; i < 101; i++) {
        sum += i
    }
    console.log(`1부터 100까지의 합 : ${sum}`)
}

function forInArrayLoop() {
    console.log(`~~~~~~~~~~~~ 3. forInArrayLoop ~~~~~~~~~~~~~~`)
    let arr: object = ["peanut", "butter", "cupcake", "coffee", "syrup"]
    for(let i in arr){
        console.log(i, arr[i])
    }
}
function forInObjectLoop() {
    console.log(`~~~~~~~~~~~~ 4. forInObjectLoop ~~~~~~~~~~~~~~`)
    let fruits = {"a":"apple", "b":"banana", "c":"cherry"}
    for(let i in fruits){
        console.log(i, fruits[i])
    }
}
function forOfArrayLoop() {
    console.log(`~~~~~~~~~~~~ 5. forOfArrayLoop ~~~~~~~~~~~~~~`)
    for(const i of [1,2,3]){
        console.log(i)
    }
}

function forOfMapLoop() {
    console.log(`~~~~~~~~~~~~ 6. forOfMapLoop ~~~~~~~~~~~~~~`)
    let map = new Map([["a", 1],["b",2]])
    map.set("a", 3)
    for(let i of map){
        console.log(i)
    }
}

function forOfSetLoop() {
    console.log(`~~~~~~~~~~~~ 7. forOfSetLoop ~~~~~~~~~~~~~~`)
    let set = new Set(["a", "b", "c", "d", "a", "b", "c"])
    for(let i of set){
        console.log(i)
    }
}

function forOfStringLoop() {
    console.log(`~~~~~~~~~~~~ 8. forOfStringLoop ~~~~~~~~~~~~~~`)
    for(let i of "Hello"){
        console.log(i)
    }
}

function symbolIterator() {
    console.log(`~~~~~~~~~~~~ 9. symbolIterator ~~~~~~~~~~~~~~`)
    let arr = [1,2]
    let obj = arr[Symbol.iterator]()
    console.log(`1. ${typeof obj}`)
    console.log(`2. ${obj.next()}`)
    console.log(`3. ${obj.next()}`)
    console.log(`4. ${obj.next()}`)
}