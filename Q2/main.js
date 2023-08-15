/* Step 1, import the modules */
const http = require("http");

/* Import the custom modules*/
const welcomeJs = require("./modules/welcome.js");
const getJs = require("./modules/get.js");
const getOne = require("./modules/getOne.js")
const postJs = require("./modules/post.js");
const updateJs = require("./modules/update.js");
const delJs = require("./modules/delete.js");
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

  // the get all Method
  else if (req.url === "/inventory" && req.method === "GET") {
    getJs.getMethod(req, res);
  }

  // the get one Method
  else if (req.url.startsWith("/inventory/") && req.method === "GET") {
    getOne.getOneMethod(req, res);
  }

  // the post Method
  else if (req.url === "/inventory" && req.method === "POST") {
    postJs.postMethod(req, res);
  } else if (req.url === "/inventory" && req.method === "PUT") {
    updateJs.updateMethod(req, res);
  } else if (req.url === "/inventory" && req.method === "DELETE") {
    delJs.delMethod(req, res);
  } else {
    res.end("Invalid route");
  }
});

/* add an event listener */
server.listen(port, hostname, () => {
  console.log(`Listening on http://${hostname}:${port}`);
});
