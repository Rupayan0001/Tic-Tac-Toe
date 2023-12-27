let column1 = document.querySelector(".column1")
let column2 = document.querySelector(".column2")
let column3 = document.querySelector(".column3")
let column4 = document.querySelector(".column4")
let column5 = document.querySelector(".column5")
let column6 = document.querySelector(".column6")
let column7 = document.querySelector(".column7")
let column8 = document.querySelector(".column8")
let column9 = document.querySelector(".column9")
let turn = document.querySelector(".turn")
let restart = document.querySelector(".restart")
// let playerFirst = prompt("Player X : Enter your name: ")
// let playerSecond = prompt("Player Y : Enter your name: ")
let win = document.querySelector(".win")
let reset = document.querySelector(".reset")
let line1 = document.querySelector(".line1")
let line4 = document.querySelector(".line4")
let line7 = document.querySelector(".line7")
let line8 = document.querySelector(".line8")
let playerTurn = "X";
let clickSound = new Audio("interface-124464.mp3")
let winSound = new Audio("decidemp3-14575.mp3")
let newGameSound = new Audio("mouse-click-153941.mp3")
let drawSound = new Audio("negative_beeps-6008.mp3")

function switchPlayer() {
    if (playerTurn === "X") {
        playerTurn = "O"
    }
    else {
        playerTurn = "X"
    }
}

turn.textContent = `Player Turn: ${playerTurn}`
function enter(e) {
    if (e.target.textContent === "") {
        e.target.textContent = playerTurn
        clickSound.currentTime = 0;
        clickSound.play()
        checkWinner()
        switchPlayer()
        turn.textContent = playerTurn === "X" ? `Player Turn: ${playerTurn}` : `Player Turn: ${playerTurn}`

    }
}


function addingEventListener() {
    column1.addEventListener("click", enter)
    column2.addEventListener("click", enter)
    column3.addEventListener("click", enter)
    column4.addEventListener("click", enter)
    column5.addEventListener("click", enter)
    column6.addEventListener("click", enter)
    column7.addEventListener("click", enter)
    column8.addEventListener("click", enter)
    column9.addEventListener("click", enter)

}

addingEventListener()

function remove() {
    column1.removeEventListener("click", enter)
    column2.removeEventListener("click", enter)
    column3.removeEventListener("click", enter)
    column4.removeEventListener("click", enter)
    column5.removeEventListener("click", enter)
    column6.removeEventListener("click", enter)
    column7.removeEventListener("click", enter)
    column8.removeEventListener("click", enter)
    column9.removeEventListener("click", enter)
}

restart.addEventListener("click", function () {
    newGame();
    win.classList.toggle("none")

})


function newGame() {
    newGameSound.currentTime = 0;
    newGameSound.play()
    column1.innerHTML = "";
    column2.innerHTML = "";
    column3.innerHTML = "";
    column4.innerHTML = "";
    column5.innerHTML = "";
    column6.innerHTML = "";
    column7.innerHTML = "";
    column8.innerHTML = "";
    column9.innerHTML = "";
    win.textContent = "";
    reset.style.display = "none"
    win.classList.toggle("none")
    line1.style.display = "none"
    line1.classList.remove("line2")
    line1.classList.remove("line3")
    line4.style.display = "none"
    line4.classList.remove("line5")
    line4.classList.remove("line6")
    line7.style.display = "none"
    line8.style.display = "none"
    turn.style.display = "block"
    restart.style.display = "block"


    addingEventListener()
}

reset.addEventListener("click", newGame)

function run() {
    remove()
    clickSound.pause()
    winSound.play()
    reset.style.display = "block"
    win.classList.toggle("none")
    turn.style.display = "none"
    restart.style.display = "none"
}

function checkWinner() {
    if (column1.textContent === column2.textContent && column1.textContent === column3.textContent && column1.textContent !== "") {
        win.textContent = `${playerTurn = playerTurn === "X" ? "X" : "O"} wins the game`
        run()
        line1.style.display = "block"




    }
    if (column4.textContent === column5.textContent && column4.textContent === column6.textContent && column4.textContent !== "") {
        win.textContent = `${playerTurn = playerTurn === "X" ? "X" : "O"} wins the game`
        run()
        line1.style.display = "block"
        line1.classList.add("line2")

    }
    if (column7.textContent === column8.textContent && column7.textContent === column9.textContent && column7.textContent !== "") {
        win.textContent = `${playerTurn = playerTurn === "X" ? "X" : "O"} wins the game`
        run()
        line1.style.display = "block"
        line1.classList.add("line3")

    }
    if (column1.textContent === column4.textContent && column1.textContent === column7.textContent && column1.textContent !== "") {
        win.textContent = `${playerTurn = playerTurn === "X" ? "X" : "O"} wins the game`
        run()
        // line1.style.display = "block"
        line4.style.display = "block"


    }
    if (column2.textContent === column5.textContent && column2.textContent === column8.textContent && column2.textContent !== "") {
        win.textContent = `${playerTurn = playerTurn === "X" ? "X" : "O"} wins the game`
        run()
        line4.style.display = "block"
        line4.classList.add("line5")

    }
    if (column3.textContent === column6.textContent && column3.textContent === column9.textContent && column3.textContent !== "") {
        win.textContent = `${playerTurn = playerTurn === "X" ? "X" : "O"} wins the game`
        run()
        line4.style.display = "block"
        line4.classList.add("line6")

    }
    if (column1.textContent === column5.textContent && column1.textContent === column9.textContent && column1.textContent !== "") {
        win.textContent = `${playerTurn = playerTurn === "X" ? "X" : "O"} wins the game`
        run()
        line8.style.display = "block"


    }
    if (column3.textContent === column5.textContent && column3.textContent === column7.textContent && column3.textContent !== "") {
        win.textContent = `${playerTurn = playerTurn === "X" ? "X" : "O"} wins the game`
        run()
        line7.style.display = "block"

    }
    else if (column1.textContent !== "" && column2.textContent !== "" && column3.textContent !== "" && column4.textContent !== "" && column5.textContent !== "" && column6.textContent !== "" && column7.textContent !== "" && column8.textContent !== "" && column9.textContent !== "" && !win.textContent.includes("wins the game")) {
        win.textContent = `It's a draw!`
        remove()
        clickSound.pause()
        reset.style.display = "block"
        win.classList.toggle("none")
        turn.style.display = "none"
        drawSound.play()
        restart.style.display = "none"

    }
}


