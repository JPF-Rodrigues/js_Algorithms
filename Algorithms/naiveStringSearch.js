function naiveStringSearch(strO, strF){
    var counter = 0;
    for(let i = 0; i < strO.length; i++){

        for(let j = 0; j < strF.length ; j++){

            if(!(strO[i+j] === strF[j])){
                console.log("not matching this char");
                break;
            }
            if(j === (strF.length -1)){
                counter++;
            }

        }


    }

    console.log(counter);

}


naiveStringSearch("this is a sentence", "is");

//   2
// this is a sentence
//   0
