const http = require('http');
const port = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bot sedang berjalan\n');
}).listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
