

function productOfArray(arr1){

    if(arr1.length === 0) return 1;

    return arr1[0] * productOfArray(arr1.slice(1));

}

productOfArray([1, 2, 3]);

// base case if arr1 has no more values in it return


// [1, 2, 3]
    // 1 * productOfArray([2, 3])
                // 2 * productOfArray([3])
                            // 3 * productOfArray([])
                                    //  1