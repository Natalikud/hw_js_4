const rl = require('readline').createInterface(process.stdin,process.stdout);

function letsPlay(quest) {
    return new Promise ( (resolve,reject) => {
        rl.question(quest, (data) => {
            resolve(data);
        })
    })
}

async function input() {
    const playnumber = 555
    while(true) {
        const data = await letsPlay("Введите число:");
        //console.log(`Вы ввели:`, data);
        if (data > playnumber) {
            console.log("Your number is higher,try again")            
        }; if (data < playnumber) {
            console.log("Your number is less,try again")           
        }; if (data == playnumber) {
            console.log("Congratulations! You won!");
            rl.close();
            break
        }
    }
}
input()