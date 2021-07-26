function getDigit(num, pos){

    // divide the number a bunch of times by 10 until the result is less than 1
        // store a counter of that
        // use it to


        let result;
        let remainder = 0;


        for(let i = 1; i <= pos + 1; i++){

            num = num - remainder;

            result = (num % (10**i))/ (10**(i-1));
           
            remainder = ((num) % (10**i));

        }
            
        return result;

}


function digitCount(num){
    if(num === 0) return 1;

    for(var numDec = 0; num >= 1 ; numDec++){
        num = num/10;
    }

    return numDec;
}

function maxDigit(arr){

    let tempMax = 0;

    for (num of arr){
        if(digitCount(num) > tempMax) tempMax = digitCount(num);
    }
    return tempMax;
}

function radixSort(arr){

    let maxDigitCount = maxDigit(arr);

    for(let k = 0; k < maxDigitCount; k++){

        let digitBuckets = Array.from({length: 10}, () => []);

        for(let i = 0; i < arr.length; i++){
           let digit = getDigit(arr[i], k);
           digitBuckets[digit].push(arr[i]);
        }

        arr = [].concat(...digitBuckets);

    }
    console.log(arr);
    return arr;
}

radixSort([50,3,498,612,32,2345,10,12]);
