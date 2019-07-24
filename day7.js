'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    
    // let re = /\b[aeiou]\b/;
    // The.* means that there may be characters after that first captured character 0 or more
    //In this situation, .* will allow for something like aa, but .+ will not.

// .+ makes it so that there has to be at least one character between the first and the last, and thus enforces the constraint that the string length must be >= 3.
    // \1$ checks that the last character matches the first captured charcter
    let re = /^([aeiou]).+\1$/;
    /*
     * Do not remove the return statement
     */
    return re;
}


function main() {
    const re = regexVar();
    const s = readLine();
    
    console.log(re.test(s));
}
/*
1- ^ asserts position at start of the string 
2- 1st Capturing Group ([aeiou]) 
3- .* matches any character (except newline) - between zero and unlimited times, as many times as possible, giving back as needed (greedy) 
4- \1 matches the same text as most recently matched by the 1st capturing group 
5- $ asserts position at the end of the string
*/
