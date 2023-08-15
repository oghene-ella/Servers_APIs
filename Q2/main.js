/* Step 1, import the modules */
const http = require("http");

/* Import the custom modules*/
const welcomeJs = require("./modules/welcome.js");
const getJs = require("./modules/get.js");
const postJs = require("./modules/post.js");
const updateJs = require("./modules/update.js");
const bodyParser = require("./parser.js")

/* Step 2, define the port and host name*/
const hostname = "localhost";
const port = 4300;

/* Create the server */
const server = http.createServer((req, res) => bodyParser.parser(req, res))

/* Create a function that handles all the request */
server.on("request", (req, res) => {

  // the index get Method
  if (req.url === "/" && req.method === "GET") {
    welcomeJs.welcomeMethod(req, res);
  }

  // the get Method
  if (req.url === "/inventory" && req.method === "GET") {
    getJs.getMethod(req, res);
  }

  // the post Method
  if (req.url === "/inventory" && req.method === "POST") {
    postJs.postMethod(req, res);
  }

  if (req.url === "/inventory" && req.method === "PUT") {
    updateJs.updateMethod(req, res);
  }
});

/* add an event listener */
server.listen(port, hostname, () => {
  console.log(`Listening on http://${hostname}:${port}`);
});
