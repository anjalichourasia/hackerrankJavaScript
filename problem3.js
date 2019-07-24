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

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var i = 0;
    var j = 0;
    var a=[];
    for (i = 0; i < s.length; i++)
        if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u')
            console.log(s[i]);
        else
            a[j++] = s[i];

    for (i = 0; i < j; i++)
        console.log(a[i]);
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}
