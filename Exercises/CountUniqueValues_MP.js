// Create a function that counts unique values in an array using mutiple pointers
    // these arrays are ordered and and composed of numeric values

    function countUniqueValues(arr1){
    
        if(arr1.length === 0) return 0;
        
        var Ucounter = 1;
    
        for(let i = 0; i < (arr1.length -1); i++){
    
            var pointer1 = i;
            var pointer2 = i + 1;
    
            if(arr1[pointer1] !== arr1[pointer2]){
                Ucounter++;
            }
        }
        console.log('Ammount of Unique Values: ' + Ucounter);
        return Ucounter;
    }

countUniqueValues([3,3,3 ,2 ,2, 1, 1 ,1, 1,0, -1, -1, -2, -2, -2, -4]);