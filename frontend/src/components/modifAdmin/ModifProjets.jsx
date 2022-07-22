/* eslint-disable import/no-unresolved */
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export default function ModifProjets() {
  const [projet, setProjet] = useState([]);
  const navigate = useNavigate();
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [liens, setLiens] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/projets`,
        {
          nom,
          description,
          image_url: imageUrl,
          liens,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => res.data)
      .then(() => {
        swal("Ajout de projet effectué");
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/projets`, {
        withCredentials: true,
      })
      .then((res) => res.data)
      .then((data) => {
        setProjet(data);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          swal("Merci de vous authentifier").then(() => navigate("/admin"));
        }
        if (err.response.status === 403) {
          swal("You're not authorized").then(() => navigate("/admin"));
        }
        console.error(err);
      });
  }, []);
  return (
    <>
      <p>Nouveau projet</p>
      <div style={{ display: "flex" }}>
        {/* {projet.map((user) => (
          <User
            key={user.id}
            firstname={user.firstname}
            lastname={user.lastname}
            email={user.email}
            phoneNumber={user.phoneNumber}
            address={user.address}
            postalCode={user.postalCode}
            city={user.city}
            id={user.id}
          />
        ))} */}
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", width: "20%" }}
        >
          <label htmlFor="text">
            <input
              type="text"
              placeholder="nom"
              value={nom}
              onChange={(e) => {
                setNom(e.target.value);
              }}
            />
          </label>
          <label htmlFor="text">
            <input
              type="text"
              placeholder="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </label>
          <label htmlFor="text">
            <input
              type="text"
              placeholder="image"
              value={imageUrl}
              onChange={(e) => {
                setImageUrl(e.target.value);
              }}
            />
            <label htmlFor="text">
              <input
                type="text"
                placeholder="liens"
                value={liens}
                onChange={(e) => {
                  setLiens(e.target.value);
                }}
              />
            </label>
          </label>
          <div style={{ display: "flex" }}>
            <input type="submit" value="Créer projet" />
          </div>
        </form>
      </div>
    </>
  );
}
