/*

    5/16/2023
    LeetCode / NeetCode
    1. Two Sum

*/

/* 

    The Map object holds key-value pairs and remembers 
    the original insertion order of the keys. Any value 
    (both objects and primitive values) may be used as 
    either a key or a value.

    A way to approach this problem is to iterate over 
    every single item in the array and find the difference 
    between target and current number being processed.

*/

let nums = [2, 7, 11, 15];
let target = 9;

var twoSum = function(nums, target) {

    let mp = new Map();

    for (let i = 0; i < nums.length; i++) {

        let diff = target - nums[i];

        //If the map already has the difference, return the current number and the difference.
        if (mp.has(diff)) {

            return [i, mp.get(diff)]
        }

        //Store each processed number and index in a map for future reference
        //Once the loop re-iterates, it will check the map for an existing number
        mp.set(nums[i], i);
    }
    
};

/* 

    Time complexity: O(n) 
    Worse case, there are no pairs and we iterate over 
    every single item; fetching items from a map is 0(1)

    Space complexity: O(n) - We are using map to store the pairs

*/