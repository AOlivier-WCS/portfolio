const AbstractManager = require("./AbstractManager");

class ProjetManager extends AbstractManager {
  static table = "projets";

  update(projet) {
    return this.connection.query(
      `update ${ProjetManager.table} set nom = ?, description = ?, image_url = ?, liens = ? where id = ?`,
      [
        projet.nom,
        projet.description,
        projet.image_url,
        projet.liens,
        projet.id,
      ]
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
