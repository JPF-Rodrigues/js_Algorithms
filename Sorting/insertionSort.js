
// this works but it's wrong

function insertionSort(arr){

    for(var i = 1; i < arr.length ; i++){

        var currentVal = arr[i];

        for(var j = i -1; j >= 0 && arr[j] > currentVal ; j-- ){

            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;

    }

    console.log(arr);
    return arr;


}

insertionSort([3, 12, 5, 19, 1]);



//   j   i    
//  [3, 12, 5, 19, 1]

//      j   i    
//  [3, 12, 5, 19, 1]
//  [3, 5, 5, 19, 1]
//  [3, 5, 12, 19, 1]

//  [3, 5, 12, 19, 1]