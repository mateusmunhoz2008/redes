const dgram = require('dgram');
const server = dgram.createSocket('udp4');

const PORT = 9000;
const HOST = '127.0.0.1';

server.on('listening', () => {
  console.log(`Servidor UDP escutando em ${HOST}:${PORT}`);
});

server.on('message', (msg, rinfo) => {
  console.log(`[CLIENTE ${rinfo.address}:${rinfo.port}] : ${msg.toString()}`);
});

server.bind(PORT, HOST);