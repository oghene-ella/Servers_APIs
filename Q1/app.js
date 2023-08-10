// ! Call all the inbuilt methods needed for this assignment
const fs = require("fs");
const http = require("http");

// ? Create the port and hostname
const Port = 3005;
const Hostname = "localhost";

// ! Create the server
const server = http.createServer();

// ? Create a request handler
server.on("request", (req, res) => {

    if (req.url === "/"){
        const fileSuccess = fs.readFileSync("./static/index.html")
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.write(fileSuccess)
        res.end();
    }

    if (req.url.endsWith(".html") && req.method === "GET") {
        const fileUrl = req.url.split("/");
        const fileName = fileUrl[1];
        const fileLocation = `./static/${fileName}`;

        // ? console.log("FILE URL: ", fileUrl, "FILE NAME:", fileName, "FILE LOCATION: ", fileLocation);

        try {
            const file = fs.readFileSync(fileLocation);
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.write(file);
            res.end();
        } 

        catch (error) {
            const fileError = fs.readFileSync("./static/404.html");
            res.setHeader("Content-Type", "text/html");
            res.writeHead(404);
            res.write(fileError);
            res.end();
        }
    }
})

// ! Add an event listener
server.listen(Port, Hostname, () => {
    console.log(`Listening on port: http://${Hostname}:${Port}`)
})