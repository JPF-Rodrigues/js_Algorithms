function maxSubarraySum(arr1, num){

    var MaxSum = 0;
    var TempSum = 0;
    if(arr1.length < num) return null;
    for(let i = 0; i < num; i++ ){
        MaxSum += arr1[i];
    }
    TempSum = MaxSum;

    for(var j = num; j < (arr1.length); j++){
        console.log("Does it get here");

        TempSum = (TempSum - arr1[j-num]) + arr1[j];
        if(TempSum > MaxSum){
            MaxSum = TempSum;
            console.log(MaxSum);
        }   
    }
    return MaxSum;
}

maxSubarraySum([1,2,3,4,4,5,6,2], 3)

// [1,2,3,4,4,5,6,2]
//        -   -