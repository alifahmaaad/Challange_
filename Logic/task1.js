const task1 = (a, m, k) => {
  var isPair = false;
  var sum = 0;
  for (let i = 0; i <= a.length - m; i++) {
    for (let j = i; j < m + i; j++) {
      for (let l = j + 1; l < m + i; l++) {
        if (a[j] + a[l] == k) {
          isPair = true;
        }
      }
    }
    if (isPair) {
      sum += 1;
      isPair = false;
    }
  }
  console.log(sum);
};
const a = [15, 8, 8, 2, 6, 4, 1, 7];
const m = 2;
const k = 8;
task1(a, m, k);
