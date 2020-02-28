function evenOrOdd(number) {
	const even = [];
	const odd = [];
	number.forEach((e) => {
		if (e % 2 === 0) {
			even.push(e);
		} else {
			odd.push(e);
		}
	});

	console.log(even);
	console.log(odd);
}

function multiplyFive(number) {
	const multiply = [];
	number.forEach((e) => {
		if (e % 5 === 0) {
			multiply.push(e);
		}
	});
	console.log(multiply);
}

function isPrime(num) {
	for (let i = 2; i < num; i++) if (num % i === 0) return false;
	return num > 1;
}

function prime(number) {
	const primeNumb = [];
	number.forEach((e) => {
		if (isPrime(e)) {
			primeNumb.push(e);
		}
	});
	console.log(primeNumb);
}

function primeLess(number) {
	const primeLess = [];
	number.forEach((e) => {
		if (isPrime(e)) {
			if (e <= 100) {
				primeLess.push(e);
			}
		}
	});
	console.log(primeLess);
}

const number = [];
for (let i = 0; i <= 1000; i++) {
	number.push(i);
}

// evenOrOdd(number);
// multiplyFive(number);
prime(number);
primeLess(number);
