const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  update(user) {
    return this.connection.query(
      `update ${UserManager.table} set nom = ?, prenom = ?, email = ?, ville = ?, presentation = ? where id = ?`,
      [
        user.nom,
        user.prenom,
        user.email,
        user.ville,
        user.presentation,
        user.id,
      ]
    );
  }

  findByMail(email) {
    return this.connection.query(
      `select * from ${UserManager.table} where email = ?`,
      [email]
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
