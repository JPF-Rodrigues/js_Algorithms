
function swap(arr, indx1 , indx2){
    let temp = arr[indx1];

    arr[indx1] = arr[indx2];
    arr[indx2] = temp;

    return arr;

}


function pivot(arr, sindx = 0, eindx =  arr.length - 1){

    var curr = arr[sindx];
    var pivotindx = sindx;
   
    for(let i = sindx + 1; i <= eindx ; i++){

        if(arr[i] < curr) {

            pivotindx++;
            swap(arr, i, pivotindx);
            
        }

    }

    swap(arr, sindx, pivotindx);
    return pivotindx;
}

//

function quickSort(arr, sIndx = 0, eIndx = arr.length - 1){

    if(sIndx < eIndx){       

        let trueIndx = pivot(arr, sIndx, eIndx);
        quickSort(arr, sIndx, trueIndx - 1);
        quickSort(arr, trueIndx + 1, eIndx);
        console.log(sIndx);
        console.log(eIndx);
    
    }

    console.log(arr);
    return arr;

}

quickSort([1,4,2,9,6,3]);