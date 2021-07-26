function merge(arr1, arr2){

    var i = 0;
    var j = 0;
    var resultArr = [];

    while(i < arr1.length && j < arr2.length){


        if(arr1[i] < arr2[j]){
            resultArr.push(arr1[i]);
            i++;
            

        }
        if(arr1[i] >= arr2[j]){
            resultArr.push(arr2[j]);
            j++;
            
        }

    }

    while(j < arr2.length){
        resultArr.push(arr2[j]);
        j++;
    }

    while(i < arr1.length){
        resultArr.push(arr1[i]);
        i++;
    }

    console.log(resultArr);
    return resultArr;

}

//////////////////////////////////////////////////////////////////////////////////

function mergeSort(arr){
 

    if(arr.length <=1) return arr;

    var arr1 = mergeSort(arr.slice(0, Math.floor(arr.length/2)));
    var arr2 = mergeSort(arr.slice(Math.floor(arr.length/2)));

    let result = merge(arr1, arr2);
    console.log(result);
    return result;


}

mergeSort([ 5, 3, 2, 4, 6, 1]);