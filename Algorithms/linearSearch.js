function linearSearch(arr, value){

    for(var i = 0; i< arr.length ; i++){
        
        if(arr[i] === value){
            console.log(i);
            return i;

        }

    }
    console.log(-1);
    return -1;
}

linearSearch([1, 2, 3, 4, 5], 1);