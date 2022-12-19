// You are given an arrayAofNintegers.
// Write a program to find thesumof the absolute difference between all such pairs (A[i], A[j]) such that i < j and ( j-i ) is prime.

// Input;-
// 6
// 1 2 3 5 7 12

function PrimeCheck(n) {
  let factors = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      factors++;
    }
  }
  if (factors == 2) {
    return true;
  } else {
    return false;
  }
}
let sum = 0;
for (let i = 0; i <= N - 1; i++) {
  for (let j = i + 1; j <= N - 1; j++) {
    if (PrimeCheck(j - i)) {
      sum += Math.abs(A[i] - A[j]);
    }
  }
}

console.log(sum);
