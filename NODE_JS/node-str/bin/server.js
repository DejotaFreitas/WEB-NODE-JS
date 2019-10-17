'use stric'

const app = require('../src/app');
const http = require('http');
const debug = require('debug')('nodestr:server');

const port = normalizarPorta(process.env.PORT || '9999');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

console.log("\nSERVIDOR INICIADO COM SUCESSO.\n");
console.log("SERVIDOR RODANDO NA PORTA: "+port+"\n");

//============FUNCOES=UTEIS==========---
function normalizarPorta(valuePort){
  const port = parseInt(valuePort);
  if (isNaN(port)) {
    return valuePort;
  }
  if (port>=0) {
    return port;
  }
  return false;
}

function onError(error){
  switch (error.code) {
    case 'EADDRINUSE':
      console.log("========================================================\n");
      console.log("onError: SERVIDOR JÁ ESTA RODANDO OU A PORTA ESÁ OCUPADA");
      console.log("========================================================\n");
      process.exit(1);
    break;
    case 'EACCES':
      console.log("========================================================\n");
      console.log("onError: USUÁRIO NÃO TEM O PRIVILÉGIO NECESSÁRIO PARA RODAR O SERVIDOR");
      console.log("========================================================\n");
      process.exit(1);
    break;
    default:
      throw  error;
  }
}

function onListening(){
  const addr = server.address();
  const bind = typeof addr==='string' ? 'pipe '+addr : 'port '+addr.port;
  debug('Listening on ' + bind);
}
