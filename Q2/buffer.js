const addPets = (req, res) => {
  console.log("add to the post router");

  const body = [];

  req.on("data", (piece) => {
    body.push(piece);
  });

  req.on("end", () => {
    const parsedPets = Buffer.concat(body).toString();
    const parsedNewPets = JSON.parse(parsedPets);

    fs.readFile(dbPath, "utf8", (err, data) => {
      if (err) {
        res.writeHead(404);
        res.write(err);
        res.end("An error occurred");
      }

      const oldPets = JSON.parse(data);

      // const lastId = oldPets[oldPets.length - 1];
      // const lastIdConvert = lastId.id;
      // const newId = lastIdConvert + 1;

      oldPets.push({
        ...parsedNewPets,
        id: Math.floor(Math.random() * 500).toString(),
        // id: newId,
      });

      fs.writeFile(dbPath, JSON.stringify(oldPets), (err) => {
        if (err) {
          res.writeHead(500);
          res.end(
            JSON.stringify({
              message: "Internal Server Error. could not find the pet data",
            })
          );
        }

        res.end(JSON.stringify(parsedNewPets));
      });
    });
  });

  res.end();
};
