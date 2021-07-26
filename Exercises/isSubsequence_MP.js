

function isSubsequence(str1, str2) {

    let str1_size = str1.length;
    let pointerJ = str1.length - 1;
    var flagTrue = [];
    for(let i = 0; i < str2.length; i++){
        if(str2[i]===str1[0]){
            pointerJ = pointerJ + i;
            let J = str1.length - 1;
            let pointerI = i;
            let Ip = 0;
            let counter = 1;
            while(Ip < J + 1){
                counter += 1;
                console.log(str1[Ip]);
                console.log(str2[pointerI]);
                console.log(str1[J]);
                console.log(str2[pointerJ]);
                if(str1[Ip] === str2[pointerI]){ 
                    pointerI++;
                    Ip++;
                }
                else {
                    console.log("Try Next occurence of str1[0]!");
                    i = i + str1.length - 1;
                    break;
                }
                if (str1[J] === str2[pointerJ]){ 
                    pointerJ--;
                    J--;
                }
                else {
                    console.log("Try Next occurence of str1[0]!");
                    i = i + str1.length - 1;
                    break;
                }
                if (str1.length % 2 === 1 && Ip === Math.floor(str1.length/2) && J === Math.floor(str1.length/2)){
                    Ip = Ip - 2;
                    pointerI = pointerI - 2;

                }
                if(counter === str1.length){
                    flagTrue.push(1);
                    console.log(flagTrue[0]);
                    continue;
                }
               
            }

        }
        console.log(flagTrue[0]);
        if(flagTrue[0] === 1){
            console.log(`The word ${str1} is a SubSequence of ${str2}`);
            return true;
        }
        else if(flagTrue !== 1){
            console.log(`The word ${str1} is not a SubSequence of ${str2}`);
            return false;
        }
    }

}

str1 = 'abc'
str2 = 'abd'
isSubsequence(str1, str2);

//  Word to find "HELLO"
//  
//  i   j
//  hello world
//
//