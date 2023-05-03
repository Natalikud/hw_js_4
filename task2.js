const rl = require('readline').createInterface(process.stdin,process.stdout);
function letsPlay() {
    const playnumber = 555
    
    rl.question('Enter your number:', (cmd) => {
        //console.log("Your number:", cmd);      
        if (cmd > playnumber) {
            console.log("Your number is higher,try again")            
        }; if (cmd < playnumber) {
            console.log("Your number is less,try again")          
        }; if (cmd == playnumber) {
            console.log("Congratulations! You won!");
            rl.close();
            return
        }
        letsPlay();
    })
}
letsPlay();