
function reverse(str){

    var inverse = [];

    let result = '';

    function helperInverse(strHelper){
        if(strHelper.length === 0) return;

        inverse.push(strHelper.charAt((strHelper.length) - 1));

        helperInverse(strHelper.slice(0, strHelper.length - 1)); //-(strHelper.length)
    }

    helperInverse(str);

    console.log(inverse);

    for(let i = 0; i < inverse.length; i++){

        result = result.concat(inverse[i]);
        
    }

    console.log(result);
    
    return result;
}

reverse("abcde");

// chatAt()