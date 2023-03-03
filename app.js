
/**
 * It generates a random number between min and max, and if that number is prime, it returns it.
 * Otherwise, it generates another random number and checks if that's prime, and so on
 * A recursive function
 * 
 * @param [min=0] - The minimum number to start generating primes from.
 * @param [max=100] - The maximum number to generate a prime from.
 * @returns A random prime number between 0 and 100.
 */
function generateRandomPrime (min = 0, max = 100) {
  while (true) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min
    let isPrime = true
    if (num < 2) {
      isPrime = false
    } else {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false
          break
        }
      }
    }
    if (isPrime) {
      return num
    }
  }
}

const randomPrime = generateRandomPrime()
console.log('randomPrime 🧡💛💚💙💜 : ', randomPrime, '\n')
console.log('=> breakpoint')
