function minSubArrayLen(arr1, sum1){
    let firstSum = 0;
    let minLen = 0;
    let j = 0;
    let i = 0;
    for(; i < arr1.length; i++){

        firstSum += arr1[i];

        if(firstSum >= sum1){
            minLen = i + 1;
            //console.log(minLen);
            break;
        }
    }

    if(firstSum < sum1){
        console.log(`There isn't any ammount of numbers that sum to ${sum1}`);
        return 0;
    }
    while(i < arr1.length){
        
        if(firstSum < sum1){
            i++;
            if(i === arr1.length){
                break;
            }
            firstSum += arr1[i];
            console.log("This is the < SUM1 " + firstSum);
        }

        if(firstSum >= sum1){

            firstSum -= arr1[j];
            j++;
            console.log("This is the >= SUM1 " + firstSum);


        }

        if((i - j + 1) < minLen && firstSum >= sum1){
        
            minLen = (i-j) + 1;
        }

    }

    console.log(minLen);
    return minLen;

}

minSubArrayLen([2,3,1,2,4,3], 7);

// [2,3,1,2,4,3]
//          j i