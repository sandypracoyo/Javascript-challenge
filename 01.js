function palindrome(a) {
	const reg = /[\W_]/g;

	let b = a.toLowerCase().replace(reg, '');
	let c = b.split('').reverse('').join('');

	if (b !== c) {
		console.log('bukan palindrome');
	} else {
		console.log('palindrome');
	}
}

palindrome('ibu ratna antar ubi');
palindrome('kasur ini rusak');
palindrome('A nut for a jar of tuna.');
palindrome('Borrow or rob?');
palindrome('Was it a car or a cat I saw?');
palindrome('Yo, banana boy!');
palindrome('UFO tofu?');
