class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const ans: number[] = [];
        let n = nums.length;
        for (let i=0;i<nums.length;i++) {
            ans[i] = nums[i];
            ans[n] = nums[i];
            n++;
        }
        return ans;
    }
}
