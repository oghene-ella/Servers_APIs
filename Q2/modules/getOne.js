const fs = require("fs");
const path = require("path");

const inventoryDB = path.join(__dirname, "../db", "inventory.json");


const getOneMethod = (req, res) => {
    const getId = req.url.split("/")[2];
    const dataDb = fs.readFileSync(inventoryDB);
    const dataDbObj = JSON.parse(dataDb);

    const dataIndex = dataDbObj.findIndex((info) => {
      return info.id === getId;
    });
    
    if (dataIndex === -1) {
        res.writeHead("404");
        res.end("Oops, Inventory not found");
    }
    res.end(JSON.stringify(dataDbObj[dataIndex]));
}

module.exports = {
  getOneMethod,
};