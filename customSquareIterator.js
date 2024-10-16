// Custom iterable object
const squaredNumbers = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],  // You can modify this array as needed
    
    [Symbol.iterator]() {
        let index = 0;
        const numbers = this.numbers;

        return {
            next() {
                if (index < numbers.length) {
                    const value = numbers[index];
                    index++;
                    return { value: value * value, done: false };  // Return the square of the number
                } else {
                    return { done: true };  // End of iteration
                }
            }
        };
    }
};

// Example usage
for (let square of squaredNumbers) {
    console.log(square);
}
