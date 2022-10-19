let mylogo = document.getElementById('myLogo');
document.getElementById('myButton').onclick = function () {
    mylogo.classList.toggle('fade');
}

// funzione per cambio colore radio input
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