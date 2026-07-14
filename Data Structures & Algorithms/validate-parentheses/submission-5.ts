class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if (s.length % 2 !== 0) return false;
        const stack: string[] = []

        for(let i=0;i<s.length;i++) {

            if (s[i] === "{" || s[i] === "(" || s[i] === "[") {

                stack.push(s[i])
            } else {
                const open = stack.pop();
                const together = open + s[i];
                console.log(together)
                if (together === "{}" || together === "[]" || together === "()") continue;
                return false;
            }
        }
        console.log(stack)
        return stack.length === 0

    }
}
