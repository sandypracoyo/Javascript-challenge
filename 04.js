function leapYear(...year) {
	for (let i = year[0]; i <= year[1]; i++) {
		if (i % 4 === 0 && i % 100 !== 0 || i % 400 === 0) {
			console.log(i+(' Tahun kabisat'));
		} else {
			console.log(i+(' Bukan tahun kabisat'));
		}
	}
}

leapYear(1997, 2009);
