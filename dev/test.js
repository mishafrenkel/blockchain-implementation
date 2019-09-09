const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

// bitcoin.createNewBlock(2389, 'OIUOEREDHKHKD', '78s97d4x6dsf');
// bitcoin.createNewBlock(2389, 'OIUOEREDHKHKD', '78s97d4x6dsf');
// bitcoin.createNewBlock(2389, 'OKJOERETHKHKD', '78s97d4x6dsf');
// bitcoin.createNewBlock(2389, 'OIUOERDEGWKHKD', '78s97d4x6dsf');

bitcoin.createNewBlock(789457, 'OIUOEDJETH8754DHKD', '78SHNEG45DER56');
bitcoin.createNewTransaction(100, 'ALEXHT845SJ5TKCJ2', 'JENN5BG5DF6HT8NG9');
console.log(bitcoin)