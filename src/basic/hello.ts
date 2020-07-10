export default function hello(name : string) :string {
    return `Hello${name}`
}

export function goodbye(name: string) :string {
    return `bye, ${name}`
}

export function birthday(name: string, year: number): Object{
    const profile :Object = {
        name: name,
        age: 2020-year
    }
    return profile
}

export function addResult(num1 :number, num2 :number) :number {
    return num1 + num2
}