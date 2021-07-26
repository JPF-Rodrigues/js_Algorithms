// check the frequency of integers between two numbers

function sameFrequency(num1, num2){

    let Objnum1 = {}
    let Objnum2 = {}

        // converting to strings
    let temp1 = String(num1);
    let temp2 = String(num2);

    if (temp1.length !== temp2.length){
        console.log('\nThe numbers do not have the same frequency cause they are of different decimal places.\n')
        return false;
    }

    for(let number of temp1){

        if(!(number in Objnum1)){
            Objnum1[`${number}`] = 1;
        }
        else{
            Objnum1[`${number}`] += 1;
        }

    }

    for(let number of temp2){

        if(!(number in Objnum2)){
            Objnum2[`${number}`] = 1;
        }
        else{
            Objnum2[`${number}`] += 1;
        }

    }

    for(let key in Objnum1){
        if(!(key in Objnum2) || (Objnum1.key !== Objnum2.key)){
            return false;
        }
    }

    return true;
}

sameFrequency(123, 112);