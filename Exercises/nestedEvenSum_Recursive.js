
    // 1 - transverse each key in the object, reading the values
    // 2 - check if it's a number, another Obj or another datatype
        // 2.1 - If it's a Number:
                                // 2.1.1 - check if it's even
                                // 2.1.2 - add it to a sum var
        // 2.2 - If it's another dataType skip it
        // 2.2 - If it's an Obj go to it and transverse it

// NOTES:
            // Gotta use a for key of Obj to get values of the keys
            // need to have prepared a var to store num of keys in each Obj


function nestedEvenSum(Obj){

    let sumArr = [];
    var sum = 0;

    function helperFunction(hObj){

        
        for(var key in hObj){

            let currentValue = hObj[`${key}`];
            if(typeof currentValue === 'object' && currentValue !== null){

                console.log(`Should be OBJ: \n ${currentValue} \n` + typeof currentValue)
                helperFunction(currentValue);
            }

            else if(typeof currentValue === 'number' && currentValue % 2 === 0){

                console.log(`Should be Num: \n ${currentValue} \n` + typeof currentValue)
                sumArr.push(currentValue);

            }
            else{
                console.log(`Should be Inv: \n ${currentValue} \n` + typeof currentValue)
            }

        }

    }
    
    helperFunction(Obj);

    sumArr.forEach(function(number){
        console.log("In the for LOOP!: " + number);
        sum += number;
    });
    console.log(sum);
    return sum;

}

var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }

  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  


nestedEvenSum(obj2);
