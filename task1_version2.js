//функция, возвращающая функцию проверки  
function getPasswordChecker(password) {
    //функция, проверяющая пароль 
    return function checker(inputpass) {
        return inputpass === password
    }
}

let trypass = getPasswordChecker(`qwer`)

console.log(trypass(`qwe`))
console.log(trypass(`qwer`))

