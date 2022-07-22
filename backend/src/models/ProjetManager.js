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

  insert(projet) {
    return this.connection.query(
      `insert into ${ProjetManager.table} (nom, description, image_url, liens) values (?, ?, ?, ?)`,
      [projet.nom, projet.description, projet.image_url, projet.liens]
    );
  }

  findTechnosByProjetsId(projetsId) {
    return this.connection.query(
      `SELECT id, nom, image_url FROM technos WHERE id IN (SELECT technos_id FROM technoprojets WHERE projets_id = ?);
      `,
      [projetsId]
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
