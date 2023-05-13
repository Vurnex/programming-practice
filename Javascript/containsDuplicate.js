/*

    5/13/2023
    LeetCode
    217. Contains Duplicate 

*/


let nums = [1,2,3,1];

var containsDuplicate = function(nums) {

    //First loop to iterate through the nums array
    for (let i = 0; i < nums.length; i++) {

        //store current iteration number
        let curr = nums[i];

        //Second loop that creates an iteration ahead of the first loop
        //and compares it to the first iteration
        for (let j = i + 1; j < nums.length; j++) {

            //If a duplicate is found, return true. Otherwise, false is returned
            if (nums[j] == curr) {
                return true;
            }

        }
    }

    return false;
    
};

console.log(containsDuplicate(nums));