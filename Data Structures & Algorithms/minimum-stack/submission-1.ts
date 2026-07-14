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
        const lastMin = this.min[this.min.length-1];
        this.min.push(lastMin <= val ? lastMin : val)
        this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop(): void {

        this.stack.pop();
        this.min.pop()
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
        return this.min[this.min.length-1]
    }
}
