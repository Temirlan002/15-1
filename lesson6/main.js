//es5 and es6

//string expression - интерполяция строк

// const first_name = "jack";
// const last_name = "Barbaro";

// console.log("Full Name:" + first_name + ' ' + last_name) //es5

// console.log(`Full Name: ${first_name} ${last_name}`) //es6

const getFullName = (user) => {
    // return "First Name: " + user.first_name + "\n" + "Last Name: " + " " + user.last_name;
    return `First Name: ${user.first_name}\nLast Name: ${user.last_name}`
}

const user = {
    first_name: 'Atay',
    last_name: 'Bravo'
}

// console.log(getFullName(user))


//spread operator

const mass = [1,2,3,4,5]
const mass2 = [...mass]


// for(let i = 0; i < mass.length; i++){
//     mass2.push(mass[i])
// }
// console.log(mass2)

const obj = {
    username: 'Beka',
    age: 17,
    last_name: "Bektur",
    full_name: 'Beka Bektur'
}

const obj2 = [{...obj}]
// console.log(obj2)


//деструктуризация

const props = {
    onSubmit: () => {
        console.log("Submit")
    },
    data: [
        {
            key: 'value'
        },
        {
            key1: "VALUE1"
        },
        {
            key2: 'value2'
        }
    ]
}

const {data, onSubmit} = props;

// console.log(data)
// onSubmit();

// console.log( 10 + 20 * 10 )
// console.log(482 % 219)
console.log(4 ** (1/2))
console.log(8 ** (1/3))

console.log(2 + 2 + '1')
console.log( 6 - '2')
console.log(224 - 224 * 0 + 0 + 224 - 224)
console.log(34892 / 2344 + 224)