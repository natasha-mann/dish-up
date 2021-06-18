const bcrypt = require("bcrypt");

const beforeBulkCreate = async (users) => {
  const promises = users.map((user) => {
    return bcrypt.hash(user.password, 10);
  });

  const passwords = await Promise.all(promises);

  passwords.forEach((password, index) => {
    users[index].password = password;
  });
};

const beforeCreate = async (user) => {
  user.password = await bcrypt.hash(user.password, 10);
};

module.exports = { beforeBulkCreate, beforeCreate };
