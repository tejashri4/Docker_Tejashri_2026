const http = require("http");
const server = http.createServer((req, res) => {
  res.end("🚀 Welcome to Tejashri's Docker Projjects | Docker Deployment on AWS EC2");
});
server.listen(3000);

