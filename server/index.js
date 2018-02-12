// ./server/index.js

import http from 'http';
import app from './server.js';

const server = http.createServer(app);

let currentApp = app;
server.listen(3000);

if (module.hot) {
  module.hot.accept('./server', () => {
    const nextApp = require('./server').default;
    
    server.removeListener('request', currentApp);
    server.on('request', nextApp);
    currentApp = nextApp;
  });
}

