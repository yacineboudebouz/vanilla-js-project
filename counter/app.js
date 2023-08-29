// const increase = document.querySelector(".increase");
// const reset = document.querySelector(".reset");
// const decrease = document.querySelector(".decrease");
const value = document.getElementById("value");
var number = 0;
const btns = document.querySelectorAll(".btn");


btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            number--;
        } else if (styles.contains("increase")) {
            number++;
        } else {
            number = 0;
        }
        if (number > 0) {
            value.style.color = "green";
        }
        if (number < 0) {
            value.style.color = "red";
        }
        if (number == 0) {
            value.style.color = "#222"
        }
        value.textContent = number;
    })
})


// increase.addEventListener('click', function() {
//     number++;
//     value.textContent = number;
// })

// decrease.addEventListener('click', function() {
//     number--;
//     value.textContent = number;
// })
// reset.addEventListener('click', function() {
//     number = 0;
//     value.textContent = number;
// })

// if (number > 0) {
//     value.style.color = "green";
// }