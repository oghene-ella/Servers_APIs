const fs = require("fs");
const path = require("path");

const inventoryDB = path.join(__dirname, "../db", "inventory.json");

const postMethod = (req, res) => {
    fs.readFile(inventoryDB, "utf8", (error, data) => {
        if (error) {
            res.writeHead(404);
            res.write(error)
            res.end("An error occurred")
        }

        const oldDB = JSON.parse(data)

        oldDB.push({
            ...req.new_body,
            id: Math.floor(Math.random() * 500).toString(),
        });

        fs.writeFile(inventoryDB, JSON.stringify(oldDB), (err) => {
            if (err) {
            res.writeHead(500);
            res.end(
                JSON.stringify({
                message:
                    "Internal Server Error. could not find the pet data",
                })
            );
            }

            res.write("Successfully Added an Item\n");
            res.end(JSON.stringify(oldDB));
        });
    });
}

module.exports = {
    postMethod
};