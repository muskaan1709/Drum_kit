for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        this.style.color = "black";
        setTimeout(function () {
            this.innerHTML.style.color="#E4BAD4";
        }, 100);
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "d":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "r":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "u":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "m":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "i":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "t":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        default: console.log(key);

    }

}

function buttonAnimation(currentkey) {
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}



