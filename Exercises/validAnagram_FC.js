// Given two strings create a function that checks if they're anagrams of one another
    // It's assumed that the string contain only one word, capitalization and ponctuation are non factors in the solution

    function validAnagram(str1, str2){
    
        // Start by iterating throgh each of the strings, independanlty, and storing key-Value pairs of the freqwuency of each letter
            // Create 2 objects to store information
    
        var Obj_str1 = {};
        var Obj_str2 = {};
    
        for (let letter of str1){
            if (letter in Obj_str1) {
                Obj_str1[`${letter}`] += 1;
            }
            else{
                Obj_str1[`${letter}`] = 1;
            }
    
        }
    
        for (let letter of str2){
            if (letter in Obj_str2) {
                Obj_str2[`${letter}`] += 1;
            }
            else{
                Obj_str2[`${letter}`] = 1;
            }
        }
    
        if(str1.length !== str2.length){
            console.log("\nCan't be an Anagram because the string differ in LENGTH.\n");
            return false;
        }
    
        for(let key in Obj_str1){
            if(!(key in Obj_str2)){
                console.log(`\nCan't be an Anagram because ${key} is not on the second string.\n`);
                return false;
            }
    
            else if(Obj_str1[`${key}`] !== Obj_str2[`${key}`]){
                console.log(`\nCan't be an Anagram because '${key}' occurs different times int he strings.\n`);
                return false;
            }
            
            else{
                console.log('\nThe strings are ANAGRAMS!\n');
            }
        }
        return true;
    
     }

 validAnagram('azez', 'eaez');