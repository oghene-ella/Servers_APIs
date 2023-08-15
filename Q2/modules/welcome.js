const welcomeMethod = (req, res) => {
    res.writeHead(200);
    res.end(`Welcome!\nMake use of "/inventory" to get the required information`);
};

module.exports = {
  welcomeMethod,
};
