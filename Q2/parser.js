const parser = (req, res) => {
  const new_body = [];

  req.on("data", (lego_blocks) => {
    new_body.push(lego_blocks);
  });

  req.on("end", () => {
    if (new_body.length) {
      const parsedBuffers = Buffer.concat(new_body).toString();

      req.new_body = JSON.parse(parsedBuffers);
    }
  });
};

module.exports = {
  parser,
};
