import {type} from "os";

export default function jsType(): void {
    console.log("~~~~~~~~~~JavaScript Type~~~~~~~~~~")
    /**
     * Types:
     * boolean, number, string, undefined, null,
     * JSON, array, function
     * **/
    let myBoolean = true
    let myNumber = 3
    let myString = '야옹'
    let myJSON = {'KEY' : 9}
    let myArray = []
    let myFunction = function f() {}
    let myUndefined =
    console.log(`boolean : ${typeof myBoolean}`)
    console.log(`myNumber : ${typeof myNumber}`)
    console.log(`myString : ${typeof myString}`)
    console.log(`myJSON : ${typeof myJSON}`)
    console.log(`myArray : ${typeof myArray}`)
    console.log(`myFunction : ${typeof myFunction}`)
    console.log(`myUndefined : ${typeof myUndefined}`)
}

export  function tsType(): void {
    console.log("~~~~~~~~~~TypeScript Type~~~~~~~~~~")
    let basket: any = 10
    basket = true
    basket = "tv"
    console.log(basket)

    let arr: string[] = ['a', 'b', 'c']
    for(let i = 0; i < arr.length; i++) {
        console.log(`${arr[i]}\t`)
    }
    let arr2: Array<String> = ['peanut', 'butter', 'pancake']
    for(let i = 0; i < arr2.length; i++) {
        console.log(`${arr2[i]}\t`)
    }
    console.log('~~~~~~~  enum ~~~~~~')
    enum WeekDay{
        Mon, Tue,Wed, Thu = Tue + Wed
    }
    let thu2: number = 10 * 2

    enum WeekDay2 {
        Mon = 10, Tue = 11, Wed = 10 << 2, Thu = thu2
    }
    enum WeekDay3 {
        Mon = "Monday", Tue = "TuesDay"
    }
    console.log(`1. ${JSON.stringify(WeekDay)}`);
    console.log(`2. ${JSON.stringify(WeekDay2)}`);
    console.log(`3. ${JSON.stringify(WeekDay3)}`);
    console.log(`4. Mon = ${WeekDay.Mon}, Tue=${WeekDay["Tue"]}, Wed=${WeekDay.Wed}`);
    console.log(`5. 0 = ${WeekDay[0]}, 1 = ${WeekDay[1]}, 3=${WeekDay.Wed}`);
    console.log(`6. ${typeof WeekDay}`);
    console.log(`7. ${typeof WeekDay.Mon}, ${typeof WeekDay3.Mon}`);
    console.log(`8. ${typeof WeekDay[0]}, ${WeekDay[0]}`);
    const myDay: WeekDay = 50;
    console.log(`9. ${typeof myDay}, ${myDay}`);
    const myDay2: WeekDay3 = WeekDay3.Mon;
    console.log(`10. ${typeof myDay2}, ${myDay2}`);
}

export function symbolType(): void {
    const hello = Symbol("peanut")
    const hello2 = Symbol("peanut")
    // @ts-ignore  : ts를 무시하고 바닐라로 작동한다
    console.log(hello === hello2)  // === 는 타입까지 체크
    console.log(hello, hello2)
    console.log(typeof hello)

    console.log(`~~~~~Symbol2~~~~~`)
    const uniqueKey = Symbol()
    let obj = {}
    obj[uniqueKey] = 123
    console.log(obj)
}

export function tupleType(): void {
    let x: [string, number]
    x = ['tuple', 100]
    console.log(typeof x, typeof x[0], typeof x[1])
    console.log(x[0].substr(0,2), x[1].toFixed(2))

    let x2: [string, number, string, boolean] = ['tuple', 3, 'tuple2', false]
    console.log(x2)
}