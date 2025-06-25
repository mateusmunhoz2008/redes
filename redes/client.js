const dgram = require('dgram');
const readline = require('readline');

const client = dgram.createSocket('udp4');
const PORT = 9000;
const HOST = '127.0.0.1';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function promptMessage() {
  rl.question('Digite sua mensagem: ', (message) => {
    const buffer = Buffer.from(message);
    client.send(buffer, 0, buffer.length, PORT, HOST, (err) => {
      if (err) console.error('Erro:', err);
      promptMessage(); 
    });
  });
}

promptMessage();