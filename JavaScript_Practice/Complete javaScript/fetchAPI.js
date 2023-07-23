//👍👍 this is how to use fetch API: 

// let a = fetch('https://jsonplaceholder.typicode.com/todos/1')
//     a.then((response) => {
//         console.log(response.status)
//         console.log(response.ok)
//         console.log(response.json())
//     }).then((value) => {
//         console.log(value)
//     })



// 👍👍 how to fetch data from API

// let option = {
//     method: "POST",
//     headers: {
//         "Content-type": "application/json"
//     },
//     body: JSON.stringify({
//         title: 'aadi',
//         body: 'Developer',
//         userId: 1,
//     }),
// }

// fetch('https://jsonplaceholder.typicode.com/posts', option)
//     .then((response) => response.json())
//     .then((json) => console.log(json));



// 👍👍 how to fetch data from API using async/await function:

// const first = async() => {
//     let option = {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify({
// title: 'aadi',
//             body: 'Developer',
//             userId: 1,
//         }),
//     }
//     let p = await fetch('https://jsonplaceholder.typicode.com/posts', option)
//     let response = await p.json()
//     return response
// }

// const mainfunc = async () => {
//     let todo = await first()
//     console.log(todo)
// }
// mainfunc()


// 👍👍 how to fetch data from API using async/await function pass all data in function:


const first = async (todo) => {
    let option = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(todo)
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', option)
    let response = await p.json()
    return response
}

const getTodo = async(id) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    let r = await response.json()
    return r
}

const mainfunc = async () => {
    let todo = {
        title: 'aadi',
        body: 'Developer',
        userId: 1,
    }
    let todor = await first(todo)
    console.log(todor)
    console.log(await getTodo(11))
}
mainfunc()