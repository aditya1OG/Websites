console.log(document.cookie)
document.cookie = "name=aadi039439874"
document.cookie = "name1=aadi1"
document.cookie = "name=aadi11"
console.log(document.cookie)


let key = prompt("enter your key")
let value = prompt("enter your value")

// encodeURIComponent is use for encode the special character(like ;,': these)
document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`
console.log(document.cookie)