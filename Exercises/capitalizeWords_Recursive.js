function capitalizeWords(arr){

        let capArr = [];

    function helperFunction(arrH){

        if(arrH.length === 0){
            return;
        }

        capArr.push(arrH[0].toUpperCase());
        return helperFunction(arrH.slice(1))
    }

    helperFunction(arr);

    console.log(capArr);

    return capArr;
}

let words = ['word', 'second', 'third']

capitalizeWords(words);