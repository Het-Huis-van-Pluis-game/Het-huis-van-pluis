//start knop
let startButton = document.getElementById("start")
let checkbutton = document.getElementById("check-btn")
let buttons     = document.querySelectorAll('.task-btn-group');

if(startButton) {
    startButton.addEventListener("click", function() {
        console.log("click button");
        // window.location.href = "woonkamer.html";
        document.body.style.backgroundImage = 'url("room.jpg")'
    })
}

for (const button of buttons) {
    button.addEventListener("click", handleButtonClick)
}

function handleButtonClick(evt) {
    buttons.forEach(b => b.style.backgroundColor = "")
    evt.target.style.backgroundColor = "#d3d3d3"
    let char = evt.target.value
    if(char != "check") {
        document.getElementById('audio_play'+char).play()
    }
    
    document.getElementById("check-btn").innerText = "✅"
    checkbutton.addEventListener("click", handleCheckButton)
}

function handleCheckButton() {
    window.location.href = "cats.html"
}