/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import "../pages/projets/Projets.css";

export default function Technos({ projetId }) {
  const [technos, setTechnos] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/projets/${projetId}`, {
        withCredentials: true,
      })
      .then((res) => res.data)
      .then((data) => {
        setTechnos(data);
      });
  }, []);
  return (
    <div className="logoTechnos">
      {technos.map((ele) => (
        <img src={ele.image_url} alt={ele.nom} />
      ))}
    </div>
  );
}
