DROP DATABASE `portfolio`;
CREATE DATABASE  IF NOT EXISTS `portfolio`;
SET NAMES 'utf8mb4';
DROP DATABASE `portfolio`;
CREATE DATABASE  IF NOT EXISTS `portfolio` character set utf8mb4 collate utf8mb4_0900_ai_ci;
USE `portfolio`;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nom` varchar(255),
  `prenom` varchar(255),
  `email` varchar(255),
  `ville` varchar(255),
  `presentation` text,
  `password` varchar(255)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `user` (nom, prenom, email, ville, presentation, password) VALUES
("Olivier", "Alexis", "alexis_olivier@hotmail.fr", "St Julien de Concelles", "bootcamp de 5 mois", "$argon2i$v=19$m=16,t=2,p=1$NDVwU1RhQ2V0cVVnd1pqSA$7lRGFw6cpt4mz2o6uLozbw");

DROP TABLE IF EXISTS `entreprises`;
CREATE TABLE `entreprises` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nom` varchar(255),
  `poste` varchar(255),
  `description` text,
  `date` varchar(255)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `entreprises` (nom, poste, description, date) VALUES
('Wild Code School', 'développeur web et web mobile', "bootcamp de 5 mois", "de Février à Juillet 2022");

DROP TABLE IF EXISTS `technos`;
CREATE TABLE `technos` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nom` varchar(255),
  `image_url` varchar(255)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `technos` (nom, image_url) VALUES
('HTML', 'https://img1.freepng.fr/20180322/iuw/kisspng-web-development-html-logo-world-wide-web-consortiu-create-html-signature-5ab4731a64e900.6118207815217753864133.jpg'),
("CSS", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/640px-CSS3_logo_and_wordmark.svg.png");

DROP TABLE IF EXISTS `projets`;
CREATE TABLE `projets` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nom` varchar(255),
  `description` varchar(255),
  `image_url` varchar(255),
  `liens` VARCHAR(255)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `projets` (nom, description, image_url, liens) VALUES
('Sharing is Caring', 'projet client fictif site vitrine espace de co working', 'https://aolivier-wcs.github.io/Projet-1-Espace-CoWorking/img/logo.png', "https://aolivier-wcs.github.io/Projet-1-Espace-CoWorking/"),
("Tatou Quiz", "application web de divertissement", "https://tatou-quiz.netlify.app/assets/logo_toto.d4641405.png", "tatou-quiz.netlify.app/");

DROP TABLE IF EXISTS `technoProjets`;
CREATE TABLE `technoProjets` (
  `technos_id` int,
  `projets_id` int
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `technoProjets` (technos_id, projets_id) VALUES
(1, 1), (1,2), (2,1), (2,2);

DROP TABLE IF EXISTS `technoEntreprise`;
CREATE TABLE `technoEntreprise` (
  `technos_id` int,
  `entreprise_id` int
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `technoEntreprise` (technos_id, entreprise_id) VALUES
(1, 1), (2,1);

  ALTER TABLE `technoProjets` ADD CONSTRAINT `technos_ibfk_1` FOREIGN KEY (`projets_id`) REFERENCES `projets` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
  ALTER TABLE `technoProjets` ADD CONSTRAINT `technos_ibfk_2` FOREIGN KEY (`technos_id`) REFERENCES `technos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
  ALTER TABLE `technoEntreprise` ADD CONSTRAINT `technos_ibfk_3` FOREIGN KEY (`technos_id`) REFERENCES `technos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
  ALTER TABLE `technoEntreprise` ADD CONSTRAINT `technos_ibfk_4` FOREIGN KEY (`entreprise_id`) REFERENCES `entreprises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;