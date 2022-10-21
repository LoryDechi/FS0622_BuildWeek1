//FUNZIONE PER L'APERTURA DEL MENU A TENDINA
var menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";
function togglemenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "400px";
    }
    else {
        menuList.style.maxHeight = "0px";
    }
}
// FUNZIONE CHE REGOLA IL CAMBIO COLORE DEI DOTS NELLO SLIDER
function changeColor() {
    document.getElementById('label_gray').style.backgroundColor = 'orangered';
}
window.onload = changeColor();
document.getElementById('click').addEventListener('click', () => {
    document.getElementById('label_gray').style.backgroundColor = 'lightgray';
})
document.getElementById('label_gray').addEventListener('click', () => {
    document.getElementById('label_gray').style.backgroundColor = 'orangered';
})


let sliderImages = document.getElementsByClassName("img_slide");
let arrowRight = document.getElementById("toggle-btn");

current = 0;

function slideContainer(a) {
    // Clear all images
    function reset() {
       for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none"; 
        }
    }
    if(a){
    // Initial slide
    function startSlide() {
        reset();
        sliderImages[0].style.display = "block";
        sliderImages[1].style.display = "block";
        }
        // Show next
        function slideRight() {
            reset();
            sliderImages[current + 1].style.display = "block";
            sliderImages[current + 2].style.display = "block";
            current++;
        }
        // Right arrow click
        arrowRight.addEventListener("click", function () {
            if (current === sliderImages.length - 2) {
                current = 0;
            }
            slideRight();
        });
        startSlide();  
    }else{
     // Initial slide
    function startSlide() {
        reset();
        sliderImages[0].style.display = "block";
        sliderImages[1].style.display = "block";
        sliderImages[2].style.display = "block";
        sliderImages[3].style.display = "block";
        }
    // Show next
    function slideRight() {
        reset();
        sliderImages[current + 1].style.display = "block";
        sliderImages[current + 2].style.display = "block";
        sliderImages[current + 3].style.display = "block";
        sliderImages[current + 4].style.display = "block";
        current++;
    }
    // Right arrow click
    arrowRight.addEventListener("click", function () {
        if (current === sliderImages.length - 4) {
            current = 0;
        }
        slideRight();
    });
    startSlide(); 
    }
   }
slideContainer(a);
var a = window.matchMedia("(min-width: 565px)");


