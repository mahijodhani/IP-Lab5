// Generator function to produce prime numbers up to a given limit
function* generatePrimes(limit) {
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    for (let num = 2; num <= limit; num++) {
        if (isPrime(num)) {
            yield num;
        }
    }
}

// Example usage
const limit = 100;  // Set the limit here
const primeGenerator = generatePrimes(limit);

for (let prime of primeGenerator) {
    console.log(prime);
}
