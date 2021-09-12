var numberOfButtons = document.querySelectorAll(".button").length;

for(var i=0;i< numberOfButtons; i++){
    document.querySelectorAll(".button")[i].addEventListener("click",function() {
        var buttonStyle = this.innerHTML;
        sound(buttonStyle);
        animation(buttonStyle);       
    });
}
//code for when a particular key is pressed then which sound and aniamtion is occured on that key of particular event
document.addEventListener("keypress", function (event) {
    sound(event.key);
    animation(event.key);
});
//function to display animation of a particular key
function animation(currentKey) {
    var activeanimation = document.querySelector("." + currentKey);
    activeanimation.classList.add("animation");

    setTimeout(function(){
        activeanimation.classList.remove("animation");
    },100);
}
//function to play sounds of a Key
function sound(key) {
    switch(key){
        case "w":
            var wsound = new Audio("Audios/w.mp3");
            wsound.play();
            break;
        case "a":
            var asound = new Audio("Audios/a.mp3");
            asound.play();
            break;
        case "s":
            var ssound = new Audio("Audios/s.mp3");
            ssound.play();
            break;
        case "d":
            var dsound = new Audio("Audios/d.mp3");
            dsound.play();
            break;
        case "j":
            var jsound = new Audio("Audios/j.mp3");
            jsound.play();
            break;
        case "k":
            var ksound = new Audio("Audios/k.mp3");
            ksound.play();
            break;
        case "l":
            var lsound = new Audio("Audios/l.mp3");
            lsound.play();
            break;
        default: console.log(key);
    }
}