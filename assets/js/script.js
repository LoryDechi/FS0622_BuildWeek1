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


// Script per la gestione e il funzionamento dello slider

let sliderImages = document.getElementsByClassName("img_slide");
let arrowRight = document.getElementById("toggle-btn");
currentImg = 0;

function slideContainer(a) {
    // Reset di tutte le immagini
    function reset() {
        for (let i = 0; i < sliderImages.length; i++) {
            sliderImages[i].style.display = "none";
        }
    }
    if (a) {
        // Immagini mostrate inizialmente
        function startSlide() {
            reset();
            sliderImages[0].style.display = "block";
            sliderImages[1].style.display = "block";
        }
        // funzione che cambia il display allo scorrimento
        function slideRight() {
            reset();
            sliderImages[currentImg + 1].style.display = "block";
            sliderImages[currentImg + 2].style.display = "block";
            currentImg++;
        }
        // funzione che al click scatena l'evento
        arrowRight.addEventListener("click", function () {
            if (currentImg === sliderImages.length - 2) {
                currentImg = 0;
            }
            slideRight();
        });
        startSlide();
    } else {
        // Immagini mostrate inizialmente in caso di cambio Viewport
        function startSlide() {
            reset();
            sliderImages[0].style.display = "block";
            sliderImages[1].style.display = "block";
            sliderImages[2].style.display = "block";
            sliderImages[3].style.display = "block";
        }
        // funzione che cambia il display allo scorrimento con Viewport piu grande di 576
        function slideRight() {
            reset();
            sliderImages[currentImg + 1].style.display = "block";
            sliderImages[currentImg + 2].style.display = "block";
            sliderImages[currentImg + 3].style.display = "block";
            sliderImages[currentImg + 4].style.display = "block";
            currentImg++;
        }
        // funzione che al click scatena l'evento
        arrowRight.addEventListener("click", function () {
            if (currentImg === sliderImages.length - 4) {
                currentImg = 0;
            }
            slideRight();
        });
        startSlide();
    }
}
slideContainer(a);
// Aggiunta di un Breakpoint per far subentrare la seconda funzione al cambio Viewport
var a = window.matchMedia("(min-width: 565px)");

