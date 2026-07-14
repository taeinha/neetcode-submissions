class MinStack {
    constructor(
        public stack: number[] = [],
        public min: number[] = []
        ) {

    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        // const lastMin = this.min[this.min.length-1];
        // if (lastMin >= val) {
        //     this.min.push(val)
        // }
        this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop(): void {

        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length-1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        let min = this.stack[0];
        this.stack.forEach((num) => {
            if (num < min) min = num
        })
        return min;
    }
}
