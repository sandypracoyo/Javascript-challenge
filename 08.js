class Str {
	static lower(wordlower) {
		console.log(wordlower.toLowerCase());
	}

	static upper(wordupper) {
		console.log(wordupper.toUpperCase());
	}

	static capitalize(capital) {
		const cap = capital.split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
		console.log(cap);
	}

	static reverse(textreverse) {
		let a = textreverse.split('').reverse('').join('');
		console.log(a);
	}

	static contains(contains, contain) {}

	static random(length = '16') {
		let char = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		let result = '';
		for (let i = length; i > 0; i--) {
			result = result + char[Math.floor(Math.random() * char.length)];
		}
		console.log(result);
	}

	static slug(title) {
		const reg = /[\W]|\s/g;
		let tempSlug = title.toLowerCase().replace(reg, ' ');
		let newSlug = tempSlug.split(' ');

		console.log(newSlug);
	}

	static count(counts) {
		console.log(counts.length);
	}

	static countWords(words) {
		let a = words.split(' ');
		console.log(a.length);
	}

	static trim(paragraph, panjang = '100', pengganti = '...') {
		if (panjang < 100 && pengganti === '') {
			console.log(paragraph);
		} else {
			console.log(paragraph.slice(0, panjang) + pengganti);
		}
	}

	static trimWords(paragraph, panjang) {
		let hasil = [];
		console.log(hasil);
	}
}

Str.lower('MAKAN');
Str.upper('malam');
Str.reverse('kasur');
Str.capitalize('saya ingin makan');
Str.contains([ 'Saya ingin makan sate' ]);
Str.random(16);
const title = 'JavaScript, TypeScript & Dart - Bahasa mana yang akan populer di 2018?';
Str.slug(title);
Str.slug(title, '_');
Str.count('lorem ipsum');
Str.countWords('lorem ipsum');

const text =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
Str.trim('Less than 100 characters'); // Less than 100 characters

Str.trim(text); // Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...

Str.trim(text, 20); // Lorem ipsum dolor si...

Str.trim(text, 20, '·····'); // Lorem ipsum dolor si·····
Str.trimWords(text, 3);
