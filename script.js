let timeLeft = 1500;
function start() {
    setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            let m = Math.floor(timeLeft / 60);
            let s = timeLeft % 60;
            document.getElementById('timer').innerText = `${m}:${s < 10 ? '0' : ''}${s}`;
        }
    }, 1000);
}
