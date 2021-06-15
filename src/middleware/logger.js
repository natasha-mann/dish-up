const moment = require("moment");

const logger = (req, res, next) => {
  const { method, path } = req;
  console.log(`[${method}] - ${path} at ${moment()}`);

  next();
};

module.exports = logger;