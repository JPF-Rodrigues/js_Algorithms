// already takes in a sorted array

    // 


function binarySearch(arr, value){

    var start = 0;
    var end = (arr.length)-1;
    var middle = Math.floor((start + end)/2);
    let i = 0;
    while(start < end){
        
        console.log(" Value of START: " + start);
        console.log(" Value of END: " + end);
        console.log("value of index MID: " + middle);
        
        if(value > arr[middle]){
            start = middle + 1;
            middle = Math.floor((start + end)/2);
        }

        if(value < arr[middle]){
            end = middle - 1;
            middle = Math.floor((start + end)/2);
        }

        if(value === arr[middle]){
            console.log(middle);
            return middle;
        }
        i++;

    }

    console.log(-1);
    return -1;

}


binarySearch([1, 2, 3, 4, 5, 6, 7 , 9, 10, 11, 12, 13, 14, 15], 8);


    //                       S          M            E
    // [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15]