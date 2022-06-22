function time(){
    let newTime = new Date();

    document.querySelector('.hours').textContent = newTime.getHours()
    document.querySelector('.minuts').textContent = newTime.getMinutes()
    document.querySelector('.second').textContent = newTime.getSeconds()
}

time()

setInterval(function(){
    time()
}, 1000)