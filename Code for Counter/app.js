// set initial value to zero
let count = 0;

// select value, buttons, and container
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const increaseByTenBtn = document.querySelector(".increase-by-ten");
const decreaseByTenBtn = document.querySelector(".decrease-by-ten");
const randomChangeBtn = document.querySelector(".random-change");
const resetBtn = document.querySelector(".reset");

// I added continuous increase and decrease function here
let continuousInterval;

// I added event listener to the decrease and increase buttons here
btns.forEach(function (btn) {
    btn.addEventListener("mousedown", function (e) {
        if (e.currentTarget.classList.contains("decrease")) {
            continuousInterval = setInterval(function () {
                count--;
                updateDisplay();
            }, 200); 
        } else if (e.currentTarget.classList.contains("increase")) {
            continuousInterval = setInterval(function () {
                count++;
                updateDisplay();
            }, 200); 
        }
    });

    btn.addEventListener("mouseup", function () {
        clearInterval(continuousInterval);
    });
});

// I added event listener to the increase by 10 button here
increaseByTenBtn.addEventListener("click", function () {
    count += 10;

  
    updateDisplay();
});

// I added event listener to the decrease by 10 button here
decreaseByTenBtn.addEventListener("click", function () {
    count -= 10;

    // update the display and color
    updateDisplay();
});

// I added event listener to the random change button here
randomChangeBtn.addEventListener("click", function () {
    const randomValue = Math.floor(Math.random() * 100) - 50; 

    count += randomValue;

    updateDisplay();
});

// I added event listener to the reset button here
resetBtn.addEventListener("click", function () {
    count = 0;

    updateDisplay();
});

// I added the function to update display and color here
function updateDisplay() {
    if (count > 0) {
        value.style.color = "green";
    } else if (count < 0) {
        value.style.color = "red";
    } else {
        value.style.color = "#222";
    }

    value.textContent = count;
}
