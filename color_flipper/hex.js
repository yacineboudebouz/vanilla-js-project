const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


const btn = document.getElementById('btn');
const color = document.querySelector(".color");


btn.addEventListener('click', function() {
    var hex;
    hex = getHexCode();
    document.body.style.backgroundColor = hex;
    color.textContent = hex;

});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

function getHexCode() {
    let code = '#';
    for (let i = 0; i < 6; i++) {
        var random = getRandomNumber();
        code += hex[random];
    }
    return code;
}