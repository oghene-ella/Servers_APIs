const fs = require("fs");
const path = require("path");

const inventoryDB = path.join(__dirname, "../db", "inventory.json")

const getMethod = (req, res) => {
    fs.readFile(inventoryDB, "utf8", (error, data) => {
        if (error) {
            res.write("Error: ", error);
            res.writeHead(404);
            res.end();
        }

        res.writeHead(200)
        // get all
        res.end(data);
    })
}

module.exports = {
    getMethod
};