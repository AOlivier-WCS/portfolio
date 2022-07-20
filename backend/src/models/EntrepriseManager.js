const AbstractManager = require("./AbstractManager");

class EntrepriseManager extends AbstractManager {
  static table = "entreprises";

  insert(entreprise) {
    return this.connection.query(
      `insert into ${EntrepriseManager.table} (nom, poste, description, date) values (?, ?, ?, ?)`,
      [
        entreprise.nom,
        entreprise.poste,
        entreprise.description,
        entreprise.date,
      ]
    );
  }

  update(entreprise) {
    return this.connection.query(
      `update ${EntrepriseManager.table} set nom = ?, poste = ?, description = ?, date = ? where id = ?`,
      [
        entreprise.nom,
        entreprise.poste,
        entreprise.description,
        entreprise.date,
        entreprise.id,
      ]
    );
  }
}

module.exports = EntrepriseManager;
