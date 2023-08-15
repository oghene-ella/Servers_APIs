const fs = require("fs");
const path = require("path");

const inventoryDB = path.join(__dirname, "../db", "inventory.json");

const updateMethod = (req, res) => {

    fs.readFile(inventoryDB, "utf8", (err, data) => {
      const getId = req.new_body.id;
      console.log(getId);

      if (err) {
        res.writeHead(404);
        res.write(err);
        res.end("An error occurred");
      }

      const dataObj = JSON.parse(data);
      console.log(dataObj);

      const dataIndex = dataObj.findIndex((info) => info.id === getId);
      console.log(dataIndex);

      if (dataIndex === -1) {
        res.writeHead(404);
        res.end("Inventory with the specific id is not found");
        return;
      }

      // fix this bug
      const updatedData = { ...dataObj[dataIndex], ...getId};
      dataObj.splice(dataIndex, 1, updatedData);
      // dataObj[dataIndex] = updatedData;

      console.log(updatedData);
      // console.log(dataObj[dataIndex])
      
      fs.writeFile(inventoryDB, JSON.stringify(dataObj), (err) => {
        if (err) {
          res.writeHead(500);
          res.end(
            JSON.stringify({
              message: "Internal Server Error. could not find the pet data",
            })
          );
        }

        res.writeHead(200);
        res.end("Update Successful");
      });
    });
};

module.exports = {
  updateMethod,
};
