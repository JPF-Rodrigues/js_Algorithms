function swap(arr, idx1, idx2){

    let temp = arr[idx2];
    arr[idx2] = arr[idx1];
    arr[idx1] = temp;
    return arr;

}

function bubbleSort(arr){

    let i = 0;
    let counterLen = 0;


    while(counterLen < arr.length-1){

        let j = i + 1;

        console.log("This is I: " + i + "THIS IS J:" + j);
        console.log("");
        console.log("This is COUNTER: " + counterLen);
        console.log("");

        console.log("This ARRAY LEN!: " + arr.length);
        console.log("");



        if( arr[i] > arr[j] ){
           arr = swap(arr, i, j);
        }

        i++;

        if(j === (arr.length - counterLen) - 1){
            i = 0;
            counterLen++;
        }
    }

    console.log(arr);

}

bubbleSort([29, 10, 14, 30, 37, 14, 18]);



//   i   j
// [29, 10, 14, 30, 37, 14, 18]

//       i   j
// [10, 29, 14, 30, 37, 14, 18]

//           i   j
// [10, 14, 29, 30, 37, 14, 18]

//               i   j
// [10, 14, 29, 30, 37, 14, 18]

//                   i   j
// [10, 14, 29, 30, 37, 14, 18]


//                       i   j  
// [10, 14, 29, 30, 14, 37, 18]

//                           i   
// [10, 14, 29, 30, 14, 18, 37]
