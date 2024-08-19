// Sum of Two Numbers
function sum(a, b) {
  return a+b;
}

// Factorial of a Number
function factorial(n) {
  if (n === 0 || n === 1) {
        return 1;
  }
    return n * factorial(n - 1);
}

// Find the Largest Number
function findLargest(arr) {
  let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Count Vowels in a String
function countVowels(str) {
  str = str.toLowerCase();
    const vowels = 'aeiou';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

// Check if a Number is Prime
function isPrime(n) {
 if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
