

//        i
// [1,2,2,4,5,6,7,8] - 5.5
//              j


function averagePair(arr1,average1){

    let pointerI = 0;
    let pointerJ = arr1.length -1;

    while(pointerI < pointerJ){

        var tempAverage = (arr1[pointerI] + arr1[pointerJ])/2;

        if(tempAverage === average1){
            console.log(tempAverage);
            return true;
        }

        console.log(tempAverage);

        if(average1 > tempAverage) pointerI++;

        if(average1 < tempAverage) pointerJ--;

    }

    console.log("There isn't any pair that matches the Average provided");
    return false;

}

averagePair([1,2,2,4,5,6,7,8], 5.5);