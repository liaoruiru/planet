document.addEventListener('touchstart', function () {
function audioAutoPlay() {
var audio = document.getElementById('audio');
audio.play();
}
audioAutoPlay();
});

let header = document.querySelector("header");
window.addEventListener("scroll", () =>{
    if(window.pageYOffset != 0){
        header.style = "  -webkit-box-shadow: 3px 3px 5px 1px #757474; box-shadow: 3px 3px 5px 1px #757474;";
    }else{
        header.style = "";
    }
})