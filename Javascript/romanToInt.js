/*
    4/13/23 
    leetcode 
*/

//Defines an object
symbols = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

var romanToInt = function(s) {

    value = 0;
    
    for(let i = 0; i < s.length; i+=1){

        //A Conditional ternary operator which takes three operands. 
        //The condition comes before the question mark. Then, following that is two expressions
        //that will be executed if the condition is true or false.

        symbols[s[i]] < symbols[s[i+1]] ? value -= symbols[s[i]]: value += symbols[s[i]]

        //The variable s is used to indicate the position in the symbols object.
    
    }
    
    return value
};