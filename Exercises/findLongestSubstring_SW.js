

function findLongestSubstring (str1) {

    if(str1.length === 0) return 0;

    let j = 0;
    let i = 0;
    let Obj1 = {};
    let arr1 = [];
    let tempMax= -Infinity;

    for(; j < str1.length; j++ ){

        if(!(str1[j] in Obj1)){
            Obj1[`${str1[j]}`] = j;
            arr1[i] = str1[j];
            console.log(arr1.length);
            i++;
        }
        else{
            j = Obj1[`${str1[j]}`];
            Obj1 = {};
            arr1 = [];
            i = 0;
        }

        if(tempMax < arr1.length){
            tempMax = arr1.length;
            console.log(arr1);
        }

    }
    //console.log(tempMax);
    return tempMax;

}


findLongestSubstring ("thisishowwedoit");

// "thisishowwedoit"
//  ----
// 
// i can make an array that shortest substring
//  using an Object to verify the duplicate characters
    // and using the index of the repeated charater to remove anything that comes before it


// ACTUAL solution:
    // 1 - iterate through the string to find the first SubString
    // 2 - save that substring in an array
    // 3 - use an Object to verify when a char is not unique in the SubString, saving indexes as values
    // 4 - using the SW rewrite the array from the index where the duplicate char was found
    // 5 - repeat until the the end of the String