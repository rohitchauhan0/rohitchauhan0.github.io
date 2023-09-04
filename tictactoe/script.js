let turnAudio = new Audio('turncut.mp3')
let boxes = document.querySelectorAll('.box')
let newGame = document.querySelector(".newgame")
let gameInfo = document.querySelector(".heading")
let overAudio = new Audio('over.mp3')
let winnerImg = document.querySelector(".winner-Img")
let winnerAudio = new Audio("winner.mp3")


let currentPlay = "X";
let gridGame;

let winningGamePosition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function swapTrun() {
    // return currentPlay  "X"?"0":"X";
    if (currentPlay === "X") {
        currentPlay = "0"
    }
    else {
        currentPlay = "X"
    }
    gameInfo.innerText = `Curent palyer ~ ${currentPlay}`

}

function initgame() {
    currentPlay = "X";
    gridGame = ["", "", "", "", "", "", "", "", ""]
    newGame.classList.remove('active')
    boxes.forEach((box, index) => {
        boxes[index].innerText = ""
        boxes[index].style.pointerEvents = "all"
        box.classList = `box box${index+1}`
    })
    winnerImg.style.display = "none"
    gameInfo.innerText = `Curent palyer ~ ${currentPlay}`
}
initgame()


function checkGameOver() {
    let ans = ""
    winningGamePosition.forEach((position) => {
        newGame.classList.add("active")
        if ((gridGame[position[0]] !== "" || gridGame[position[1]] !== "" || gridGame[position[2]] !== "") && (gridGame[position[0]] === gridGame[position[1]]) && (gridGame[position[1]] === gridGame[position[2]])) {
            if (gridGame[position[0]] === "X") {
                ans = "X"
            }
            else {
                ans = "0"
            }
            boxes.forEach((box)=>{
                box.style.pointerEvents = "none"
            })
            boxes[position[0]].classList.add("win")
            boxes[position[1]].classList.add("win")
            boxes[position[2]].classList.add("win")
            winnerImg.style.display = "block"
            winnerAudio.play()
        }
    })
    if(ans!==""){
        gameInfo.innerText = `Winnner player ~ ${ans}`
        newGame.classList.add("active")
        return
    }
     
    let count = 0;
    gridGame.forEach((box)=>{
        if (box !=="") {
            count++
        }
    })
    if(count === 9)
    {
        gameInfo.innerText = `Game Tied`
        newGame.classList.add("active")
        overAudio.play()
    }


}

function handleClick(index) {
    if (gridGame[index] === "") {
        boxes[index].innerText = currentPlay
        gridGame[index] = currentPlay
        boxes[index].style.pointerEvents = "none"
        turnAudio.play()
        swapTrun()
        checkGameOver()
    }

}

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        handleClick(index)
    })
})

newGame.addEventListener("click", initgame)

