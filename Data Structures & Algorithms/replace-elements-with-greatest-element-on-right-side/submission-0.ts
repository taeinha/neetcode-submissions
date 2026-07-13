class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {

        for (let i=0; i< arr.length; i++) {
            if (i === arr.length-1) break;
            const currNum = arr[i];
            let maxEle = arr[i+1];
            for (let j = i+1; j < arr.length; j++) {
                if (arr[j] > maxEle) {
                    maxEle = arr[j]
                }
            }
            arr[i] = maxEle;
        }
        arr[arr.length-1] = -1;
        return arr
    }
}
