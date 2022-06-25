const array = [
    {
        username: "Jack",
        full_name: "Jack Koin"
    },
    {
        username: "Jack",
        full_name: "Jack Koin"
    },
     {
        username: "Jack",
        full_name: "Jack Koin"
    },
     {
        username: "Jack",
        full_name: "Jack Koin"
    },
     {
        username: "Jack",
        full_name: "Jack Koin"
    },
     {
        username: "Jack",
        full_name: "Jack Koin"
    },
     {
        username: "Jack",
        full_name: "Jack Koin"
    },
     {
        username: "Jack",
        full_name: "Jack Koin"
    },
    [
        4,5,6
    ]
]

// инкрементация

// let i = 0; //i++
// i = i + 1

// for(let i = 8; i < array.length; i++){
//         console.log(array[i])
// }

// for(let user of array){
//     console.log(user)
// }

const obj = {
    key1: 'b1',
    key2: 'b2',
    key3: 'b3',
    key4: 'b4',
    key5: 'b5',
    key6: 'b6',
}

// for(let key in obj){
//     console.log(obj[key])
// }


// let i = 0
//
// while(i < 5){
//     console.log("Hello!")
//     // i--
// }


const users = [
    {
        username: 'jack',
        salary: 500
    },
    {
        username: 'john',
        salary: 5000
    },
    {
        username: "Aybek",
        salary: 10000
    }
]

const filteredUsers = users.filter(user => user.salary > 500)
// console.log(filteredUsers)

// for(let user of users){
//     if(user.salary > 500){
//         filteredUsers.push(user)
//     }
// }
// console.log(filteredUsers)

const destructUsers = users.map(user => ({
    name: user.username,
    salary: user.salary
}));

// for(let user of users){
//     destructUsers.push({
//         name: user.username,
//         salary: user.salary
//     })
// }

console.log(destructUsers)