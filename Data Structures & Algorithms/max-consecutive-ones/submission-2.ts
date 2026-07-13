class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let maxCon = 0;
        let count = 0;
        for (let i = 0; i< nums.length; i++) {
            if (nums[i] === 1) {
                count++;
            } else {
                if (count > maxCon) {
                    maxCon = count;
                }
                count = 0;
            }

        }
        return count > maxCon ? count : maxCon;
    }
}
