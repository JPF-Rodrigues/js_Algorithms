function isPalindrome(str){


    // it's easier to work with arrays in recursive functions

    //let arr = str.split('');


    if(str.length === 0) return true;

    if(str.charAt(0) !== str.charAt(str.length - 1)) return false;

    return isPalindrome(str.slice(1, -1));

}

isPalindrome('blabla');