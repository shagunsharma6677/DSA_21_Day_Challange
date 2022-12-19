// a reconnaissance unit should consist of exactly two soldiers. Since these two soldiers shouldn't differ much, their heights can differ by at mostKcentimeters.

count = 0;
for (let i = 0; i <= a.length - 1; i++) {
  for (let j = 0; j <= a.length - 1; j++) {
    if (i == j) continue;
    else if (Math.abs(a[i] - a[j]) <= K) {
      count++;
    }
  }
}
console.log(count);
