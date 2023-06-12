/*

    6/12/2023
    LeetCode / NeetCode
    49. Group Anagrams

*/

/* 

    Given an array of strings strs, group the anagrams together. 
    You can return the answer in any order.

    An Anagram is a word or phrase formed by rearranging the 
    letters of a different word or phrase, typically using 
    all the original letters exactly once.

*/

let strs = ["eat","tea","tan","ate","nat","bat"];

var groupAnagrams = function(strs) {

    //Create an object that will hold the paired anagrams.
    let obj = {};

    // Loop through the array of anagrams
    for (let str of strs) {

        // Split, sort alphabetically, and join them. 
        let letters = str.split("").sort().join("");

        /*
            If the object contains the sorted anagram, then push 
            the anagram in the current iteration. Else, store the 
            current iteration's anagram in the object.

        */
        obj[letters] ? obj[letters].push(str) : obj[letters] = [str];
    }


    //Returns an array of the object's values.
    return Object.values(obj);

};

groupAnagrams(strs);

// Time Complexity: O(n*klog(k)) where n is the length of input array and k is the maximum length of a string in input array
// Space Complexity: O(n)