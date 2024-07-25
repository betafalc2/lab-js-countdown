const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startingButton = document.getElementById("start-btn");

startingButton.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {

  document.getElementById("start-btn").disabled = true;

  const countDown = setInterval(function () {
    remainingTime--;
    
    let timer2 = document.getElementById("time");
    timer2.innerHTML = remainingTime;

    if (remainingTime === 0) {
      clearInterval(countDown);
      showToast();
    }
  }, 1000)


}


// ITERATION 3: Show Toast
function showToast(message) {
  
  const toast = document.querySelector(".toast");
  toast.classList.add("show");
  
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

}
