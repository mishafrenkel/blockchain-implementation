const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();
const uuid = require('uuid/v1');
const rp = require('request-promise');

const port = process.argv[2];


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/blockchain', (req, res) => {

  res.send(bitcoin);
});

app.post('/transaction', (req, res) => {
  const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
  res.json({ note: `Transaction will be added in block ${blockIndex}.` });
});

app.get('/mine', (req, res) => {
  // const newBlock = bitcoin.createNewBlock();
  const lastBlock = bitcoin.getLastBlock();
  const previousBlockHash = lastBlock['hash'];
  const currentBlockData = {
    transactions: bitcoin.pendingTransactions,
    index: lastBlock['index'] + 1
  };
  const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
  const blockHash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);
  const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockHash);

  const nodeAddress = uuid().split('-').join('');
  bitcoin.createNewTransaction(12.5, "00", nodeAddress);

  res.json({
    note: "New block mined succesfully",
    block: newBlock
  })
});

app.post('/register-and-broadcast-node', (req, res) => {
  const newNodeUrl = req.body.newNodeUrl;
  if (bitcoin.networkNodes.indexOf(newNodeUrl) == -1) {
    butcoin.networkNodes.push(newNodeUrl);
  }
  const regNodesPromises = [];
  bitcoint.networkNodes.forEach(networkNodeUrl => {
    const requestOptions = {
      uri: networkNodeUrl + '/register-node',
      method: 'POST',
      body: { newNodeUrl: newNodeUrl },
      json: true
    };
    regNodesPromises.push(rp(requestOptions));
  })

  Promise.all(regNodesPromises)
    .then(data => {
      const bulkRegisterOptions = {
        uri: networkNodeUrl + '/register-node-bulk',
        method: 'POST',
        body: { allNetworkNodes: [...bitcoint.networkNodes, bitcoin.currentNodeUrl] },
        json: true,
      };
      return rp(bulkRegisterOptions);
    }).then(data => {
      res.json({ note: 'New Node registered with network succesfully' });
    });
});

// register a node with the network
app.post('/register-node', function (req, res) {
  const newNodeUrl = req.body.newNodeUrl;
  const nodeNotAlreadyPresent = bitcoin.networkNodes.indexOf(newNodeUrl) == -1;
  const notCurrentNode = bitcoin.currentNodeUrl !== newNodeUrl;
  if (nodeNotAlreadyPresent && notCurrentNode) bitcoin.networkNodes.push(newNodeUrl);
  res.json({ note: 'New node registered successfully.' });
});


app.post('register-nodes-bulk', (req, res) => {

});

app.listen(port, () => console.log(`listening on port ${port}`));
