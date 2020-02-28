function censor(word) {
	let wordCensor = '';
	for (let i = 0; i < word.length; i++) {
		wordCensor += '*';
	}
	return wordCensor;
}

function censorParagraph(paragraph, bannedWords) {
	for (let word = 0; word < bannedWords.length; word++) {
		paragraph = paragraph.replace(bannedWords[word], censor(bannedWords[word]));
	}
	return paragraph;
}
let paragraph = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
let bannedWords = [ 'dolor', 'elit', 'quis', 'nisi', 'fugiat', 'proident', 'laborum' ];
let newParagraph = censorParagraph(paragraph, bannedWords);
console.log(newParagraph);
