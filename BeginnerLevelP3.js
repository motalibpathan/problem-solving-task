let N = 576.73;

const notes = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05, 0.01];

const notesCount = notes.map((value) => {
  result = Math.trunc(N / value);
  N = N % value;
  return result;
});

console.log("NOTAS:");
notesCount.slice(0, 6).forEach((value, i) => {
  console.log(value + " nota (s) de R$ " + notes[i].toFixed(2));
});

console.log("MOEDAS:");
notesCount.slice(6).forEach((value, i) => {
  console.log(value + " moeda (s) de R$ " + notes[i + 6].toFixed(2));
});
