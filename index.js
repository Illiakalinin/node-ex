const { readFile } = require('fs/promises');
const http = require('http');

const httpServer = http.createServer((request, response) => {
  console.log('url :>> ', request.url);
  console.log('method :>> ', request.method);

  readFile('./index.html', { encoding: 'utf-8' })
    .then(data => {
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html');
      response.end(data);
    })
    .catch(err => {
      response.statusCode = 500;
      response.setHeader('Content-Type', 'text/html');
      response.end('File was not read');
    });
});

httpServer.listen(5000, 'localhost', () => {
  console.log(`Server is listening port 5000, host "localhost"`);
});
