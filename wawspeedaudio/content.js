
const speedsAllowed = [0.25, 0.5, 0.75, 1.0, 2.0, 3.0, 4.0];
var speedsAllowedIndex = 3;
var currentSpeed = speedsAllowed[speedsAllowedIndex];
const buttonMinusSpeed = document.createElement("button")
const buttonCurrentSpeed = document.createElement("button")
const buttonMoreSpeed = document.createElement("button")

function createButtons(){
    
    buttonMinusSpeed.innerHTML = "<<"
    buttonMinusSpeed.title = "Diminuir Velocidade"
    buttonMinusSpeed.classList.add("changeSpeedButton")
    buttonMinusSpeed.addEventListener("click", () => {
            if(speedsAllowedIndex > 0){
                speedsAllowedIndex -= 1;
                currentSpeed = speedsAllowed[speedsAllowedIndex]
                changeCurrentSpeedLabel();
                changeAudiosSpeed();
            }
    })

    buttonCurrentSpeed.classList.add("currentSpeedButton")
    buttonCurrentSpeed.title = "Velocidade Atual"
    changeCurrentSpeedLabel();

    
    buttonMoreSpeed.innerHTML = ">>"
    buttonMoreSpeed.title = "Aumentar Velocidade"
    buttonMoreSpeed.classList.add("changeSpeedButton")
    buttonMoreSpeed.addEventListener("click", () => {
        if(speedsAllowedIndex < 6){
            speedsAllowedIndex += 1;
            currentSpeed = speedsAllowed[speedsAllowedIndex]
            changeCurrentSpeedLabel();
            changeAudiosSpeed();
        }
           
    })


}

function changeCurrentSpeedLabel(){
    buttonCurrentSpeed.innerHTML = currentSpeed + "x";
}

function changeAudiosSpeed(){
    const audios = document.querySelectorAll("audio");
            console.log(audios)
            audios.forEach((audio) => {
                console.log(audio)
                audio.playbackRate = currentSpeed;
            })
}

const interval = setInterval(()=>{
    const header = document.querySelector("._3auIg")
    if(header){
           console.log(header)
           clearInterval(interval)
           
           createButtons();

           header.appendChild(buttonMinusSpeed)
           header.appendChild(buttonCurrentSpeed)
           header.appendChild(buttonMoreSpeed)

    }
}, 1000)


