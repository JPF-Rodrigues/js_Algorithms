
function capitalizeFirst(arrMain){

    let newArr = [];


    function helperFunction(arr){

        let noCharStr = '';
        let charToUp = '';
        let strToPush = '';

        if(arr.length === 0){
            return;
        }

        charToUp = arr[0].charAt(0).toUpperCase();
        noCharStr = arr[0].slice(1);

        strToPush = charToUp.concat(noCharStr);

        console.log(strToPush);

        newArr.push(strToPush);

        return helperFunction(arr.slice(1));

    }

    helperFunction(arrMain);

    return newArr;

    
}

capitalizeFirst(['car','taco','banana']);


    // Steps to capitalize
        // 1 - get first character
        // 2 - store the word without the 1st character
        // 3 - toUpper that character and store in var
        // 4 - Concat the word with the upper char
        // 5 - push it to the new array