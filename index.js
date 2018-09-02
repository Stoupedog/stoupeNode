let i = 0;

setInterval(function() {
    if (i < 10) {
        console.log(i+1);
        i++;
    }
    else {
        clearInterval(this);
    }
}, 500);