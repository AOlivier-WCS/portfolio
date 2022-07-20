const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  update(user) {
    return this.connection.query(
      `update ${UserManager.table} set firstname = ?, lastname = ?, email = ?, phoneNumber = ?, address = ?, postalCode = ?, city = ? where id = ?`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.phoneNumber,
        user.address,
        user.postalCode,
        user.city,
        user.id,
      ]
    );
  }

  delete(userId) {
    return this.connection.query(
      `
    DELETE FROM ${this.table} WHERE id = ?
    LIMIT 1`,
      [userId]
    );
  }
}

module.exports = UserManager;
