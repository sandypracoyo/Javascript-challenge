let a = `Aku ingin begini
Aku ingin begitu
Ingin ini itu banyak sekali

Semua semua semua
Dapat dikabulkan
Dapat dikabulkan
Dengan kantong ajaib

Aku ingin terbang bebas
Di angkasa
Hei… baling baling bambu

La... la... la...
Aku sayang sekali
Doraemon

La... la... la...
Aku sayang sekali`;

let aku = a.toLowerCase().match(/aku/g);
let ingin = a.toLowerCase().match(/ingin/g);
let dapat = a.toLowerCase().match(/dapat/g);

console.log(`kata aku muncul sebanyak ${aku.length} kali`);
console.log(`kata aku muncul sebanyak ${ingin.length} kali`);
console.log(`kata aku muncul sebanyak ${dapat.length} kali`);
