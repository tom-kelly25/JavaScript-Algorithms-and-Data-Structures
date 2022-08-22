//Palindrome Checker

function palindrome(str) {
    const alphanumericOnly = str
        //Lowercase the input
        .toLowerCase()
        //Strip numbers out
        .match(/[a-z0-9]/g);
        //Return
    return alphanumericOnly.join('') ===
        alphanumericOnly.reverse().join('');
}



palindrome("eye");