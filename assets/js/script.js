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


// var slideImg = 1;
// showDivs(slideImg);

// function slideShow(n) {
//     showDivs(slideImg += n);
// }

// function showDivs(n) {
//     var i;
//     var x = document.getElementsByClassName("radio");
//     if (n > x.length) { slideImg = 1 }
//     for (i = 0; i < x.length; i++) {
//         x[i].ariaChecked = mixed;
//     }

// }






