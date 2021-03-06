const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

console.log(bitcoin);

// Testing creating Blocks
// bitcoin.createNewBlock(2389, 'OIUOEREDHKHKD', '78s97d4x6dsf');
// bitcoin.createNewBlock(2389, 'OIUOEREDHKHKD', '78s97d4x6dsf');
// bitcoin.createNewBlock(2389, 'OKJOERETHKHKD', '78s97d4x6dsf');
// bitcoin.createNewBlock(2389, 'OIUOERDEGWKHKD', '78s97d4x6dsf');

// Testing creatingNewBlock, then adding pending transaction, then creating newblock which adds the transaction

// bitcoin.createNewBlock(789457, 'OIUOEDJETH8754DHKD', '78SHNEG45DER56');
// bitcoin.createNewTransaction(100, 'ALEXHT845SJ5TKCJ2', 'JENN5BG5DF6HT8NG9');
// bitcoin.createNewBlock(548764, 'AKMC875E6S1RS9', 'WPLS214R7T6SJ3G2');
// console.log(bitcoin.chain[1])


// bitcoin.createNewBlock(789457, 'OIUOEDJETH8754DHKD', '78SHNEG45DER56');

// bitcoin.createNewTransaction(100, 'ALEXHT845SJ5TKCJ2', 'JENN5BG5DF6HT8NG9');

// bitcoin.createNewBlock(548764, 'AKMC875E6S1RS9', 'WPLS214R7T6SJ3G2');

// bitcoin.createNewTransaction(50, 'ALEXHT845SJ5TKCJ2', 'JENN5BG5DF6HT8NG9');
// bitcoin.createNewTransaction(200, 'ALEXHT845SJ5TKCJ2', 'JENN5BG5DF6HT8NG9');
// bitcoin.createNewTransaction(300, 'ALEXHT845SJ5TKCJ2', 'JENN5BG5DF6HT8NG9');
// bitcoin.createNewBlock(998764, 'AKMC875ZYS1TD9', 'WPLS214R7T6SJ292');

// console.log(bitcoin);


// Testing PROOF OF WORK Logic
// const previousBlockHash = '87765DA6CCF0668238C1D27C35692E11';
// const currentBlockData = [
//   {
//     amount: 50,
//     sender: 'ALEXHT845SJ5TKCJ2',
//     recipient: 'JENN5BG5DF6HT8NG9'
//   },
//   {
//     amount: 200,
//     sender: 'ALEXHT845SJ5TKCJ2',
//     recipient: 'JENN5BG5DF6HT8NG9'
//   },
  // {
  //   amount: 300,
  //   sender: 'ALEXHT845SJ5TKCJ2',
  //   recipient: 'JENN5BG5DF6HT8NG9'
  // }
// ];
// // const nonce = 100;

// // console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));
// // console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));
// console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 7049));
