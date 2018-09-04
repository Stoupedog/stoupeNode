let i = 0;

setInterval(function() {
    if (i < 25) {
        console.log(i+1);
        i++;
    }
    else {
        clearInterval(this);
    }
}, 500);