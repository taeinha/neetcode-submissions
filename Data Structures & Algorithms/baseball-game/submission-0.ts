class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {

        const stack: number[] = [];
        for(let i=0; i< operations.length;i++) {
            switch (operations[i]){
                case "+": {
                    const a = stack[stack.length-2] ?? 0
                    const b = stack[stack.length-1] ?? 0
                    stack.push(a+b)
                    break;
                }
                case "C": {
                    stack.pop();
                    break;
                }
                case "D": {
                    const a = stack[stack.length-1] ?? 0;
                    stack.push(a*2)
                    break;
                }
                default:
                    stack.push(Number(operations[i]))
                    break;
            }
        }
        return stack.reduce((a, b) => a+b, 0);
    }
}
