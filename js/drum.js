//best to select all
var noOfdrum = document.querySelectorAll(".drum").length;


//for mouse click play sound
for(var i=0; i<noOfdrum ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var clicked = this.innerHTML;
        playSound(clicked);

        animateButton(clicked);
    });
}


//keyboard listen to play sound
document.addEventListener("keypress",function(event){
    playSound(event.key);
    animateButton(event.key);
});


//to play sound
function playSound(key) {
    switch (key) {
        case "a":
            var tom1 = new Audio("/sounds/drum/tom-1.mp3");
            tom1.play();
            break;
            
        case "s":
            var tom2 = new Audio("/sounds/drum/tom-2.mp3");
            tom2.play();
            break;
        case "d":
            var tom3 = new Audio("/sounds/drum/tom-3.mp3");
            tom3.play();
            break;
        case "f":
            var tom4 = new Audio("/sounds/drum/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("/sounds/drum/crash.mp3");
            crash.play();
            break;
        case "k":
            var kick = new Audio("/sounds/drum/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var snare = new Audio("/sounds/drum/snare.mp3");
            snare.play();
            break;
    
        default:
            console.log(this.innerHTML)
            break;
    }
}

function animateButton(btnpress){
    var animatbtn = document.querySelector("." + btnpress);
    animatbtn.classList.add("pressed");

    setTimeout(function(){
    animatbtn.classList.remove("pressed");
    }, 100);
}
 