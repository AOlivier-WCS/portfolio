const AbstractManager = require("./AbstractManager");

class ProjetManager extends AbstractManager {
  static table = "projets";

  update(projet) {
    return this.connection.query(
      `update ${ProjetManager.table} set nom = ?, image_url = ? where id = ?`,
      [projet.nom, projet.image_url, projet.id]
    );
  }

  delete(projetId) {
    return this.connection.query(
      `
    DELETE FROM ${this.table} WHERE id = ?
    LIMIT 1`,
      [projetId]
    );
  }
}

module.exports = ProjetManager;
