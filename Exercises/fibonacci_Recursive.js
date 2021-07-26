

function fib(pos){

    if(pos === 1 || pos === 2) return 1;

    return fib(pos - 1) + fib(pos-2);
}

fib(4);

// base case is pos <= 2
// fib(4)
    // fib(3) + fib(2)
        // fib(3) = fib(2) + fib(1)
        // fib(2) = 1

