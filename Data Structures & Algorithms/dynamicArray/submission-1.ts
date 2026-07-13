class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */

    private array: number[];
    private size: number;
    private capacity: number;
    constructor(capacity: number) {
        this.array = new Array<number>(capacity);
        this.size = 0;
        this.capacity = capacity;
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this.array[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        const val = this.array[i];
        if (!val) this.size++;
        this.array[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if (this.size === this.capacity) {
            this.resize();
        }
        const size = this.size;
        this.array[this.size] = n;
        this.size = size + 1;
        
    }

    /**
     * @returns {number}
     */
    popback(): number {
        const lastEle = this.array[this.size-1];
        this.array[this.size-1] = null;
        this.size--;
        return lastEle;
    }

    /**
     * @returns {void}
     */
    resize(): void {
        const newArray = new Array<any>(this.capacity * 2);
        for(let i: number = 0; i < this.array.length; i++) { 
            newArray[i] = this.array[i];
        }
        this.array = newArray;
        this.capacity = this.capacity * 2;
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.capacity;
    }
}
