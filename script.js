//start knop
let startButton = document.getElementById("start");
//check Button
let checkbutton = document.getElementById("check-btn");
// Kat/A/O Button
let buttons     = document.querySelectorAll('.task-btn-group');
//group button cats
let groupButton = document.querySelectorAll('.group-buttons');
//check button 2
let checkbuttons = document.getElementById("check-buttons");


if(startButton) {
    startButton.addEventListener("click", function() {
        console.log("click button");
        window.location.href = "woonkamer.html";
        document.body.style.backgroundImage = 'url("room.jpg")'
    })
}

for (const button of buttons) {
    button.addEventListener("click", handleButtonClick)
}

for (const button of groupButton) {
    button.addEventListener("click", handleButtonClicker)
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

function handleButtonClicker(evt) {
    groupButton.forEach(a => a.style.backgroundColor = "")
    evt.target.style.backgroundColor = "#d3d3d3"
    let char = evt.target.value
        
    document.getElementById("check-buttons").innerText = "✅"
    checkbuttons.addEventListener("click", handleCheckButtons)
}

function handleCheckButtons() {
    window.location.href = "kattenkamer.html"
}