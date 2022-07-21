const AbstractManager = require("./AbstractManager");

class TechnosManager extends AbstractManager {
  static table = "technos";

  update(technos) {
    return this.connection.query(
      `update ${TechnosManager.table} set nom = ?, image_url = ? where id = ?`,
      [technos.nom, technos.image_url, technos.id]
    );
  }

  delete(technosId) {
    return this.connection.query(
      `
    DELETE FROM ${this.table} WHERE id = ?
    LIMIT 1`,
      [technosId]
    );
  }
}

module.exports = TechnosManager;
