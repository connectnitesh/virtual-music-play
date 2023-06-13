let noOfpiano = document.querySelectorAll('.piano').length;

//for mouse click play sound
for(let i=0; i<noOfpiano ; i++){
    document.querySelectorAll(".piano")[i].addEventListener("click",function(){
        let clicked = this.innerHTML;
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
            let C4 = new Audio("/sounds/piano/C4.mp3");
            C4.play();
            break;
            
        
        case "w":
            let Db4 = new Audio("/sounds/piano/Db4.mp3");
            Db4.play();
            break;
            
        
        case "s":
            let D4 = new Audio("/sounds/piano/D4.mp3");
            D4.play();
            break;
            
        
        case "e":
            let Eb4 = new Audio("/sounds/piano/Eb4.mp3");
            Eb4.play();
            break;
            
        
        case "d":
            let E4 = new Audio("/sounds/piano/E4.mp3");
            E4.play();
            break;
            
        
        case "f":
            let F4 = new Audio("/sounds/piano/F4.mp3");
            F4.play();
            break;
            
        
        case "t":
            let Gb4 = new Audio("/sounds/piano/Gb4.mp3");
            Gb4.play();
            break;
            
        
        case "h":
            let G4 = new Audio("/sounds/piano/G4.mp3");
            G4.play();
            break;
            
        
        case "y":
            let Ab4 = new Audio("/sounds/piano/Ab4.mp3");
            Ab4.play();
            break;
            
        
        case "j":
            let A4 = new Audio("/sounds/piano/A4.mp3");
            A4.play();
            break;
            
        
        case "u":
            let Bb4 = new Audio("/sounds/piano/Bb4.mp3");
            Bb4.play();
            break;
            
        
        case "k":
            let B4 = new Audio("/sounds/piano/B4.mp3");
            B4.play();
            break;
            
        
        case "l":
            let C5 = new Audio("/sounds/piano/C5.mp3");
            C5.play();
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
 