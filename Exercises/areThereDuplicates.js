

function areThereDuplicates(){

    let ObjDup = {};

    for (var i = 0; i < arguments.length; i++) {
        if(!(arguments[i] in ObjDup)){
            ObjDup[`${arguments[i]}`] = 1;
        }
        else{
            console.log(`The argument ${arguments[i]} is a Duplicate.`);
            return true;
        }
    }
    console.log(ObjDup);
    console.log("There are't any duplicate values.");
    return false;
}


areThereDuplicates('a', 'b', 'c');