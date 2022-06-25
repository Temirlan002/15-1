function f1() {
function f2(){console.log("Hello");}
function f3(){console.log("Hello");}}
function f4(){console.log("Hello");}



// function sayHello() {

//     console.log("Hello")
// }
//
// sayHello();

// function getFullName(user, age, user2) {
//     if(age < 18){
//         console.log("CLOSE")
//     }else{
//         console.log(user.last_name, user2.last_name + " " + "OPEN")
//     }
// }
//
// const user = {
//     first_name: "John",
//     last_name: "Beka"
// }
//
// const user2 = {
//     first_name: "Maruf"
//     last_name: "Atay"
// }
// getFullName(user, 18, user2);
//
// const anonym = function (users) {
//     console.log(user, users)
// }
//
// anonym();

// function numbers(number1, number2) {
//     if(number1 > number2){
//         console.log("Первое число больше!")
//     } else if(number1 < number2){
//         console.log("Второе число больше!")
//     } else {
//         console.log("равны")
//     }
// }
// // const number = {
// //     number1: 5,
// //     number2: 2
// // }
// numbers(3, 6)new



function twoMass(arr1, arr2) {
    console.log(arr1, arr2)
    if(arr1.length > arr2.length){
        alert("arr1 > arr2")
    } else if(arr1.length < arr2.length){
        alert("arr1 < arr2")
    } else {
        alert("===")
    }
}

const arr1 = [12123, 123, 1232, 33232]
const arr2 = [33232, 43, 34]

// twoMass(arr1, arr2)


// function tr() {
//     let line = '*'
//     while(line.length < 7){
//         console.log(line)
//         // line = line + '*'
//     }
// }
// tr()



// function getFullName(user, cb) {
//     console.log(user.first_name, user.last_name)
//     cb()
// }
//
// function callBack() {
//     console.log("I am call back")
// }
//
// const user = {
//     first_name: "Jack",
//     last_name: "Barbaro"
// }
// getFullName(user, callBack())



// const test = function (message, cb, cb2) {
//     cb(message, cb2);
// }
//
// test("Hello!", function (message, cb) {
//     cb(message);
// }, function (message) {
//     console.log(message)
// });
//
// test()


const input = document.getElementById("number");
const button = document.getElementById("button");

button.onclick = function () {
    console.log(input.value)
}

