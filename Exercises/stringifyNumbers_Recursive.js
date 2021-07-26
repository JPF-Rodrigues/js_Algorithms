
function stringifyNumbers(Obj){
    var newObj = {};

    function helperFunction(hObj){
        let ObjStr = {};
        for (let key in hObj){


            if(typeof hObj[`${key}`] === 'number'){
                ObjStr[`${key}`] = hObj[`${key}`].toString();
            }

            else if (typeof hObj[`${key}`] === 'object' && !Array.isArray(hObj[`${key}`])){

                ObjStr[`${key}`] = helperFunction(hObj[`${key}`]);

            }

            else{

                ObjStr[`${key}`] = hObj[`${key}`];

            }
    
        }

        return ObjStr;

    }

    newObj = helperFunction(Obj);

    console.log(newObj);

    return newObj;
}




// 1 - transverse obj
// 2 - check type of data
    // 3 - if number transform to str
    // 4 - if type Obj return stringifynum with that Obj
    // 5 - else store as is
    //  


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


stringifyNumbers(obj);
