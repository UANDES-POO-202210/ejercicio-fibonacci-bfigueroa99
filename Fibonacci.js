

function Fibonacci(r,x,y){
    console.log(r);
    r = x+y;
    x = y;
    y = r;
    if (r > 100000) {
        return 0;
    } 
    Fibonacci(r,x,y);
}

const x = 0;
const y = 1;
const r = 0;
Fibonacci(r,x,y);