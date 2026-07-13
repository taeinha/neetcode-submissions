class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        let maxNum = arr[arr.length-1];
        for (let i = arr.length-2; i >= 0; i--) {
            let currVal = arr[i]
            arr[i] = maxNum
            if (currVal > maxNum) {
                maxNum = currVal
            }

        }
        arr[arr.length-1] = -1
        return arr
    }
}
