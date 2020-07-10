import hello, {goodbye, birthday, addResult} from "./hello";
import jsType, {tsType, symbolType,tupleType} from "./jsTypes";
import operator, {destructure, spread} from "./operator"
import loop from "./loop";

let menu: number = 4
let name, profile: string = ""
switch (menu) {
    case 0:
        name = "강ㅇ{ㄹ밈"
        const message = goodbye(name)
        console.log(message)
        break

    case 1:
        name = "스누피"
        let year :number = 2013
        profile = JSON.stringify(birthday(name, year))
        console.log(profile)
        break

    case 2:
        let num1 :number = 10
        let num2 :number = 30
        let result :number = addResult(num1, num2)
        console.log(`덧셈 결과 : ${result}`)
        break

    case 3: // 자바스크립트 타입 출력
        // jsType()
        // tsType()
        // symbolType()
        tupleType()
        break

    case 4:
        // operator()
        // spread()
        loop()
        break
    default :
        console.log("존재하지 않는 케이스")
        break
}