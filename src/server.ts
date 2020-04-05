import WebSocket from 'ws';
const wss = new WebSocket.Server({ port: 5001 });
wss.on('connection', function (ws) {
  ws.on('message', function (message) {
    console.log('....' + message);
    wss.clients.forEach(function each(client) {
      if (client !== ws) {
        client.send(message);
      }
    });
  });
  ws.on('close', function () {
    console.log('One of clients leaves the communication');
  });
  console.log('New client connected');
});
