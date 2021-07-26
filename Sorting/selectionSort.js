
function swap(arr, indx1 , indx2){
    let temp = arr[indx1];

    arr[indx1] = arr[indx2];
    arr[indx2] = temp;

    return arr;

}

function selectionSort(arr){


    for(let i = 0; i < arr.length; i++){

        var min = arr[i];
        var indexTemp = i;
        for(let j = i + 1; j < arr.length; j++ ){
            if(arr[j] < min){
                min = arr[j];
                indexTemp = j;
            }
        }

        if(indexTemp === i) continue;
        arr = swap(arr, i, indexTemp);
    }

    console.log(arr);
    return arr;

}


selectionSort([5, 6, 2, 78, 9]);


    // J is always equal to i + 1


//  i     j
// [5, 6, 2, 78, 9]

//     i         j
// [2, 6, 5, 78, 9]

 // nailed it x)
 