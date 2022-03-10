"use strict";

let btns = document.querySelectorAll("button");
console.table(btns)

for(let i = 0; i < btns.length; i++){
    let b = btns[i];
    b.addEventListener("click", function(){
        
        let keyPressed = this.textContent;
        console.log(this.innerHTML);
        buttonPressSound(keyPressed);
        animation(this.innerHTML);
    })
}

window.addEventListener("keydown", function(event){
    keyPressedSound(event);
    // setTimeout(animation(event.key.toLowerCase()),1000);
    animation(event.key.toLowerCase());
}, true);   



let buttonPressSound = (keyPressed) => {
    let path = "";
    switch(keyPressed){
        case 'w':
            path = "/sounds/crash.mp3";
            break;
        
        case 'a':
            path = "/sounds/kick-bass.mp3";
            break;

        case 's':
            path = "/sounds/snare.mp3";
            break;

        case 'd':
            path = "/sounds/tom-1.mp3"
            break;

        case 'j':
            path = "/sounds/tom-2.mp3"
            break;

        case 'k':
            path = "/sounds/tom-3.mp3"
            break;

        case 'l':
            path = "/sounds/tom-4.mp3"
            break;

    }
    let sound = new Audio(path);
    sound.play();

}

let keyPressedSound = (event) => {
    let path = "";
    console.log(event);
    switch(event.code){
        case "KeyW": //'w' || 'W':
            path = "/sounds/crash.mp3";
            break;
        
        case "KeyA":
            path = "/sounds/kick-bass.mp3";
            break;

        case  "KeyS":
            path = "/sounds/snare.mp3";
            break;

        case "KeyD":
            path = "/sounds/tom-1.mp3"
            break;

        case "KeyJ":
            path = "/sounds/tom-2.mp3"
            break;

        case "KeyK":
            path = "/sounds/tom-3.mp3"
            break;

        case "KeyL":
            path = "/sounds/tom-4.mp3"
            break;
    }
    let sound = new Audio(path);
    sound.play();
}


let animation = (classname) =>{
    console.log(classname);
    document.querySelector("." + classname).classList.add("pressed");
    // console.log(document.querySelector("." + classname).classList);
    setTimeout(()=>{
        document.querySelector("." + classname).classList.remove("pressed");
    }, 100 );

};