
// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

const isOdd = val => val % 2 !== 0;

function someRecursive(arrM, fooM){

    function helperFunction(arr, foo){

        if(arr.length === 0) return 0;

        let result = foo(arr[0]);

        return result + helperFunction(arr.slice(1), foo);

    }

    let Answer = helperFunction(arrM, fooM);

    if (Answer > 0){

        console.log("True");
        return true;

    }
    else{
        console.log("False");
        return false;
    }
    

}



someRecursive([1, 1, 2], isOdd);

    // someRecursive([1, 2, 3, 4], isOdd);
             //someRecursive([2, 3, 4], isOdd);