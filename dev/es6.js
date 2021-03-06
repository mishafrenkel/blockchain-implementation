class Blockchain {
  constructor() {
    this.chain = [];
    this.newTransactions = [];
  }
  createNewBlock(nonce, previousBlockHash, hash) {
    const newBlock = {
      index: this.chain.length + 1,
      timestamp: Date.now(),
      transactions: this.newTransactions,
      nonce: nonce,
      hash: hash,
      previousBlockHash: previousBlockHash
    };
    this.newTransaction = [];
    this.chain.push(newBlock);

    return newBlock;
  }
}
