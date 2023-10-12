let userInput = document.getElementById("user-input")
let playButton = document.getElementById("play-button")
let resultArea = document.getElementById("result-text")
let resetButton = document.querySelector(".button-reset")
let chanceArea = document.getElementById("chance-area")
let resultAreaImg = document.querySelector(".main-img")
let history=[]
let target = 0
let count = 5
let photoCount = 1
let gameOverChk = false

playButton.addEventListener("click",play)
resetButton.addEventListener("click",reset)
userInput.addEventListener("focus", function(){
    userInput.value = ""
})
pickRandomNum()
//NumberChk(29, 30)

function reset() {
    userInput.value = ""
    gameOverChk=false
    count = 5
    playButton.disabled = false
    history=[]
    pickRandomNum()    
    displayChance()
    resultAreaImg.src = "/images/CXzdSLsUMAA2TfO.jpeg"
    console.log(resultAreaImg.src)
    resultArea.textContent = " 게임 다시 시작!"
}
function pickRandomNum(){
    target = Math.floor(Math.random() * 100)+1
    console.log("정답", target)
}
function displayChance(){

    chanceArea.textContent = `Chances left:${count}`
}
function play(){
    let userValue = userInput.value

    if (userValue<1 || userValue>100){
        resultAreaImg.src = "/images/shot.jpeg"
        resultArea.textContent="Enter number between 1 and 100!!"
        return;
    }

    if (history.includes(userValue)){
        resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요."
            return;
    }
    count --; 
    displayChance()
    console.log(userValue) 
    if(userValue < target){
        resultAreaImg.src = "/images/nope.gif"
        resultArea.textContent ="Up!"
    }else if (userValue > target){
        resultAreaImg.src = "/images/nope.gif"
        resultArea.textContent ="Down!"
    }else {
        resultAreaImg.src = "/images/success.gif"
        resultArea.textContent ="You made it!!"
        playButton.disabled = true
    }

    history.push(userValue)
    console.log(history)

    if(count < 1 && playButton.disabled == false){
        gameOver()
    }
}
function gameOver(){
    resultAreaImg.src = `/images/${photoCount}.gif`
    resultArea.textContent ="You Die!!"
    playButton.disabled = true
    photoCount++
    if (photoCount > 5){photoCount=1}
}
/*
function NumberChk() {
let number = userInput.value

console.log(number,target)


if ( count <= 0){
    console.log("You have run out of chances")
    return;
}

if ( number > 100 || number < 1){
    console.log("Please put number between 1 and 100")
    
}
else if ( number < target ){
    console.log("Up!")
    count = count - 1
}
else if ( number > target){
    console.log("Down!")
    count = count - 1
}
if ( number == target){
    console.log("That's Right!")
    count = 5
    pickRandomNum()
}
console.log(count)
    
}
*/