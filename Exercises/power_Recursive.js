function power(num, pow1){

    if(pow1 === 0){
        return 1;
    }

    return num * power(num, pow1 - 1 );
}

// need a base case
// need a return

    //power is num * num n number of times

power(2, 3);

// 2 * 4
        // 2 * 2
                // 2 * 1