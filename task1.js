//функция, возвращающая функцию проверки  
function getPasswordChecker (password) {
    //функция, проверяющая пароль 
    function checker () {
        if (password == `qwer`) {
            //console.log("Accepted!")
            return true;
        } else {
            //console.log("Error, try again...")
            return false;
        }
    }
    return checker();
}
//console.log(getPasswordChecker(`qwe`))
//console.log(getPasswordChecker(`qwer`))
try {
    console.log(getPasswordChecker(`qwe`));
} catch (e) {   
} finally {
    console.log( "End");
}

