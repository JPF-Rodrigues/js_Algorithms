function same(First_array, Second_array){

    let nonDoubleObj = {}
    let DoubleObj = {}

        // Store info in objects with a key value pair where the value if frequency
            // "of First_array" returns all values of the array
    for (thing of First_array){
        if(thing in nonDoubleObj) nonDoubleObj[thing]++;
        else  nonDoubleObj[thing] = 1;
    }


    for (thing of Second_array){
        if(thing in DoubleObj) DoubleObj[thing]++;
        else  DoubleObj[thing] = 1;
    }

        // This counter is necessary to check when to end the FOR cycle - it's incremented each loop run with the vale of the frequency associated with the key being used
    let counter = 0


        // using the logic that checks 
    for(key in nonDoubleObj){
        keyPo2 = key **2 ;

        if(keyPo2 in DoubleObj && nonDoubleObj[`${key}`] === DoubleObj[`${keyPo2}`]){
            counter+=nonDoubleObj[`${key}`];
            if(counter === First_array.length){
                console.log("Seems like it's working");
                return true;
            }
        }

        else {
            console.log("It didn't work at all");
            return false;
        }
    }

}

let array1 = [1,2,3,1,3]
let array2 = [1,4,9,1,9]

same(array1, array2)