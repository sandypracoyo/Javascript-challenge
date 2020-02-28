const first = [ 'Behind', 'every', 'great', 'man' ];
const second = [ 'is', 'a', 'woman' ];
const third = [ 'rolling', 'her', 'eyes' ];

const a = [];
a.push(...first, ...second, ...third);
const b = a.join(' ');
console.log(a);

console.log(b);
