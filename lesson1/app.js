const a = "a"; // string

let c = 32; // number

const bool = true; // boolean
const bool2 = false;

// console.log(typeof bool)

// const obj = { //object
//     key: "value",
//     username: "Aidana",
//     data: {
//         first_name: "jack",
//         last_name: "Rus"
//     }
// }

// console.log(obj.data.last_name)

// const arr = ["da", 23, true, false]
//
// console.log(typeof arr)
// console.log(arr)

// const name = prompt("Как вас зовут?")
// console.log("Hello " + name)
//
// const age = alert("вам еще нет 18!")

// const first_number = prompt("Первое число?")
// const last_number = prompt("Второе число?")

// if(first_number < last_number){
//     console.log(first_number + "<" + last_number)
// } else if(first_number > last_number){
//     console.log(first_number + ">" + last_number)
// } else {
//     console.log(first_number + "=" + last_number)
// }

// const age = prompt("Сколько вам лет?")
//
// if(age < 18){
//     console.log("вам нельзя входить!")
// } else if(age > 18){
//     console.log("можно")
// } else {
//     console.log("спорно")
// }

// console.log(30 * 40 - 203)
// console.log(-30 * 203)
// console.log(3**4)
// console.log(3 * 20 / 11)

let obj = {
    username: "john",
    followers: [
        {
            username: "john"
        },
        {
            username: "jack",
            followers: [
                {
                    username: 'jack',
                },
                {
                    username: 'john'
                },
                {
                    username: "ben"
                }
            ]
        }
    ]
}

console.log(obj.followers[1].followers[1].username)


// const arr2 = [[[[[[[[[[[[[[[5]]]]]]]]]]]]]]]
// console.log(arr2[0.0])