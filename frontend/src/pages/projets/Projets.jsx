import { useEffect, useState } from "react";
import axios from "axios";
import "./Projets.css";
import Technos from "../../components/Technos";

export default function Projets() {
  const [projets, setProjets] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/projets`, {
        withCredentials: true,
      })
      .then((res) => res.data)
      .then((data) => {
        setProjets(data);
      });
  }, []);
  return projets.map((el) => (
    <div className="conteneurCarte">
      <div className="carteProjet">
        <img src={el.image_url} alt={el.image_url} />
        <h1>{el.nom}</h1>
        <p>{el.description}</p>
        <Technos projetId={el.id} />
        <a href={el.liens} target="_blank" rel="noreferrer">
          Voir le site
        </a>
      </div>
    </div>
  ));
}
