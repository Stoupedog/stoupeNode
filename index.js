let i = 0;

setInterval(function() {
    if (i < 1000) {
        console.log(i+1);
        i++;
    }
    else {
        clearInterval(this);
    }
}, 500);