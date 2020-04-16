const server = require('./server.js');

port = 4000;

server.listen(port, () => console.log(`server listening on port ${port}`))