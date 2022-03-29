function askName() {
    var userName = prompt("What is your name?")
    return userName
}

function ranNumber() {
    var ran = (Math.floor(Math.random() * 10) + 1)
    return ran
}

function humran() {
    var humnum = 0
    do {
        humnum = humnum + ranNumber()
        console.log(humnum)

        var cont = prompt(`Your total is now ${humnum}. Go again? y/n`)
    } while ((humnum <= 20) && (cont == "y"))
    return humnum
}

function compran() {
    var compnum = 0
    do {
        compnum = compnum + ranNumber()
        console.log(compnum)

        alert(`The computer's total is now ${compnum}`)
    } while (compnum <= 16)
    return compnum
}

function compare(name,hum,comp) {
    if ((hum > 20) && (comp <= 20)) {
        alert(`${name} (you) ended with ${hum}, which is over 20. You lose.`)
    } else if ((hum <=20) && (comp > 20)) {
        alert(`The computer ended with ${comp}, which is over 20. You win.`)
    } else if (((hum - comp > 1) && (hum <= 20) && (comp <= 20))) {
        alert(`${name} (you) ended with ${hum}, and the computer ended with ${comp}. You win.`)
    } else if (((hum - comp < 1) && (hum <= 20) && (comp <= 20))) {
        alert(`${name} (you) ended with ${hum}, and the computer ended with ${comp}. You lose.`)
    } else if (hum == comp) {
        alert(`You both ended with ${hum}. It's a tie.`)
    } else if ((hum > 20) && (comp > 20)) {
        alert(`You both went over 20. Nobody wins.`)
    }
}

function game() {
    do {
        compare(askName(), humran(), compran())
        var again = prompt("Go again? y/n")
    } while (again == "y")
       
}

game()