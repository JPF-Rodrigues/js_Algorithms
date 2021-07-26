
function collectStrings(obj){

    let resultArr = [];

    function helperFunction(hObj){

        for(let key in hObj){
            if(typeof hObj[`${key}`] === 'string'){

                resultArr.push(hObj[`${key}`]);
            }

            if(typeof hObj[`${key}`] === 'object' && !Array.isArray(hObj[`${key}`])){
                helperFunction(hObj[`${key}`]);
            }

        }
    }

    helperFunction(obj);
    console.log(resultArr);
    return resultArr;

}

const obj1 = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj1);