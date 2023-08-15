const welcomeMethod = (req, res) => {
    res.writeHead(200);
    res.end(`Welcome!\nMake use of "/inventory" route to get the required information with a request method`);
};

module.exports = {
  welcomeMethod,
};
