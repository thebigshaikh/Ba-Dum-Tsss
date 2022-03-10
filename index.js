"use strict";

let btns = document.querySelectorAll("button");
console.table(btns)
for(let i = 0; i < btns.length; i++){
    let b = btns[i];
    b.addEventListener("click", function(){
        console.log(this.innerHTML);
        let keyPressed = this.textContent;
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
    })
}

window.addEventListener("keydown", function(event){
    let path = "";
    switch(event.key){
        case 'w' || 'W':
            path = "/sounds/crash.mp3";
            break;
        
        case 'a' || 'A':
            path = "/sounds/kick-bass.mp3";
            break;

        case 's' || 'S':
            path = "/sounds/snare.mp3";
            break;

        case 'd' || 'D':
            path = "/sounds/tom-1.mp3"
            break;

        case 'j' || 'J':
            path = "/sounds/tom-2.mp3"
            break;

        case 'k' || 'K':
            path = "/sounds/tom-3.mp3"
            break;

        case 'l' || 'L':
            path = "/sounds/tom-4.mp3"
            break;

    }
    let sound = new Audio(path);
    sound.play();
}, true);   