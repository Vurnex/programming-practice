/*

    5/15/2023
    LeetCode / NeetCode
    242. Valid Anagram

*/

/*
    An Anagram is a word or phrase formed by rearranging 
    the letters of a different word or phrase, 
    typically using all the original letters exactly once.
*/

let s = "anagram";
let t = "nagaram";

/*  Below is an arrow function that splits the above strings, 
    sorts them alphabetically, and joins them. If
    they are equal, they are considered anagrams. 
*/

var isAnagram = (s, t) => s.split('').sort().join('') === t.split('').sort().join('');

/*

    The time and space complexity of the sort cannot be 
    guaranteed as it depends on the implementation.

    Could be O(nlog(n))

*/