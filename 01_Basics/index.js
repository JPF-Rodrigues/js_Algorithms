

/*  naming convention = canol notation
    decalre variables in different lines
    to clear a variable use -> " varName= null "
    there is also a variable type called symbol
    VARS can switch type of variable by assigning different type of values
*/

        // An object is a coded representation of something that exists in the real world
            // that has properties and methods (actions)



//////////////////////////////////       OBJECTS       /////////////////////////////////////////////////////////

let person = {
    name: 'Mosh',
    age: 30
};


    // Dot(".") notation
person.name = 'Mario';

    // Bracket Notation
person['age'] = 40;

//////////////////////////////////       ARRAYS       /////////////////////////////////////////////////////////


    // in JS the arrays are dynamic can stretch and reduce in size
        // it can also store different types of data
            // an ARRAY is of type Object! and has specific methods
let selectedCoulours = ['red', 'blue'];
selectedCoulours[2] = 'green';

                                                                                    //  IN ALL OF THE LOOPS THE VALUES INSIDE ARE NOT ACESSIBLE OUTSIDE THE LOOP BY DEFAULT  //


//////////////////////////////////       FOR LOOP      /////////////////////////////////////////////////////////

    // starts with the initialized value of "i"
    // does the loop until the condition is verified
        // regular FOR loop

for(let i = 1; i<= 2; i++){

    console.log('this is the value of i on the FOR LOOP: ' + i);

};


//////////////////////////////////       WHILE LOOP      /////////////////////////////////////////////////////////
let counterWhile = 1;

while(counterWhile <= 2){
    console.log('this is the value of i on the WHILE LOOP: ' + counterWhile);
    counterWhile++;
};

//////////////////////////////////       DO-WHILE LOOP      /////////////////////////////////////////////////////////
    // Always executes once!
let counterDoWhile = 1
do{
        // TEMPLATE LITERAL -  putting variables on strings
    console.log(`this is the value of i on the DO WHILE LOOP: ${counterDoWhile}`); 
    counterDoWhile++;

}while(counterDoWhile < 0);

//////////////////////////////////       FUNTIONS       /////////////////////////////////////////////////////////

function greet(name){
    console.log('Hello Function-san by ' + name);
}

greet(person.name);

//////////////////////////////////       FUNTIONS 2      /////////////////////////////////////////////////////////


console.log(selectedCoulours.length);