function reduceTime() {let time = document.getElementById('timer')
time.textContent -= 40
if (time.textContent==0) {
    alert('You won')
}}
setInterval(reduceTime,1000)